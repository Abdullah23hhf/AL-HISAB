document.addEventListener("DOMContentLoaded", function() {
    // Purana naam aur Naya naam
    const oldName = "AL-HISAB";
    const newName = "Hisabify"; 

    // Ye function poori website ka text scan karke 'AL-HISAB' ko 'Hisabify' se badal dega
    const replaceText = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.textContent.includes(oldName)) {
                node.textContent = node.textContent.replaceAll(oldName, newName);
            }
        } else {
            node.childNodes.forEach(replaceText);
        }
    };

    replaceText(document.body);
    
    // Website ka Title (Tab name) bhi badalne ke liye
    if (document.title.includes(oldName)) {
        document.title = document.title.replaceAll(oldName, newName);
    }
});
