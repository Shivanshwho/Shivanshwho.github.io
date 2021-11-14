AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

{/* <ul class="menu-content">
  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
</ul> */}

// Array of object for projects
const projects = [
  {
    title: "Portfolio Optimizer",
    cardImage: "assets/images/project-page/portfolio.png",
    description: "Application to predict share prices of multiple stocks and after selecting best-performing stocks returns the optimized portfolio for the investor",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/Shivanshwho/Stock-Portfolio-Optimization-using-MPT-and-LSTM",
  },
  {
    title: "Shortest Route Visualizer for Electric Vehicles",
    cardImage: "https://www.trinetrawireless.com/wp-content/uploads/2017/12/Efficient-Fleet-Route-Optimization-With-Trinetra-Wireless.jpg",
    description: "Streamlit web-application using Python libraries to generate the shortest route between two locations.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/Shivanshwho/Shortest-Route-Visualizer-for-Electric-Vehicles",
  },
  {
    title: "PaintAir",
    cardImage: "assets/images/project-page/paintair.jpg",
    description: "Application to let the user draw in a Paint window by waving a specific colored marker/pointer in front of the device’s camera.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/Shivanshwho/PaintAir",
  },
  {
    title: "ViewSort ",
    cardImage: "assets/images/project-page/sort.jpg",
    description: "Application to visualize various sorting algorithms.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/Shivanshwho/Viewsort",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage,description, tags, Previewlink, Githublink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${Githublink}">${title}</a></h1>
                </div>
                <p>${description}</p>

              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
