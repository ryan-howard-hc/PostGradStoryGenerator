const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}
const urls = [
  "https://www.jsonkeeper.com/b/VB50",
  "https://www.jsonkeeper.com/b/PBS1",
  "https://www.jsonkeeper.com/b/YUS3",
  "https://www.jsonkeeper.com/b/6G1M"
];

Promise.all(urls.map(url => fetch(url).then(response => response.json())))
  .then(dataArray => {
    const [insertX, insertY, insertZ, storyTextData] = dataArray; // Add a new variable for the new JSON data
    console.log("Data for insertX:", insertX.names);
    console.log("Data for insertY:", insertY.names);
    console.log("Data for insertZ:", insertZ.locations);
    console.log("Data for newJsonData:", storyTextData.stories); // Access data from the new JSON file

    randomize.addEventListener('click', result);

    function result() {
        const newStoryArray = storyTextData.stories; 
        let selectedStory = randomValueFromArray(newStoryArray);

      const xItem = randomValueFromArray(insertX.names);
      const yItem = randomValueFromArray(insertY.names);
      const zItem = randomValueFromArray(insertZ.locations);

      if (customName.value !== '') {
        const name = customName.value;
        selectedStory = selectedStory.replace('Bob', name); // Perform replacements on the selected story
      }

      selectedStory = selectedStory.replaceAll(':insertx:', xItem);
      selectedStory = selectedStory.replace(':inserty:', yItem);
      selectedStory = selectedStory.replace(':insertz:', zItem);

      if (document.getElementById("uk").checked) {
        const weight = `${Math.round(300 * 0.0714286)} stone`;
        const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;
        selectedStory = selectedStory.replaceAll('94 Fahrenheit', temperature);
        selectedStory = selectedStory.replaceAll('300 pounds', weight);
      }

      story.textContent = selectedStory;
      story.style.visibility = 'visible';
    }
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });