
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyTexts = [
    {
      text: ":insertx: embarked on a legendary voyage across the Grand Line in search of One Piece. Their journey led them to the fabled island of :inserty:, where they encountered the formidable pirate crew of :insertz:. Battles raged, and legends were born."
    },
    {
      text: "As a member of the Straw Hat Pirates, :insertx: faced countless challenges on their quest for One Piece. They arrived at the mystical island of :inserty:, only to find themselves entangled in a deadly showdown with the notorious captain, :insertz:."
    },
    {
      text: "The Grand Line was their playground, and :insertx: was determined to become the Pirate King. On the island of :inserty:, they clashed swords with the fearsome crew of :insertz:, and the fate of the world hung in the balance."
    },
    {
      text: "In the vast world of One Piece, :insertx: was a name that struck fear into the hearts of all. When they landed on the enigmatic island of :inserty:, they ignited a war with the mighty captain, :insertz:. It was a battle of epic proportions."
    },
    {
      text: "With the wind at their back and the Straw Hat flag flying high, :insertx: sailed to the legendary island of :inserty:. There, they encountered the legendary pirate crew led by the enigmatic captain, :insertz:. The sea trembled with their clash."
    },
    {
      text: "Bound by a promise to become the Pirate King, :insertx: ventured to the island of :inserty:, where they crossed blades with the infamous captain, :insertz:. The fate of One Piece hung in the balance."
    },
    {
      text: "On the turbulent waters of the Grand Line, :insertx: set out on a daring adventure. Their path led them to the mysterious shores of :inserty:, where they confronted the ruthless crew of :insertz:. The world watched in awe."
    },
    {
      text: "With a bounty on their head, :insertx: journeyed to the treacherous island of :inserty:. There, they faced off against the formidable captain, :insertz:, in a battle that would echo through the ages."
    },
    {
      text: "The Straw Hat Pirates, led by the indomitable :insertx:, landed on the island of :inserty:. Little did they know, the cunning captain, :insertz:, awaited them with a deadly plan that would change their destiny."
    },
    {
      text: "In the world of One Piece, legends were born, and :insertx: aimed to be the greatest of them all. Their voyage took them to the legendary island of :inserty:, where they crossed swords with the relentless crew of :insertz:. The seas roared with their battle cries."
    },
    {
      text: "With the power of the Gum-Gum Fruit coursing through them, :insertx: set sail for the enigmatic island of :inserty:. There, they clashed with the ruthless pirate crew led by the infamous captain, :insertz:. The world watched as their destinies intertwined."
    },
    {
      text: "On the brink of the Grand Line, :insertx: and their crew arrived at the fabled island of :inserty:. Little did they know, the cunning captain, :insertz:, had laid a trap that would test their mettle like never before."
    },
    {
      text: "The Straw Hat Pirates, led by the indomitable :insertx:, arrived at the mystical island of :inserty:. There, they faced the ultimate challenge—a battle of wits and strength against the relentless captain, :insertz:. The world held its breath."
    },
    {
      text: "With the fate of One Piece hanging in the balance, :insertx: and their crew landed on the enigmatic island of :inserty:. They clashed with the ruthless pirate crew led by the enigmatic captain, :insertz:, in a battle that would define their legacy."
    },
    {
      text: "In the treacherous waters of the Grand Line, :insertx: set sail with a burning ambition. Their journey led them to the fabled island of :inserty:, where they confronted the legendary pirate crew of :insertz:. It was a battle of wills and power."
    },
    {
      text: "On the stormy seas of the Grand Line, :insertx: and their crew arrived at the mysterious island of :inserty:. There, they clashed with the formidable pirate crew led by the cunning captain, :insertz:. The world watched as history unfolded."
    },
    {
      text: "With the heart of a pirate, :insertx: ventured to the enigmatic island of :inserty:. Little did they know, the relentless captain, :insertz:, awaited them with a challenge that would test their resolve like never before."
    },
    {
      text: "In the world of One Piece, where dreams became reality, :insertx: set out on a daring quest. Their journey led them to the legendary island of :inserty:, where they faced the formidable pirate crew of :insertz:. The world would never be the same."
    },
    {
      text: "With the power of the Straw Hat crew behind them, :insertx: landed on the island of :inserty:. There, they clashed with the cunning pirate crew led by the enigmatic captain, :insertz:, in a battle that would resonate through the ages."
    },
    {
      text: "Bound by their unwavering dream of finding One Piece, :insertx: sailed to the treacherous shores of :inserty:. Little did they know, the fearsome captain, :insertz:, had a plan that would test their loyalty and courage."
    }
  ];



const urls = [
  "https://www.jsonkeeper.com/b/VB50",
  "https://www.jsonkeeper.com/b/PBS1",
  "https://www.jsonkeeper.com/b/YUS3"
];

Promise.all(urls.map(url => fetch(url).then(response => response.json())))
  .then(dataArray => {
    const [insertX, insertY, insertZ] = dataArray;
    console.log("Data for insertX:", insertX);
    console.log("Data for insertY:", insertY);
    console.log("Data for insertZ:", insertZ);

    // Add event listener after fetching data
    randomize.addEventListener('click', () => result(insertX, insertY, insertZ));
  })

// In your result function
function result(insertX, insertY, insertZ) {
  // Select a random story text from the array
  const randomStory = randomValueFromArray(storyTexts);
  let newStory = randomStory.text;

  if (insertX && insertX.names && insertY && insertY.names && insertZ && insertZ.locations) {
    const xItem = randomValueFromArray(insertX.names);
    const yItem = randomValueFromArray(insertY.names);
    const zItem = randomValueFromArray(insertZ.locations);

    if (customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace('Bob', name);
    }

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if (document.getElementById("uk").checked) {
      const weight = `${Math.round(300 * 0.0714286)} stone`;
      const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;
      newStory = newStory.replaceAll('94 fahrenheit', temperature);
      newStory = newStory.replaceAll('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
  } else {
    console.error("Data structure is not as expected");
  }
}