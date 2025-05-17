const elements = document.querySelectorAll(".scroll-hidden");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scroll-show");
    }
    else{
        entry.target.classList.remove("scroll-show");
    }
  });
});

elements.forEach(element => observer.observe(element));