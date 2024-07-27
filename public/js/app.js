const database = [
    { name: 'walid', userName: 'walid', email: 'walid@email.com', password: '123' },
];

class Account {
    constructor(fullname, email, age, password) {
        this.fullname = fullname;
        this.email = email;
        this.age = age;
        this.password = password;
    }
}
// function Shoose() {
//     let shoose=prompt("eneter:login-sing-up-changepassword")
//     switch (!) {
//         case "sign-up":
//             signup()
//             break;
//         case "login":
//             login()
//         case "exit":
//             return false
//         default:
//             break;
//     }
// }
Shoose()
const validationNom = (fullname) => {
    let name = fullname.trim();
    let name2 = name.toLowerCase();
    let finalSentence = name2.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let lengthname = finalSentence.split(" ").join("").length;
    
    if (lengthname < 5) {
        alert("rah seghar mn 5.");
        return false;
    }
    
    const regex = /[^a-zA-Z\s]/g;
    if (regex.test(fullname)) {
        alert("rah fih caracter.");
        return false;
    }

    return finalSentence;
};

const validateEmail = (email) => {
    if (email.trim() !== email) {
      alert("Email should not have spaces at the beginning or end");
      return false
    }
    if (email !== email.toLowerCase()) {
      alert("Email should be in lowercase");
      return false
    }
    if (email.includes(" ")) {
        alert('rah eando espace waset')
        return false
    }
    if (email.length < 10) {
        alert('rah seghar mn 10')
        return false
      }
    let validemail=/.+@.+/
    if (!validemail.test(email)) {
        alert('rah khas tkun fih @');
        return false; 
    }
    for (let i = 0; i < database.length; i++) {
        if (database[i].email === email) {
            alert('Email deja eadna');
            return false;
        }
    }
    return true;
  }
//   const validateAge = (age) => {
//     let validAge = /^[0-9]{1,2}$/;
//     if (!validAge.test(age)) {
//         alert("ra fih espace ou fih 3 ar9am ou machi ra9em");
//         return false;
//     }
//     return true;
// };

// const validatePassword = (password) => {
   
//     const validPassword = ["@", "#", "-", "+", "*", "/"];
    
    
//     if (password.length < 7) {
//         alert("khaso ikuun ketar mn 3.");
//         return false;
//     }

    
//     if (password.includes(" ")) {
//         alert("fih les espace.");
//         return false;
//     }

    
//     const Specialcaracter = validPassword.some(ele => password.includes(ele));
//     if (!Specialcaracter) {
//         alert("khas ikuun fih wahed mn hado: @, #, -, +, *, /.");
//         return false;
//     }


//     return true;

// };
// const confirmPassword = (password, confirmPassword) => {
//     // return password === confirmPassword;
//     if (password!==confirmPassword) {
//         alert("rah machi behal password")
//         return false
//     }
//     return true
// };
// const signup = () => {
//     let askFullname = prompt("Enter full name:");
//     while (!validationNom(askFullname)) {
//          askFullname=prompt("Enter full name:");
//     }
//     askFullname=validationNom(askFullname);
//     let askEmail = prompt("Enter email:");
//     while (!validateEmail(askEmail)) {
//         askEmail=prompt("Enter full email:");
//     }
//     let askAge = prompt("Enter age:");
//     while (!validateAge(askAge)) {
//         askAge=prompt("Enter age:");
//     }
//     let askPassword = prompt("Enter password:");
//     while (!validatePassword(askPassword)) {
//         askPassword = prompt("Enter password:");
//     }
//     let confirmpassword=prompt("confirm password")
//     while (!confirmPassword(askPassword,confirmpassword)) {
//         confirmpassword=prompt("confirm password")
//     }
//     alert("Registration completed successfully")
//     let account = new Account(askFullname, askEmail, askAge, askPassword);
//     database.push(account);
//     console.log("Account created:", account);
// };
// const login=()=>{

// }
signup();
