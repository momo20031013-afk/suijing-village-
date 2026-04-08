/**
 * 水井村教育網站 - 核心互動邏輯
 * 呼應企劃：數位文化保存與實體x數位結合 [cite: 32, 68]
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("水井村數位保存計畫：系統啟動中...");

    // 1. 平滑捲動 (Smooth Scroll)
    // 讓使用者點擊導覽列時，能優雅地滑動到對應功能區塊 [cite: 52]
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. 簡易 AR 歷史畫面模擬 (呼應企劃 P7：特色功能亮點) [cite: 63, 65]
    // 模擬使用者透過手機掃描特定景點後，觸發歷史畫面的效果 [cite: 67, 69]
    const arBtn = document.getElementById('ar-explore');
    if (arBtn) {
        arBtn.addEventListener('click', () => {
            // AIDA 流程：引起注意 (Attention) 與 激發欲望 (Desire) [cite: 72, 77]
            const heroSection = document.querySelector('.hero');
            
            // 模擬濾鏡切換效果
            heroSection.style.filter = "sepia(0.8) contrast(1.2)";
            alert("【AR 模擬啟動】透過手機鏡頭，您正看見 1960 年代的水井村姻緣花祭典盛況！");
            
            setTimeout(() => {
                heroSection.style.filter = "none";
                alert("AR 體驗結束，歡迎親自前往水井村實體景點掃碼探索更多故事！");
            }, 5000);
        });
    }

    // 3. 互動回饋系統 (呼應企劃 P6：互動回饋) [cite: 61, 62]
    // 實作簡單的留言牆，讓大學生團隊與訪客能產生連結 [cite: 38]
    window.submitFeedback = function() {
        const commentInput = document.getElementById('user-comment');
        const commentList = document.getElementById('comment-list');
        
        if (commentInput.value.trim() === "") {
            alert("請輸入您的想法再送出喔！");
            return;
        }

        // 建立新留言
        const newEntry = document.createElement('li');
        newEntry.innerHTML = `
            <strong>訪客回饋：</strong> ${commentInput.value}
            <br><small>發布時間：${new Date().toLocaleString('zh-TW')}</small>
        `;
        
        // 加入列表並清空輸入框
        commentList.prepend(newEntry); // 新留言在最上面
        commentInput.value = "";
        
        // 成功回饋 (Action 促成行動) [cite: 79, 80]
        alert("您的回饋已收錄！這將成為水井村數位保存的重要參考。");
    };

    // 4. QR Code 導覽邏輯模擬 (呼應企劃 P9：居民向外擴散) [cite: 88]
    // 模擬從特定 QR Code 進入頁面時，自動跳轉到對應知識點 [cite: 60]
    const urlParams = new URLSearchParams(window.location.search);
    const site = urlParams.get('site');
    if (site) {
        console.log(`偵測到從實體景點 QR Code 進入：${site}`);
        // 可根據 site 參數自動捲動到指定內容
    }
});

// 預期效益追蹤模擬 [cite: 126]
let visitCount = 0;
function trackVisit() {
    visitCount++;
    if (visitCount >= 1000) {
        console.log("達成企劃目標：網站瀏覽次數突破 1,000 次！ [cite: 133]");
    }
}
trackVisit();