function copyContract() {
  const text = document.getElementById("contractAddr").innerText;
  
  navigator.clipboard.writeText(text).then(() => {
    // إظهار الرسالة الصفراء المخصصة
    const toast = document.getElementById("toast-msg");
    toast.style.display = "block";

    // إخفاؤها بعد ثانيتين
    setTimeout(() => {
      toast.style.display = "none";
    }, 2000);
  });
}
