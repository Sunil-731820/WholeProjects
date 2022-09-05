console.log("after the use of back -tics syntax");
let text = `hello, World`;
console.log("the String is " + text);

// Quotes inside the Strings

let text1 = `He's often called "Johny"`;
console.log("after the String is "+ text1);

// The Multiline String Example is

let text2 =
`
This is the Sunil Kumar Gupta i am printing the tilde
This is the Sunil Kumar Gupta i am printing the tilde
This is the Sunil Kumar Gupta i am printing the tilde
`;
console.log("the text String is "+ text2);

// The Use of the HTML Templates

let header = "Templates Literals";
let tags = ["templates literals","javascript","es6"];
let html = `<h2> ${header}</h2><ul>`;
for(const x of tags){
    html += `<li>${x}</li>`;
}
html += `</ul>`;

