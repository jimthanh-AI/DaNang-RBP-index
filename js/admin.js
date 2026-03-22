document.addEventListener("DOMContentLoaded", () => {
    
    const mockSMEs = [
        { name: "SME GreenTech JSC", tax: "0400123456", lowest: "Môi trường", rank: "Gold", score: 75, date: "15/03/2026" },
        { name: "Công ty May mặc Đà Nẵng", tax: "0400654321", lowest: "Cộng đồng", rank: "Silver", score: 62, date: "14/03/2026" },
        { name: "Khách sạn Biển Xanh", tax: "0400987654", lowest: "Quản trị", rank: "Compliant", score: 48, date: "12/03/2026" },
        { name: "Hải sản Sông Hàn", tax: "0400111222", lowest: "Xã hội", rank: "Platinum", score: 88, date: "11/03/2026" },
        { name: "Cơ khí Chính xác Việt", tax: "0400333444", lowest: "Môi trường", rank: "Silver", score: 58, date: "10/03/2026" },
        { name: "Du lịch Đà Nẵng Smile", tax: "0400555666", lowest: "Quản trị", rank: "Gold", score: 72, date: "09/03/2026" },
        { name: "Nông sản Hữu cơ Đà Thành", tax: "0400777888", lowest: "Cộng đồng", rank: "Platinum", score: 91, date: "08/03/2026" },
        { name: "Nhà hàng Phố Việt", tax: "0400999000", lowest: "Xã hội", rank: "Compliant", score: 52, date: "07/03/2026" }
    ];

    // [NEW] LocalStorage No-code DB Sync
    const liveProfile = localStorage.getItem('rbp_profile');
    const liveTotal = localStorage.getItem('rbp_total');
    if (liveProfile && liveTotal) {
        const prof = JSON.parse(liveProfile);
        const score = parseFloat(liveTotal);
        let rank = "Compliant";
        if (score >= 85) rank = "Platinum";
        else if (score >= 70) rank = "Gold";
        else if (score >= 50) rank = "Silver";

        mockSMEs.unshift({
            name: prof.name || "Live SME",
            tax: prof.tax || "0400...",
            lowest: "Đang phân tích...",
            rank: rank,
            score: score,
            date: prof.date || "Vừa xong"
        });
    }

    // 2. Populate Table
    const tableBody = document.getElementById('sme-table-body');
    tableBody.innerHTML = mockSMEs.map(sme => `
        <tr>
            <td style="font-weight: 600; color: #1F2937;">${sme.name}</td>
            <td>${sme.tax}</td>
            <td><span style="color: #EF4444; font-weight: 600;">${sme.lowest}</span></td>
            <td><span class="badge-tier tier-${sme.rank}">${sme.rank}</span></td>
            <td style="font-weight: 800; color: #059669;">${sme.score}</td>
            <td>
                <button onclick="alert('Xem chi tiết báo cáo ${sme.name}');" style="padding: 6px 12px; font-size: 0.8rem; background: #F3F4F6; color: #374151; border: 1px solid #D1D5DB;">
                    Chi tiết
                </button>
            </td>
        </tr>
    `).join('');

    // 3. Render Pie Chart (Rank proportions)
    const pieCtx = document.getElementById('pieChart').getContext('2d');
    new Chart(pieCtx, {
        type: 'doughnut',
        data: {
            labels: ['Platinum', 'Gold', 'Silver', 'Compliant'],
            datasets: [{
                data: [15, 35, 30, 20], // percentages
                backgroundColor: ['#047857', '#FBBF24', '#9CA3AF', '#34D399'],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { usePointStyle: true, font: { size: 12 } } }
            },
            cutout: '70%'
        }
    });

    // 4. Render Bar Chart (Pillars Average)
    const barCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Quản trị', 'Xã hội', 'Môi trường', 'Cộng đồng'],
            datasets: [{
                label: 'Điểm trung bình',
                data: [72.3, 68.5, 61.2, 69.4], // Mock averages
                backgroundColor: 'rgba(16, 185, 129, 0.8)',
                borderColor: '#10B981',
                borderWidth: 1,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, max: 100, grid: { borderDash: [4,4] } },
                x: { grid: { display: false } }
            }
        }
    });

});
