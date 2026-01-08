/* Typing Animation */
const texts = [
  "Front-End Developer",
  "Storytelling Web Creator",
  "Hackathon Front-End Specialist"
];

let i = 0, j = 0;
const typing = document.querySelector(".typing");

function type() {
  if (j < texts[i].length) {
    typing.textContent += texts[i][j++];
    setTimeout(type, 90);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    typing.textContent = texts[i].substring(0, --j);
    setTimeout(erase, 50);
  } else {
    i = (i + 1) % texts.length;
    setTimeout(type, 400);
  }
}
type();

/* Section Fade In & Out */
const sections = document.querySelectorAll(".section");
const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.25 }
);

sections.forEach(section => sectionObserver.observe(section));

/* Skill Bars */
const fills = document.querySelectorAll(".fill");
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width;
    } else {
      entry.target.style.width = "0";
    }
  });
}, { threshold: 0.5 });

fills.forEach(fill => skillObserver.observe(fill));

/* Dark Mode */
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
};

/* Project Modal */
const projects = [
  {
    title: "New year Website",
    desc: "Emotional storytelling website with typing animation, scroll-based narrative, password protection and reel-friendly design."
  },
  {
    title: "Alumni Setu",
    desc: "Hackathon project connecting institutes and alumni with mentorship, secure messaging and a job board."
  },
  {
    title: "Banking System",
    desc: "Python-based college project with secure authentication, unique user IDs, CSV database and real-time updates."
  },
  {
    title: "Portfolio & Login Pages",
    desc: "Multiple UI-focused login systems and personal portfolio projects built using HTML, CSS and JavaScript."
  }
];

function openModal(i) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalTitle").textContent = projects[i].title;
  document.getElementById("modalDesc").textContent = projects[i].desc;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* Custom Cursor */
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

/* Easter Egg */
document.addEventListener("keydown", e => {
  if (e.key === "c") {
    console.log("Built with ❤️ by Chinku Singh");
  }
});
