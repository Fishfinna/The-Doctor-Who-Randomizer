let content;

async function load_story() {
  const response = await fetch("./data.json");
  content = await response.json();
  make_story();
}

function make_story() {
  let story = content[Math.floor(Math.random() * content.length)];
  console.log(story);
  let title = document.getElementById("episode-title");
  title.innerHTML = `${story.Name}`;

  let description = document.getElementById("episode-content");
  description.innerHTML = `
${story.Doc != "None" ? "Doctor: " + story.Doc : "Doctorless"} <br>
${story.Series != "None" ? "Series: " + story.Series : ""} <br>
${story.Date != "None" ? "Made in: " + story.Date : ""} <br>
${story.Medium != "None" ? "Medium: " + story.Medium : ""} <br>
`;
}

window.addEventListener("load", load_story);
