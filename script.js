/**
 * 水井村教育網站 - 核心互動邏輯 (分頁版)
 * 實作企劃：AR體驗、互動回饋與數位導覽
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("水井村數位保存計畫：分頁系統啟動中...");

    // 1. 自動高亮當前導覽分頁
    // 讓使用者知道自己目前在哪一個功能區塊
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // 2. 簡易 AR 歷史畫面模擬 (實作於 special.html)
    // 呼應企劃：透過手機即可體驗水井村歷史
    const arBtn = document.getElementById('ar-explore');
    if (arBtn) {
        arBtn.addEventListener('click', () => {
            // 模擬 AIDA 流程：引起注意 (Attention)
            alert("【AR 系統啟動中】\n正在掃描環境... 成功！\n\n您現在可以看到「姻緣花祭典」在 50 年前的實景重現。");
            
            // 模擬畫面的視覺變化 (增加 Desire 欲望)
            const container = document.querySelector('.container');
            container.style.transition = "all 1s";
            container.style.filter = "sepia(0.6) contrast(1.1)";
            
            setTimeout(() => {
                container.style.filter = "none";
                alert("AR 體驗結束。若要查看更多地點，請至村內尋找實體 QR Code 貼牌。");
            }, 4000);
        });
    }

    // 3. 互動回饋留言牆 (實作於 feedback.html)
    // 呼應企劃：利用留言牆讓大學生團隊與訪客產生連結
    window.submitFeedback = function() {
        const commentInput = document.getElementById('user-comment');
        const commentList = document.getElementById('comment-list');
        
        if (!commentInput || !commentList) return;

        if (commentInput.value.trim() === "") {
            alert("請輸入您的想法再送出喔！");
            return;
        }

        // 建立新留言節點 (數位保存概念)
        const newEntry = document.createElement('li');
        newEntry.style.padding = "10px";
        newEntry.style.borderBottom = "1px solid #ddd";
        newEntry.style.listStyle = "none";
        newEntry.innerHTML = `
            <strong>訪客：</strong> ${commentInput.value}
            <br><small style="color: #666;">發布時間：${new Date().toLocaleString('zh-TW')}</small>
        `;
        
        commentList.prepend(newEntry);
        commentInput.value = "";
        
        alert("感謝您的回饋！這將幫助我們推動水井村的文化傳承。");
    };

    // 4. 預期效益追蹤模擬 (呼應企劃 P13)
    // 模擬網站瀏覽量統計，幫助達成 1,000+ 瀏覽次數目標
    let mockViews = localStorage.getItem('suijing_views') || 0;
    mockViews = parseInt(mockViews) + 1;
    localStorage.setItem('suijing_views', mockViews);
    console.log(`目前累計瀏覽次數：${mockViews} / 1000`);
});