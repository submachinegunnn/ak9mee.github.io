document.body.classList.add("classic");


function blank3(){
    let inFrame
    
    try {
        inFrame = window !== top
    } catch (e) {
        inFrame = true
    }
    
    if (!inFrame && !navigator.userAgent.includes("Firefox")) {
        const popup = open("about:blank", "_blank")
        if (!popup || popup.closed) {
            alert("Popups are disabled!")
        } else {
            const doc = popup.document
            const iframe = doc.createElement("iframe")
            const style = iframe.style
            const link = doc.createElement("link")
    
            doc.title = "loading..."
            link.rel = "icon";
            link.href = "";
            iframe.src = location.href
            style.position = "fixed"
            style.top = style.bottom = style.left = style.right = 0
            style.border = style.outline = "none"
            style.width = style.height = "100%"
    
            doc.body.appendChild(iframe)
            //location.replace("https://google.com")
        }
    }}

const element = document.getElementById("tabcloak");
element.addEventListener("click", function() {
	blank3();
		document.getElementById("tabcloak").innerHTML = "Tab opened in about:blank!";
  });
