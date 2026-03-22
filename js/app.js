// Static Embedded Questionnaire Data to avoid CORS fetches on local file:/// previews
const questionsData = {
  "total_score": 100,
  "pillars": [
    {
      "id": "G",
      "name": "Quản trị Doanh nghiệp & Đạo đức Kinh doanh",
      "abbr": "Governance",
      "max_score": 25,
      "questions": [
        {"id": "G1", "text": "Doanh nghiệp có Giấy phép kinh doanh hợp lệ và mã số thuế hoạt động bình thường không?", "options": ["Yes", "No"], "evidence": "Ảnh chụp Giấy CN ĐKKD"},
        {"id": "G2", "text": "Doanh nghiệp có ban hành 'Sổ tay nhân viên' hoặc văn bản quy định về quy tắc ứng xử/đạo đức kinh doanh không?", "options": ["Yes", "Partial", "No"], "evidence": "Bản sao Sổ tay nhân viên / Quy tắc ứng xử"},
        {"id": "G3", "text": "Doanh nghiệp có cam kết (bằng văn bản/chính sách) về việc không hối lộ, chống tham nhũng trong giao dịch kinh doanh?", "options": ["Yes", "Partial", "No"], "evidence": "Chính sách / Cam kết chống tham nhũng"},
        {"id": "G4", "text": "Doanh nghiệp có duy trì sổ sách kế toán minh bạch và nộp báo cáo thuế đầy đủ, đúng hạn trong năm qua không?", "options": ["Yes", "Partial", "No"], "evidence": "Xác nhận hoàn thành nghĩa vụ thuế / Báo cáo tài chính"},
        {"id": "G5", "text": "Doanh nghiệp có cơ chế (hòm thư, email, số điện thoại) để nhân viên đóng góp ý kiến hoặc khiếu nại ẩn danh không?", "options": ["Yes", "Partial", "No"], "evidence": "Hình ảnh hòm thư / Chính sách khiếu nại"},
        {"id": "G6", "text": "Doanh nghiệp có hình thức xử lý kỷ luật minh bạch đối với các trường hợp vi phạm quy định, đạo đức kinh doanh không?", "options": ["Yes", "Partial", "No"], "evidence": "(Không bắt buộc)"},
        {"id": "G7", "text": "Ban giám đốc có tổ chức họp định kỳ để đánh giá tình hình kinh doanh và rủi ro của doanh nghiệp ít nhất 2 lần/năm không?", "options": ["Yes", "Partial", "No"], "evidence": "Biên bản họp Ban Giám đốc (Tùy chọn)"},
        {"id": "G8", "text": "Doanh nghiệp có chính sách bảo mật thông tin khách hàng và đối tác kinh doanh không?", "options": ["Yes", "Partial", "No"], "evidence": "Chính sách bảo mật dữ liệu khách hàng"},
        {"id": "G9", "text": "Doanh nghiệp có quy trình rõ ràng (hóa đơn, phê duyệt) cho mọi khoản thu chi nội bộ không?", "options": ["Yes", "Partial", "No"], "evidence": "(Không bắt buộc)"},
        {"id": "G10", "text": "Chủ doanh nghiệp hoặc quản lý cấp cao có từng tham gia các khóa đào tạo về quản lý rủi ro/quản trị bền vững không?", "options": ["Yes", "Partial", "No"], "evidence": "Chứng chỉ / Hình ảnh khóa học"}
      ]
    },
    {
      "id": "S",
      "name": "Xã hội & Lao động",
      "abbr": "Social",
      "max_score": 25,
      "questions": [
        {"id": "S1", "text": "Doanh nghiệp có ký hợp đồng lao động bằng văn bản cho 100% người lao động chính thức không?", "options": ["Yes", "Partial", "No"], "evidence": "Mẫu Hợp đồng lao động"},
        {"id": "S2", "text": "Doanh nghiệp có đóng Bảo hiểm Xã hội (BHXH, BHYT) đầy đủ cho tất cả nhân viên đủ điều kiện theo luật định không?", "options": ["Yes", "Partial", "No"], "evidence": "Chứng từ nộp BHXH tháng gần nhất"},
        {"id": "S3", "text": "Mức lương thấp nhất doanh nghiệp đang trả có bằng hoặc cao hơn Mức lương tối thiểu vùng không?", "options": ["Yes", "No"], "evidence": "(Không bắt buộc)"},
        {"id": "S4", "text": "Doanh nghiệp có quy định/chính sách về số giờ làm việc tối đa và trả lương làm thêm giờ (OT) đúng luật định không?", "options": ["Yes", "Partial", "No"], "evidence": "Bảng chấm công / Quy chế lương thưởng"},
        {"id": "S5", "text": "Quá trình tuyển dụng và đánh giá lương thưởng có đảm bảo không phân biệt đối xử (giới tính, tôn giáo, vùng miền...) không?", "options": ["Yes", "Partial", "No"], "evidence": "Chính sách tuyển dụng đa dạng"},
        {"id": "S6", "text": "Doanh nghiệp có chính sách và cam kết KHÔNG sử dụng lao động trẻ em và lao động cưỡng bức không?", "options": ["Yes", "Partial", "No"], "evidence": "Cam kết trong Sổ tay nhân viên"},
        {"id": "S7", "text": "Môi trường làm việc có được trang bị đầy đủ tủ thuốc y tế dự phòng, khu vực vệ sinh sạch sẽ, nước uống cho nhân viên không?", "options": ["Yes", "Partial", "No"], "evidence": "Hình ảnh thực tế môi trường làm việc"},
        {"id": "S8", "text": "Doanh nghiệp có trang bị đầy đủ phương tiện bảo hộ lao động cho nhân viên không?", "options": ["Yes", "Partial", "No"], "evidence": "Hình ảnh trang bị bảo hộ lao động / Biên lai mua sắm"},
        {"id": "S9", "text": "Doanh nghiệp có tổ chức/hỗ trợ ngân sách cho việc đào tạo nâng cao kỹ năng cho người lao động ít nhất 1 lần/năm không?", "options": ["Yes", "Partial", "No"], "evidence": "Danh sách/Hình ảnh khóa đào tạo nội bộ"},
        {"id": "S10", "text": "Doanh nghiệp có các chính sách phúc lợi bổ sung (khám sức khỏe, thưởng lễ tết) không?", "options": ["Yes", "Partial", "No"], "evidence": "Hóa đơn khám sức khỏe định kỳ / Quy chế phúc lợi"}
      ]
    },
    {
      "id": "E",
      "name": "Môi trường",
      "abbr": "Environment",
      "max_score": 25,
      "questions": [
        {"id": "E1", "text": "Doanh nghiệp có chính sách (hoặc thông báo) nhằm khuyến khích tiết kiệm điện, nước, giấy in không?", "options": ["Yes", "Partial", "No"], "evidence": "Hình ảnh các nhãn dán tiết kiệm"},
        {"id": "E2", "text": "Doanh nghiệp có sử dụng các thiết bị tiết kiệm năng lượng (VD: Bóng đèn LED) không?", "options": ["Yes", "Partial", "No"], "evidence": "Hình ảnh thiết bị điện tiết kiệm"},
        {"id": "E3", "text": "Doanh nghiệp có thực hiện phân loại rác thải tại nguồn nội bộ không?", "options": ["Yes", "Partial", "No"], "evidence": "Hình ảnh thùng rác phân loại"},
        {"id": "E4", "text": "Doanh nghiệp có các biện pháp xử lý rác thải nguy hại (pin, mực in) đúng quy định?", "options": ["Yes", "Partial", "No"], "evidence": "Hợp đồng thu gom rác thải nguy hại"},
        {"id": "E5", "text": "Với các ngành sản xuất: Doanh nghiệp có hệ thống xử lý nước thải / khí thải đáp ứng tiêu chuẩn không? (Nếu làm dịch vụ, chọn N/A).", "options": ["Yes", "No", "N/A"], "evidence": "Báo cáo giám sát môi trường"},
        {"id": "E6", "text": "Doanh nghiệp có thực hiện các biện pháp giảm thiểu việc sử dụng vật liệu nhựa dùng một lần không?", "options": ["Yes", "Partial", "No"], "evidence": "Hình ảnh bao bì/vật liệu thay thế"},
        {"id": "E7", "text": "Doanh nghiệp có theo dõi và ghi chép hóa đơn tiêu thụ điện, nước hàng tháng không?", "options": ["Yes", "Partial", "No"], "evidence": "Bảng theo dõi tiêu thụ năng lượng"},
        {"id": "E8", "text": "Doanh nghiệp có ứng dụng số hóa để giảm thiểu tối đa việc in ấn trên giấy không?", "options": ["Yes", "Partial", "No"], "evidence": "(Không bắt buộc)"},
        {"id": "E9", "text": "Doanh nghiệp có cung cấp/thiết kế bất kỳ sản phẩm hoặc dịch vụ nào thân thiện với môi trường không?", "options": ["Yes", "Partial", "No"], "evidence": "Hình ảnh / Mô tả sản phẩm xanh"},
        {"id": "E10", "text": "Doanh nghiệp có đặt mục tiêu hoặc cam kết giảm thiểu dấu chân carbon trong năm nay không?", "options": ["Yes", "Partial", "No"], "evidence": "Kế hoạch hành động / Mục tiêu"}
      ]
    },
    {
      "id": "C",
      "name": "Cộng đồng & Chuỗi cung ứng",
      "abbr": "Community",
      "max_score": 25,
      "questions": [
        {"id": "C1", "text": "Doanh nghiệp có ưu tiên lựa chọn các nhà cung cấp địa phương (tại Đà Nẵng) không?", "options": ["Yes", "Partial", "No"], "evidence": "Danh sách nhà cung cấp"},
        {"id": "C2", "text": "Khi lựa chọn nhà cung cấp, doanh nghiệp có đánh giá các tiêu chí xanh của họ không?", "options": ["Yes", "Partial", "No"], "evidence": "Bảng tiêu chí đánh giá nhà cung cấp"},
        {"id": "C3", "text": "Doanh nghiệp có cam kết thanh toán đúng hạn cho các đối tác, nhà cung cấp không?", "options": ["Yes", "Partial", "No"], "evidence": "(Không bắt buộc)"},
        {"id": "C4", "text": "Doanh nghiệp có hỗ trợ / đóng góp cho các hoạt động thiện nguyện tại địa phương không?", "options": ["Yes", "Partial", "No"], "evidence": "Hình ảnh/Thư cảm ơn từ hoạt động xã hội"},
        {"id": "C5", "text": "Doanh nghiệp có trích lập một phần ngân sách hàng năm cho các chương trình Trách nhiệm Xã hội (CSR) không?", "options": ["Yes", "Partial", "No"], "evidence": "Bảng phân bổ ngân sách / Quyết định tài trợ"},
        {"id": "C6", "text": "Các hoạt động marketing quảng cáo của doanh nghiệp có cam kết trung thực không?", "options": ["Yes", "Partial", "No"], "evidence": "(Không bắt buộc)"},
        {"id": "C7", "text": "Doanh nghiệp có quy trình tiếp nhận và xử lý khiếu nại của khách hàng rõ ràng không?", "options": ["Yes", "Partial", "No"], "evidence": "Quy trình bảo hành / xử lý khiếu nại"},
        {"id": "C8", "text": "Doanh nghiệp có tạo cơ hội việc làm cho sinh viên thực tập, thanh niên địa phương không?", "options": ["Yes", "Partial", "No"], "evidence": "Danh sách thực tập sinh / Hình ảnh làm việc"},
        {"id": "C9", "text": "Doanh nghiệp có tạo điều kiện việc làm cho người khuyết tật trong xã hội không?", "options": ["Yes", "Partial", "No"], "evidence": "Hình ảnh thực tế (Nếu có)"},
        {"id": "C10", "text": "Doanh nghiệp có sẵn sàng chia sẻ kinh nghiệm Thực hành kinh doanh có trách nhiệm không?", "options": ["Yes", "No"], "evidence": "(Không bắt buộc)"}
      ]
    }
  ]
};

// State Variables
let currentPillar = 'G';
let userAnswers = {}; // { questionId: "Yes" | "No" | "Partial" | "N/A" }
const totalQuestions = 40;

// Init Execution
document.addEventListener("DOMContentLoaded", () => {
    loadDraft();
    setupTabListeners();
    renderQuestions(currentPillar);
    updateProgress();
    setupActions();
});

function setupTabListeners() {
    const tabs = document.querySelectorAll('.nav-item');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentPillar = tab.getAttribute('data-pillar');
            renderQuestions(currentPillar);
        });
    });
}

function renderQuestions(pillarId) {
    const grid = document.getElementById('active-grid');
    grid.innerHTML = ''; // Clear previous
    
    // Find Pillar Obj
    const pillarObj = questionsData.pillars.find(p => p.id === pillarId);
    if (!pillarObj) return;

    pillarObj.questions.forEach(q => {
        const card = document.createElement('div');
        card.className = 'question-card';

        // Header
        const header = document.createElement('div');
        header.className = 'card-header';
        header.innerHTML = `
            <span class="question-id">${q.id}</span>
            <span class="question-text">${q.text}</span>
        `;
        card.appendChild(header);

        // Options Radio Boxes
        const optionsBox = document.createElement('div');
        optionsBox.className = 'options-box';
        
        q.options.forEach(opt => {
            const isChecked = userAnswers[q.id] === opt;
            const label = document.createElement('label');
            label.className = `radio-btn ${isChecked ? 'selected' : ''}`;
            label.innerHTML = `
                <input type="radio" name="${q.id}" value="${opt}" ${isChecked ? 'checked' : ''}>
                <span>${opt}</span>
            `;
            
            // Interaction
            const input = label.querySelector('input');
            input.addEventListener('change', () => {
                userAnswers[q.id] = opt;
                
                // Visual toggle classes in group
                const sibs = optionsBox.querySelectorAll('.radio-btn');
                sibs.forEach(s => s.classList.remove('selected'));
                label.classList.add('selected');

                updateProgress();
            });

            optionsBox.appendChild(label);
        });
        card.appendChild(optionsBox);

        // Upload Container
        const uploadBox = document.createElement('div');
        uploadBox.className = 'upload-box';
        
        // Create hidden file input
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.style.display = 'none';
        fileInput.id = `file-${q.id}`;
        
        uploadBox.appendChild(fileInput);

        uploadBox.innerHTML += `
            <button class="upload-btn" onclick="document.getElementById('file-${q.id}').click()">
                <i class="fa-solid fa-cloud-arrow-up"></i> Tải tài liệu
            </button>
            <span class="file-hint" id="hint-${q.id}">${q.evidence ? 'Yêu cầu: ' + q.evidence : 'Không bắt buộc minh chứng'}</span>
        `;
        card.appendChild(uploadBox);
        grid.appendChild(card);

        // Re-get elements after InnerHTML overwrite to bind listeners
        const actualInput = card.querySelector(`#file-${q.id}`);
        const actualHint = card.querySelector(`#hint-${q.id}`);
        actualInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const fileName = e.target.files[0].name;
                actualHint.innerHTML = `<b style="color:var(--primary)"><i class="fa-solid fa-paperclip"></i> Đã chọn: ${fileName}</b>`;
                // Mock storage
                if(!userAnswers.uploads) userAnswers.uploads = {};
                userAnswers.uploads[q.id] = fileName;
            }
        });
    });
}

function updateProgress() {
    const answeredCount = Object.keys(userAnswers).filter(k => k !== 'uploads').length;
    
    // Calculate percentages
    const percentage = Math.round((answeredCount / totalQuestions) * 100);
    
    // Update DOM
    document.getElementById('progress-percent').innerText = `${percentage}%`;
    document.getElementById('progress-count').innerText = `${answeredCount}/${totalQuestions} Câu hỏi`;
    document.getElementById('progress-fill').style.width = `${percentage}%`;
}

function setupActions() {
    document.getElementById('save-draft').addEventListener('click', () => {
        localStorage.setItem('rbp_assessment_draft', JSON.stringify(userAnswers));
        alert('Đã lưu nháp tiến trình thành công!');
    });
}

function loadDraft() {
    const draft = localStorage.getItem('rbp_assessment_draft');
    if (draft) {
        userAnswers = JSON.parse(draft);
        // Add support for rendering mock upload filenames later if loaded
    }
}

function triggerSubmit() {
    const answeredCount = Object.keys(userAnswers).filter(k => k !== 'uploads').length;
    if (answeredCount < totalQuestions) {
        const proceed = confirm(`Bạn mới trả lời ${answeredCount}/${totalQuestions} câu hỏi. Bạn có chắc muốn hoàn tất tính điểm không?`);
        if (!proceed) return;
    }

    // Scoring calculation
    let totalScore = 0;
    let scoresByPillar = { G: 0, S: 0, E: 0, C: 0 };

    questionsData.pillars.forEach(pillar => {
        pillar.questions.forEach(q => {
            const answer = userAnswers[q.id];
            let value = 0;

            if (answer === 'Yes') value = 2.5;
            else if (answer === 'Partial') value = 1.25;
            else if (answer === 'No') value = 0;
            else if (answer === 'N/A' && q.id === 'E5') value = 2.5; // Custom E5 rule

            scoresByPillar[pillar.id] += value;
            totalScore += value;
        });
    });

    // Save final scores to localStorage
    localStorage.setItem('rbp_scores', JSON.stringify(scoresByPillar));
    localStorage.setItem('rbp_total', totalScore);
    localStorage.setItem('rbp_answers', JSON.stringify(userAnswers)); // For detailed recommendations
    
    // Redirect to Dashboard
    window.location.href = 'dashboard.html';
}
