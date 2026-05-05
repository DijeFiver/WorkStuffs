function checkAnswer(choice) {
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('hidden', 'success', 'fail');

    if (choice === 2) {
        feedback.innerText = "🎯 正確！同理客戶並提供具體的「替代方案」是降低憤怒最有效的方法。";
        feedback.classList.add('success');
    } else if (choice === 1) {
        feedback.innerText = "❌ 雖然是事實，但這聽起來像是推卸責任，會激怒已經不滿的客戶。";
        feedback.classList.add('fail');
    } else {
        feedback.innerText = "⚠️ 雖然主管可以支援，但基層人員若能先展現解決問題的誠意，更能建立信任感。";
        feedback.classList.add('fail');
    }
}