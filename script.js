let page = 1;

function nextPage() {

    const title = document.getElementById("title");
    const message = document.getElementById("message");
    const button = document.querySelector("button");

    if(page === 1){

        title.innerHTML = "Checking on my favorite person... ❤️";

        message.innerHTML = `
        Connecting to your heart... ❤️<br><br>

        ✔ Heart: Still so kind.<br>
        ✔ Mind: Carrying a little too much today.<br>
        ✔ Energy: Running lower than usual.<br>
        ✔ Smile: Recoverable ❤️<br><br>

        <b>Diagnosis Complete</b><br><br>

        You've been giving so much of yourself lately...<br><br>

        I can't help you with your work,<br>
        or make all the pressure disappear.<br><br>

        But I can tell you one thing...<br><br>

        <b>You have me.<br>
        And you don't have to carry everything alone. ❤️</b>
        `;

        button.innerHTML = "Continue ❤️";

        page++;
    }

    else if(page === 2){

        title.innerHTML = "Can I tell you something? 💛";

        message.innerHTML = `
        I know you've been trying your best.<br><br>

        Some days are exciting.<br><br>

        Some days are exhausting.<br><br>

        And some days... you just want everything to stop for a while.<br><br>

        If today was one of those days...<br><br>

        I hope this little website makes you smile,<br>
        even if it's just for a minute.<br><br>

        Because you deserve moments of peace too. 🤍
        `;

        button.innerHTML = "There's something else... ❤️";

        page++;
    }

}
