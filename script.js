// פונקציית התחברות
function performLogin(event) {
    event.preventDefault(); // מונע רענון של הדף

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var errorMsg = document.getElementById("error-msg");

    // בדיקת שם משתמש וסיסמה (לפי הדרישות בפרויקט)
    if ((user === "admin" && pass === "12345") || (user === "user" && pass === "abcd")) {
        // מעבר לדף הבית בהצלחה
        window.location.href = "index.html";
    } else {
        // הצגת הודעת שגיאה
        errorMsg.style.display = "block";
    }
}

// פונקציית יציאה
function logout() {
    alert("מתנתק מהמערכת...");
    //login.html, זה רק הודעה למשתמש
}

// ולידציה לטופס צור קשר
function validateForm() {
    var name = document.getElementById("fullName").value;
    var message = document.getElementById("message").value;

    if (name == "") {
        alert("נא למלא שם מלא!");
        return false;
    }

    if (message.length < 5) {
        alert("אנא כתוב הודעה מפורטת יותר");
        return false;
    }

    alert("ההודעה נשלחה בהצלחה!");
    // כאן אפשר להוסיף קוד שיחזיר את המשתמש לדף הבית
    window.location.href = "index.html"; 
    return false; // מחזיר false כדי לא לרענן את הדף בדוגמה זו
}