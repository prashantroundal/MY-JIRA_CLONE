var plusBtn = document.querySelector(".plus");


var crossBtn = document.querySelector(".cross")

// Functions 
function plusBtnClick() {
    document
        .querySelector(".dialog")
        .style
        .display = "flex"
}

function closeDialog() {
    document
        .querySelector(".dialog")
        .style
        .display = "none"
}

function addDelTktLogic() {
    var closeBtnArr = document
        .querySelectorAll(".icon.color-3")
    var minimizeIcons = document
        .querySelectorAll(".icon.color-1")

    function closeTicket(e) {
        var box = e.target.closest(".box");
        console.log(box)
        box.style.display = "none"
    }

    function minimize(e) {
        var box = e.target.closest(".box");
        console.log(box)
        if (box.querySelector("main").style.display !== "none") {
            // console.log("dlkashdiuha")
            box.querySelector("main").style.display = "none"

        } else {
            box.querySelector("main").style.display = "block"
        }
    }

    for (let index = 0; index < closeBtnArr.length; index++) {
        const closeBtn = closeBtnArr[index];
        closeBtn.addEventListener("click", closeTicket)
    }
    for (let index = 0; index < minimizeIcons.length; index++) {
        const closeBtn = minimizeIcons[index];
        closeBtn.addEventListener("click", minimize)
    }

}

function addTicket() {
    closeDialog()
    var boxes = document.querySelector(".wrapper main");
    var puranaHTML = boxes.innerHTML;
    var boxContent = document.getElementById("box-content");
    var title = document.getElementById("title");
    boxes.innerHTML = puranaHTML + `
    <div class="box">
        <header>
            <div class="box-heading">${title.value}</div>
            <div class="icon color-1">-</div>
            <div class="icon color-2">E</div>
            <div class="icon color-3">x</div>
        </header>
        <main>
            <textarea rows="15">${boxContent.value}</textarea>
        </main>
    </div>`;
    title.value = ""
    boxContent.value = ""
    addDelTktLogic();
}



plusBtn.addEventListener("click", plusBtnClick)
crossBtn.addEventListener("click", closeDialog)