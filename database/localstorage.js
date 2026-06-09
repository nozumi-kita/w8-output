(() => {
    // ログイン時に情報保存
    const formLogin = document.getElementById("form-login");

    formLogin.addEventListener("submit", () => {
        const formData = new FormData(formLogin);

        const email = formData.get('email');
        const password = formData.get('password');
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    })

    // ページ読み込み時に実行
    document.addEventListener('DOMContentLoaded', () => {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        
        document.getElementById('email').value = email;
        document.getElementById('password').value = password;
    });

    // 今回ローカルストレージに保存したデータを削除
    const deleteStorageData = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        location.reload();
    }

    document.getElementById('delete-localstorage').addEventListener("click", () => {
        const answer = confirm("本当に削除してよろしいですか?");
        if (answer) {
            deleteStorageData();
        }
    })
})();