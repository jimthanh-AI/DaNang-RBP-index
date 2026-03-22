// Advice Map for Recommendations (Encouraging Tone)
const adviceMap = {
    "G2": { title: "🌿 Xây dựng Sổ tay nhân viên", text: "Chỉ một tài liệu ngắn gọn quy tắc đạo đức. Hãy làm cho doanh nghiệp của bạn trở thành nơi tử tế nhất để làm việc!", pillar: "Quản trị" },
    "G3": { title: "🤝 Cam kết Chống tham nhũng", text: "Ký cam kết không hối lộ – bước đi nhỏ khẳng định giá trị lớn bảo vệ tổ chức sạch sẽ.", pillar: "Quản trị" },
    "S7": { title: "❤️ Tủ thuốc Y tế Dự phòng", text: "Sức khỏe nhân viên là vô giá. Đầu tư một tủ thuốc nhỏ chứng minh bạn luôn chu toàn bảo bọc họ.", pillar: "Xã hội" },
    "S8": { title: "🛡️ Bảo hộ Lao động hoàn chỉnh", text: "Cung cấp đồ bảo hộ an toàn – hãy để mọi người về nhà lành lặn mỗi ngày. One life, be kind!", pillar: "Xã hội" },
    "E1": { title: "💡 Nhãn dán Tiết kiệm năng lượng", text: "Dán sticker tắt điện dọn nước – vừa cắt giảm chi phí vận hành vừa bảo vệ mầm xanh Trái Đất.", pillar: "Môi trường" },
    "E3": { title: "♻️ Thùng rác Phân loại tại Nguồn", text: "Ưu tiên đặt 2 chiếc thùng Rác tái chế – giáo dục thói quen văn minh mang lợi vạn điều lâu dài.", pillar: "Môi trường" },
    "C1": { title: "🏢 Ưu tiên Đối tác Địa phương", text: "Chọn nhà cung cấp Đà Nẵng kết nối mạng lưới – san sẻ giá trị lan tỏa cộng sinh thắt chặt bền chặt hơn.", pillar: "Cộng đồng" },
    "C4": { title: "🌟 Đóng góp Hoạt động Thiện nguyện", text: "Một hành động sẻ chia nhỏ lẻ cuối tuần – nhân đôi niềm vui kết gắn tập thể vững mạnh.", pillar: "Cộng đồng" }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Load Data from LocalStorage
    const scoreData = localStorage.getItem('rbp_scores');
    const totalScoreStr = localStorage.getItem('rbp_total');
    const answersData = localStorage.getItem('rbp_answers'); // [NEW]

    if (!scoreData || !totalScoreStr) {
         alert("Chưa có dữ liệu đánh giá. Bạn sẽ được chuyển hướng về trang câu hỏi.");
         window.location.href = "assessment.html";
         return;
    }

    const scores = JSON.parse(scoreData);
    const totalScore = parseFloat(totalScoreStr);
    const answers = answersData ? JSON.parse(answersData) : {}; // Answers loop

    // 2. Update Total Score & Badge Tier
    document.getElementById('total-score').innerText = totalScore;
    updateBadge(totalScore);

    // 3. Render Breakdown Grid Below
    renderBreakdownGrid(scores);

    // 4. Render Spider Chart
    renderSpiderChart(scores);

    // 5. Render Recommendations [NEW]
    renderRecommendations(answers);

    // 6. Setup PDF Download [NEW]
    setupPdfDownload(scores, totalScore, selectedAdviceForPdf);
});

let selectedAdviceForPdf = []; // Global to share with PDF

function renderRecommendations(answers) {
    const grid = document.getElementById('recommendations-grid');
    grid.innerHTML = ''; // Clear

    const missedQuizIds = Object.keys(answers).filter(key => answers[key] === 'No');
    selectedAdviceForPdf = []; // Reset

    missedQuizIds.forEach(id => {
        if(adviceMap[id] && selectedAdviceForPdf.length < 3) {
            selectedAdviceForPdf.push({ id, ...adviceMap[id] });
        }
    });

    if (selectedAdviceForPdf.length === 0) {
        selectedAdviceForPdf.push({ id: "G2", ...adviceMap["G2"] });
        selectedAdviceForPdf.push({ id: "S7", ...adviceMap["S7"] });
        selectedAdviceForPdf.push({ id: "E1", ...adviceMap["E1"] });
    }

    selectedAdviceForPdf.forEach(rec => {
        const card = document.createElement('div');
        card.className = 'recommendation-card';
        card.innerHTML = `
            <span class="rec-pillar-badge">${rec.pillar}</span>
            <div class="rec-title">${rec.title}</div>
            <div class="rec-text">"${rec.text}"</div>
            <div class="rec-footer">
                <button class="rec-btn">Bắt đầu ngay <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function setupPdfDownload(scores, totalScore, recs) {
    const btn = document.getElementById('download-pdf');
    if(!btn) return;
    
    btn.addEventListener('click', () => {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang tạo PDF...';

        const template = document.getElementById('pdf-report-template');

        // 1. Update text
        document.getElementById('pdf-score').innerText = totalScore;
        document.getElementById('pdf-tier').innerText = document.getElementById('badge-title').innerText;

        // 2. Set Canvas Image
        const canvas = document.getElementById('spiderChart');
        document.getElementById('pdf-chart-image').src = canvas.toDataURL('image/png');

        // 3. Set Recommendations
        const pdfRecs = document.getElementById('pdf-recs');
        pdfRecs.innerHTML = recs.map(r => `
            <div style="background: #F9FAFB; padding: 12px; border-radius: 8px; border-left: 4px solid #10B981;">
                <div style="font-size: 0.9rem; font-weight: 700; color: #065F46;">[${r.pillar}] ${r.title}</div>
                <div style="font-size: 0.8rem; color: #4B5563; font-style: italic; margin-top: 4px;">"${r.text}"</div>
            </div>
        `).join('');

        // 4. Filename Timestamp
        const now = new Date();
        const dateStr = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
        const filename = `RBP_Report_SME_${dateStr}.pdf`;

        // [NEW] Use 100% Bulletproof Native Browser Printing
        setTimeout(() => {
            window.print(); // Opens print dialog. User chooses "Save as PDF"
            
            // Re-enable button
            btn.disabled = false;
            btn.innerHTML = '<i class="fa-solid fa-file-pdf"></i> Tải báo cáo PDF';
        }, 500); // 0.5s for updates to settle
    });
}

function updateBadge(score) {
    const badgeIcon = document.getElementById('badge-tier-icon');
    const badgeTitle = document.getElementById('badge-title');

    if (score >= 85) {
        badgeTitle.innerText = "Xếp hạng Platinum (Xuất sắc)";
        badgeIcon.style.color = "#E5E7EB"; // Platinum/Silver reflection
        badgeIcon.innerHTML = `<i class="fa-solid fa-medal"></i>`;
    } else if (score >= 70) {
        badgeTitle.innerText = "Xếp hạng Gold (Tiên tiến)";
        badgeIcon.style.color = "#FBBF24"; // Gold
        badgeIcon.innerHTML = `<i class="fa-solid fa-certificate"></i>`;
    } else if (score >= 50) {
        badgeTitle.innerText = "Xếp hạng Silver (Thiết lập)";
        badgeIcon.style.color = "#9CA3AF"; // Silver
        badgeIcon.innerHTML = `<i class="fa-solid fa-award"></i>`;
    } else {
        badgeTitle.innerText = "Hạng Đạt chuẩn (Compliant)";
        badgeIcon.style.color = "#10B981"; // Emerald
        badgeIcon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    }
}

function renderBreakdownGrid(scores) {
    const grid = document.getElementById('breakdown-grid');
    grid.innerHTML = ''; // Clear

    const pillars = [
        { id: 'G', name: 'Quản trị', icon: 'fa-building-shield', color: '#10B981', bg: '#ECFDF5' },
        { id: 'S', name: 'Xã hội', icon: 'fa-users', color: '#3B82F6', bg: '#EFF6FF' },
        { id: 'E', name: 'Môi trường', icon: 'fa-leaf', color: '#10B981', bg: '#ECFDF5' },
        { id: 'C', name: 'Cộng đồng', icon: 'fa-handshake-angle', color: '#8B5CF6', bg: '#F5F3FF' }
    ];

    pillars.forEach(p => {
        const value = scores[p.id] || 0;
        const card = document.createElement('div');
        card.className = 'pillar-detail-card';
        card.innerHTML = `
            <div class="detail-header">
                <div class="detail-icon" style="background: ${p.bg}; color: ${p.color}">
                    <i class="fa-solid ${p.icon}"></i>
                </div>
                <div class="detail-score">${value}</div>
            </div>
            <div class="detail-title">${p.name}</div>
            <span class="detail-max">tối đa 25 điểm</span>
            <div class="detail-trend">
                <i class="fa-solid fa-arrow-trend-up"></i> +${(Math.random()*3 + 2).toFixed(1)}% tăng trưởng
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderSpiderChart(scores) {
    const ctx = document.getElementById('spiderChart').getContext('2d');

    // Node bounds values
    const dataValues = [
        scores.G || 0, // Governance
        scores.S || 0, // Social
        scores.E || 0, // Environment
        scores.C || 0  // Community
    ];

    const chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Quản trị', 'Xã hội', 'Môi trường', 'Cộng đồng'],
            datasets: [{
                label: 'Điểm số của bạn',
                data: dataValues,
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                borderColor: '#10B981',
                borderWidth: 2,
                pointBackgroundColor: '#10B981',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#10B981'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 25, // Absolute max Pillar weights
                    ticks: {
                        backdropColor: 'transparent',
                        color: '#6B7280',
                        stepSize: 5
                    }
                }
            },
            plugins: {
                legend: { display: false }
            },
            maintainAspectRatio: false
        }
    });
}
