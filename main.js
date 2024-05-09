//randomizer function chooses message components
const randomizer = (arr) => {
    let randIndex = Math.floor(Math.random()* arr.length);
    return arr[randIndex];
}

//determining current time - needed for one of the message options
const now = new Date();
const currentTime = now.getHours();


let insults = ['moron', 'dumb ass', 'dingus', 'smooth brain', 'airhead', 'silly goose', 'dweeb']

let messages = [`look name. don\'t make me debug your excuses. get coding.`, `your progress bar is ticking, and so is your time. tick-tock name.`,
`it\'s ${currentTime} o\'clock already. what have you done today, name?`, `comfort zones are where dreams go to die. you ready to meet your maker, name?`]

const emoticons = [':3', '^-^', 'uwu', '^w^','(´･ω･`)', '(◠‿◠✿)']


const motivateMe = () => {
    const getInsult = randomizer(insults);
    const getEmoticon = randomizer(emoticons);
    const getMessage = randomizer(messages).replace('name', getInsult);
    const getUwuMessage = getMessage.replaceAll('r', 'w');
    return `${getUwuMessage} ${getEmoticon}`;
}

console.log(motivateMe());
