document.addEventListener("DOMContentLoaded", function() {
    // Ye function poori website ke har hissay ko scan karega
    const replaceEverywhere = (node) => {
        // Sirf text wale hisson ko check karo
        if (node.nodeType === Node.TEXT_NODE) {
            // "gi" ka matlab hai Global (puri web par) aur Case-Insensitive (chahe baray harf hon ya chotay)
            const regex = /Al-Hisab|AL-HISAB|al-hisab/gi;
            if (node.textContent.match(regex)) {
                node.textContent = node.textContent.replace(regex, "Hisabify");
            }
        } else {
            // Agar text nahi hai to uske andar mazeed dhoondo
            node.childNodes.forEach(replaceEverywhere);
        }
    };

    // Poori body ko scan karo
    replaceEverywhere(document.body);
    
    // Browser ke tab ka naam (Title) bhi badal do
    const titleRegex = /Al-Hisab|AL-HISAB|al-hisab/gi;
    if (document.title.match(titleRegex)) {
        document.title = document.title.replace(titleRegex, "Hisabify");
    }
});
