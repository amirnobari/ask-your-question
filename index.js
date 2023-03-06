    const answerArray = ["i dont know",
        "maybe maybe not",
        "im good",
        "thank you",
        "it will work"
        "i dont now"
        "My name is Robot"
        "I do not feel good"
        "I am 1 year old and how old are you?"

    ];
    const message = document.querySelector(".message");
    const question = document.querySelector("input");
    const button = document.querySelector("button");
    button.addEventListener("click", function () {
        let res = Math.floor(Math.random() * answerArray.length);
        message.innerText = question.value + " " + answerArray[res];
        question.value = "";
    });
