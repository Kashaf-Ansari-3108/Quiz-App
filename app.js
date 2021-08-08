//variables////
var startbtn = document.getElementById("start-btn");
var quizQues = document.getElementById("quizQues");
var question = document.getElementById("ques");
var option = document.getElementsByClassName("options");
var next = document.getElementById("next-btn");
var submit = document.getElementById("sub-btn")
var user = {}
var timeInterval;
//storing questions//
var quizQuesArr = [
    {
        num: 1,
        ques: "What is always coming, but never arrives?",
        opt: {
            a: "Today",
            b: "Tommorrow",
            c: "Elephant",
            d: "Snail",
        },
        ans: "Tommorrow"
    },
    {
        num: 2,
        ques: "  How can a man go eight days without sleep?",
        opt: {
            a: "By Eating",
            b: " By Embarassment",
            c: "By sleeping during the night",
            d: " By Guilty",
        },
        ans: "By sleeping during the night"
    },
    {
        num: 3,
        ques: "What does come down but never goes up?",
        opt: {
            a: "Rain",
            b: "Height",
            c: "Weight",
            d: "lift",
        },
        ans: "Rain"
    },
    {
        num: 4,
        ques: "What has a head, a tail, but does not have a body",
        opt: {
            a: "Frog",
            b: "spider",
            c: "bee",
            d: "coin",
        },
        ans: "coin"
    },
    {
        num: 5,
        ques: "Most of the kids love to carry these keys. What are those keys?",
        opt: {
            a: "stickies",
            b: "twinkies",
            c: "Cookies",
            d: "whiskies",
        },
        ans: "Cookies"
    },
]
//seetting attribute in options//
for (var i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', 'select(this)');
    
}
///start quiz function///

function startquiz(btn) {
   alert(
        'Some Rules of Quiz\n\n' 
        + '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n\n' 
        + "\t• You will have only 10 minutes to complete the quiz.\n" 
        + "\t• Once you select your answer, it can't be undone.\n" 
        + "\t• You can't exit from the Quiz while you're playing.\n" 
        + "\t• You'll get points on the basis of your correct answers.\n"
        );
   
    quizQues.classList.remove("hide")
    startbtn.classList.add("hide");
    next.classList.add("hide");
    
    
    changeQuestion();
    
    timeInterval = setInterval(function () {
        seconds++;
        // to increase the minutes after sixty second
        if ((seconds / 60) == 1) {
            seconds = 0;
            minutes++
        }
        if (minutes == 1) {
            alert("time's up");
            clearInterval(timeInterval);
            cardCont[0].classList.add("hide");
            resultDiv.classList.remove("hide");
            resultName.innerHTML = `Name:${userName.value}`
            cor_btn.innerHTML = `You gave ${correct} correct Answers`
    wro_btn.innerHTML =`You gave ${wrong} Wrong Answers`
    tot_score.innerHTML = `Your Total score is ${score}`
        }
        secondsContainer.innerHTML = String(seconds).padStart(2, '0');
        minutesContainer.innerHTML = String(minutes).padStart(2, '0');
    }, 1000)
    
}
/// question change function/
var quesNum = document.getElementById("ques-num");

var count = 0
var quesCount = 1
function changeQuestion() {
    if (!(count === quizQuesArr.length)) {
        question.innerHTML = quizQuesArr[count].ques
        option[0].innerHTML = quizQuesArr[count].opt.a
        option[1].innerHTML = quizQuesArr[count].opt.b
        option[2].innerHTML = quizQuesArr[count].opt.c
        option[3].innerHTML = quizQuesArr[count].opt.d
        quesNum.innerHTML = quesCount + "/5"
        count++
        quesCount++
    } else {
        
    }
    for (var i = 0; i < option.length; i++) {
        option[i].classList.remove("wrong");
        option[i].classList.remove("correct")
        option[i].classList.remove("disabled")
        
    }
    next.classList.add("hide");
    
}

// getting user name and id//
var userName = document.getElementById("username")
var userEmail = document.getElementById("email")
var userCell = document.getElementById("cellNumber")
var userInstitute = document.getElementById("institute")
var cardCont = document.getElementsByClassName("card-cont")
var name_div = document.getElementById("name");
var email_div = document.getElementById("emailAdress");
var form = document.getElementById("main")
const loginuser = () => {
    if(userName.value.length === "" || userEmail.value.length === "" || userCell.value.length === "" ||userInstitute.value.length === ""  ){
        userName.style.borderBottom =  "2px solid red"
        userEmail.style.borderBottom =  "2px solid red"
        userCell.style.borderBottom =  "2px solid red"
        userInstitute.style.borderBottom =  "2px solid red"
        alert('All input fields are required');
        
    }
    
    else if (userName.value.length < 3 ) {
        userName.style.borderBottom =  "2px solid red"
        alert("Enter a valid name");
        
    }
     else if (!validateEmail(userEmail.value)) {
        userEmail.style.borderBottom =  "2px solid red"
        alert('Enter a valid email')
    } 
    else if(userCell.value.length < 11 || userCell.value.length > 11){
        userCell.style.borderBottom =  "2px solid red"
        alert('Enter a valid cell number')
    }
    else if(userInstitute.value.length < 3){
        userInstitute.style.borderBottom =  "2px solid red"
        alert('Enter a valid Institute Name');
    }
   else {
        form.classList.add("hide");
        cardCont[0].classList.remove("hide");
        name_div.innerHTML = `Name: ${userName.value}`
        email_div.innerHTML = `Email: ${email.value}`
    }
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




///function for getting answers///
var counter = 0
var score = 0
var wrong = 0
var correct = 0



function select(li) {
    if (li.innerHTML == quizQuesArr[counter].ans) {
        li.classList.add("correct")
        score = score + 10
        correct++
        // console.log("chassds")  
    } else {
        li.classList.add("wrong")
        wrong++
    }
    for (let i = 0; i < 4; i++) {
        option[i].classList.add("disabled")

    }
    next.classList.remove("hide");
    counter++


    if (counter == 5) {
        next.classList.add("hide");
        submit.classList.remove("hide")



    }
}
var seconds = 0
var minutes = 0
var secondsContainer = document.getElementById("seconds");
var minutesContainer = document.getElementById("minutes");




//collecting score///

var cor_btn = document.getElementById("correct");
var wro_btn = document.getElementById("wrong");
var tot_score = document.getElementById("Total");
var resultDiv = document.getElementById("resultDiv");
var resultName = document.getElementById("Name");
var resultEmail = document.getElementById("Email");
var resultCell = document.getElementById("CellNumber");
var resultInstitute = document.getElementById("Institute");

function submitBtn() {
    cardCont[0].classList.add("hide");
    resultDiv.classList.remove("hide");
    resultName.innerHTML = `Name:${userName.value}`;
    resultEmail.innerHTML = `Email:${userEmail.value}`;
    resultCell.innerHTML = `Cell Number:${userCell.value}`;
    resultInstitute.innerHTML = `Institute:${userInstitute.value}`;
    

    console.log(cor_btn)
    console.log(wro_btn)
    console.log(tot_score)
    console.log(correct)
    console.log(wrong)
    console.log(score)
    cor_btn.innerHTML = `You gave ${correct} correct Answers`
    wro_btn.innerHTML =`You gave ${wrong} Wrong Answers`
    tot_score.innerHTML = `Your Total score is ${score}`
    clearInterval(timeInterval);
}


    