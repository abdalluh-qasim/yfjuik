document.getElementById('searchButton').addEventListener('click', function() {
    const code = document.getElementById('codeInput').value.trim();
    const resultDiv = document.getElementById('result');
    const messageDiv = document.getElementById('message');

    // التحقق من صحة الإدخال
    if (code === "") {
        messageDiv.textContent = "يرجى إدخال كود.";
        resultDiv.innerHTML = '';
        return;
    }

    // إنشاء مسار الصورة بصيغة JPG
    const imagePath = `grades/${code}.jpg`; // يمكنك تغيير .png إلى .jpg

    // إنشاء عنصر صورة
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = "نتيجة الطالب";

    // إضافة الصورة إلى النتيجة
    img.onload = function() {
        resultDiv.innerHTML = ''; // مسح النتائج السابقة
        resultDiv.appendChild(img);
        messageDiv.textContent = ''; // مسح الرسالة
    };

    img.onerror = function() {
        resultDiv.innerHTML = '';
        messageDiv.textContent = "لا توجد نتيجة لهذا الكود.";
    };
});

 