const famousPerson = ["Albert Einstein", "Bill Gates", "Steve Jobs", "Elon Musk", "Thomas Jefferson", "Pedro I", "Martin Luther King", "John Lennon", "Socrates", "Plato", "Aristotle"];
const randomThings = ['the cake'];
let randomThings1, randomThings2, randomThings3;

const famousQuotes = [`Two things are infinite: ${randomThings1} and ${randomThings2}; and I'm not sure about ${randomThings1}.`, 
`${randomThings1} will get you from A to Z; ${randomThings2} will get you everywhere.`,
`${randomThings1} is a lousy teacher.`,
`It's fine to celebrate ${randomThings1} but it is more important to heed the lessons of ${randomThings2}.`, 
`${randomThings1} distinguishes between a ${randomThings2} and a ${randomThings3}.`,
`Your ${randomThings1} is limited, so don't waste it in someone else's ${randomThings2}.`,
`How much ${randomThings1} have cost us the ${randomThings2} which have never happened?`,
`Never spend you ${randomThings1} before you have it.`,
`${randomThings1} and ${randomThings2}, that is the goal of true education.`,
`${randomThings1} is not merely the absence of ${randomThings2}, it is the presence of ${randomThings3}.`,
`${randomThings1} is over... If you want it.`,
`Imagine all the ${randomThings1}.`,
`There is only one good, ${randomThings1}, and one evil, ${randomThings2}`,
`${randomThings1}, and ${randomThings2}; one is the parent of luxury and indolence, and the other of meanness and viciousness, and both of discontent.`,
`${randomThings1} is the source of all things.`,
`We can easily forgive a child who is afraid of the ${randomThings1}, the real tragedy of life is when men are afraid of the ${randomThings2}.`,
`${randomThings1} is a waking dream.`,
`${randomThings1} is parent of revolution and crime.`,
`I fear no man, but that thing, ${randomThings1}, it scares me.`,
`${randomThings1} is the triumph of ${randomThings2} over people.`,
`${randomThings1} is the source of misunderstandings`,
`It is hard work, but there is ${randomThings1} in it.`,
`The right ${randomThings1}, in the wrong ${randomThings2} can make all the difference in the world.`,
`Wanting ${randomThings1} does not give you the right to have it.`,
`No ${randomThings1} or ${randomThings2}. Only ${randomThings3}.`,
`It's time to kick ${randomThings1} and chew ${randomThings2}... and I'm all outta ${randomThings2}.`,
`It's easy to forget what a ${randomThings1} is in the middle of a battlefield.`,
`${randomThings1}. ${randomThings1} never changes.`,
`What is a ${randomThings1}? A miserable little pile of ${randomThings2}.`];

const getRandomIndex = array => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
}


