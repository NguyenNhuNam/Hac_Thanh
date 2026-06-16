document.addEventListener('DOMContentLoaded', () => {

    // ── Logic chỉ cho chọn 1 checkbox (giữ nguyên của bạn) ──
    const checkboxes = document.querySelectorAll(
        '.checkbox-list input[type="checkbox"]'
    );

    checkboxes.forEach(current => {
        current.addEventListener('change', () => {
            checkboxes.forEach(item => {
                if (item !== current) {
                    item.checked = false;
                }
            });
        });
    });

    // ── Logic submit form bằng AJAX ──
    const form = document.querySelector('.register-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Giữ nguyên của bạn

        const name = form.querySelector('input[name="user_fullname"]').value;
        console.log('Submit:', name);

        // Gom toàn bộ dữ liệu form (bao gồm nonce, action, checkbox...)
        const formData = new FormData(form);

        // Gửi AJAX lên WordPress
        fetch(ajaxUrl, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                // Gửi thành công
                alert('Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.');
                form.reset();
            } else {
                // Gửi thất bại
                alert('Có lỗi xảy ra: ' + data.data);
            }
        })
        .catch(err => {
            console.error('Lỗi kết nối:', err);
            alert('Không thể kết nối. Vui lòng thử lại.');
        });
    });

});
