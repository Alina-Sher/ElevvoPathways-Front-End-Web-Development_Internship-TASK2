const blogContainer = document.getElementById("blogContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

const posts = [
  // ===== TECH =====
  { title: "AI Revolution 2025", category: "tech", image: "images/tech1.jpg", description: "Exploring the rise of AI in daily life.", date: "Oct 1, 2025" },
  { title: "Top 10 Coding Tools", category: "tech", image: "images/tech2.jpg", description: "Must-have tools for modern developers.", date: "Sep 20, 2025" },
  { title: "The Future of Cloud", category: "tech", image: "images/tech3.jpg", description: "Why cloud computing is here to stay.", date: "Sep 15, 2025" },
  { title: "Cybersecurity Essentials", category: "tech", image: "images/tech4.jpg", description: "Protect your data in the digital age.", date: "Aug 25, 2025" },
  { title: "Quantum Computing Era", category: "tech", image: "images/tech5.jpg", description: "A beginner’s guide to quantum computing.", date: "Aug 10, 2025" },
  { title: "Web 3.0 Explained", category: "tech", image: "images/tech6.jpg", description: "Decentralized internet and blockchain impact.", date: "Jul 30, 2025" },

  // ===== TRAVEL =====
  { title: "Exploring Paris", category: "travel", image: "images/travel1.jpg", description: "The city of lights and love awaits you.", date: "Sep 5, 2025" },
  { title: "Mountain Adventures", category: "travel", image: "images/travel2.jpg", description: "A guide to hiking the tallest peaks.", date: "Aug 18, 2025" },
  { title: "Road Trip Diaries", category: "travel", image: "images/travel3.jpg", description: "Best routes to explore this summer.", date: "Jul 25, 2025" },
  { title: "Cultural Journey in Japan", category: "travel", image: "images/travel4.jpg", description: "Discover the blend of old and new.", date: "Jun 29, 2025" },
  { title: "Beach Escapes", category: "travel", image: "images/travel5.jpg", description: "Top 10 beaches you must visit.", date: "Jun 12, 2025" },
  { title: "Hidden Gems of Italy", category: "travel", image: "images/travel6.jpg", description: "Exploring lesser-known Italian towns.", date: "May 30, 2025" },

  // ===== FOOD =====
  { title: "Vegan Delights", category: "food", image: "images/food1.jpg", description: "Tasty plant-based meals to try today.", date: "Aug 2, 2025" },
  { title: "Street Food Around the World", category: "food", image: "images/food2.jpg", description: "Taste the local flavors of each country.", date: "Jul 19, 2025" },
  { title: "Italian Pasta Secrets", category: "food", image: "images/food3.jpg", description: "How to cook authentic Italian pasta.", date: "Jun 28, 2025" },
  { title: "The Art of Baking", category: "food", image: "images/food4.jpg", description: "Perfect cakes and pastries every time.", date: "Jun 10, 2025" },
  { title: "Healthy Smoothie Bowls", category: "food", image: "images/food5.jpg", description: "Colorful and nutritious breakfast ideas.", date: "May 22, 2025" },
  { title: "BBQ Weekend", category: "food", image: "images/food6.jpg", description: "Fire up the grill with these amazing recipes.", date: "Apr 30, 2025" },
];

function displayPosts(filteredPosts) {
  blogContainer.innerHTML = "";
  filteredPosts.forEach(post => {
    const postCard = `
      <div class="blog-card">
        <img src="${post.image}" alt="${post.title}">
        <div class="blog-content">
          <h3>${post.title}</h3>
          <p>${post.description}</p>
          <span>${post.date}</span>
        </div>
      </div>
    `;
    blogContainer.innerHTML += postCard;
  });
}

displayPosts(posts);

// Filter by Category
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;
    const filtered = category === "all" ? posts : posts.filter(p => p.category === category);
    displayPosts(filtered);
  });
});

// Search by Title
searchInput.addEventListener("input", e => {
  const searchText = e.target.value.toLowerCase();
  const filtered = posts.filter(p => p.title.toLowerCase().includes(searchText));
  displayPosts(filtered);
});
