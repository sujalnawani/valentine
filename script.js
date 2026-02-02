const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionText = document.getElementById('question-text');
const mainGif = document.getElementById('main-gif');

let yesFontSize = 1.2; // Initial size in rem

// 1. Make the "No" button run away
noBtn.addEventListener('mouseover', () => {
    // Calculate random position within the window
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = ${x}px;
    noBtn.style.top = ${y}px;

    // Bonus: Make the "Yes" button bigger every time they try to hit "No"
    yesFontSize += 0.2;
    yesBtn.style.fontSize = ${yesFontSize}rem;
    yesBtn.style.padding = ${yesFontSize * 10}px ${yesFontSize * 20}px;
});

// 2. What happens when they click "Yes"
yesBtn.addEventListener('click', () => {
    // Change the text and image
    questionText.innerHTML = "I knew it! ❤️";
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueG56ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6ZzR6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/L40vWpxO4DLS0/giphy.gif";
    
    // Hide the No button
    noBtn.style.display = 'none';
    
    // Reset Yes button size for the final view
    yesBtn.style.fontSize = "1.2rem";
    yesBtn.style.padding = "12px 25px";
    yesBtn.innerHTML = "Love you too!";
});