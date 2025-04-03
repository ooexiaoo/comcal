// DOM Elements
const calculateBtn = document.getElementById('calculate-btn');
const resultSection = document.getElementById('result-section');

// Zodiac sign dates
const zodiacDates = {
    aries: { start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
    taurus: { start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
    gemini: { start: { month: 5, day: 21 }, end: { month: 6, day: 20 } },
    cancer: { start: { month: 6, day: 21 }, end: { month: 7, day: 22 } },
    leo: { start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
    virgo: { start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
    libra: { start: { month: 9, day: 23 }, end: { month: 10, day: 22 } },
    scorpio: { start: { month: 10, day: 23 }, end: { month: 11, day: 21 } },
    sagittarius: { start: { month: 11, day: 22 }, end: { month: 12, day: 21 } },
    capricorn: { start: { month: 12, day: 22 }, end: { month: 1, day: 19 } },
    aquarius: { start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
    pisces: { start: { month: 2, day: 19 }, end: { month: 3, day: 20 } }
};

// Compatibility explanations
const compatibilityTexts = {
    zodiac: {
        perfect: "Celestial alignment is perfect! The stars are in your favor.",
        good: "Good celestial alignment. The stars smile upon your connection.",
        average: "Moderate celestial alignment. The stars are neutral about your bond.",
        poor: "Challenging celestial alignment. The stars may present obstacles."
    },
    hobbies: {
        perfect: "You share many interests! This creates a strong foundation for connection.",
        good: "You have several interests in common, which bodes well for your relationship.",
        average: "You have some shared interests, but also room to learn from each other.",
        poor: "Few shared interests, but opposites can attract with effort."
    },
    movie: {
        perfect: "Your movie tastes are perfectly aligned! Date nights will be easy.",
        good: "Your movie preferences complement each other well.",
        average: "Some overlap in movie tastes, with room for compromise.",
        poor: "Very different movie tastes, but variety can spice things up."
    },
    sleep: {
        perfect: "Your sleep patterns are perfectly synchronized! This promotes harmony.",
        good: "Your sleep patterns are compatible, with some overlap.",
        average: "Different sleep patterns, but manageable with compromise.",
        poor: "Opposite sleep patterns may require extra effort to synchronize."
    },
    food: {
        perfect: "Your food preferences are a perfect match! Dining will be a joy.",
        good: "Your food tastes complement each other well.",
        average: "Some differences in food preferences, but room to explore.",
        poor: "Very different food tastes, but cooking together could bridge the gap."
    },
    hrv: {
        perfect: "Your biological rhythms are in perfect harmony! Deep connection likely.",
        good: "Your biological rhythms are well-matched, promoting connection.",
        average: "Some mismatch in biological rhythms, but adaptable.",
        poor: "Different biological rhythms may require adjustment periods."
    }
};

// Final analysis texts based on score ranges
const finalAnalysisTexts = [
    { min: 90, max: 100, text: "Quantum entanglement detected! Your compatibility is off the charts. This connection has cosmic significance and profound potential for deep, lasting love. The universe itself seems to conspire in your favor." },
    { min: 75, max: 89, text: "Strong quantum resonance! You have excellent compatibility with great potential for a meaningful, lasting relationship. Your connection is rare and special, with many aligned factors that create a solid foundation." },
    { min: 60, max: 74, text: "Positive quantum alignment! You have good compatibility with potential for a rewarding relationship. While not perfect, your connection has many strengths that could develop into something beautiful with mutual effort." },
    { min: 45, max: 59, text: "Moderate quantum fluctuations detected. Your compatibility shows both promise and challenges. This relationship could work with effort and compromise, but may require more work than average to maintain harmony." },
    { min: 30, max: 44, text: "Quantum interference patterns observed. Your compatibility faces significant challenges. While not impossible, this relationship would require substantial effort, compromise and understanding from both parties to succeed." },
    { min: 0, max: 29, text: "Quantum dissonance detected. Your compatibility faces major obstacles according to our calculations. While love can sometimes defy logic, this connection would require extraordinary effort to overcome fundamental differences." }
];

// Initialize the calculator
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners for birthdates to auto-fill zodiac signs
    document.getElementById('birthdate1').addEventListener('change', function() {
        updateZodiacSign('birthdate1', 'zodiac1');
    });
    
    document.getElementById('birthdate2').addEventListener('change', function() {
        updateZodiacSign('birthdate2', 'zodiac2');
    });
    
    // Set up event listeners for HRV sliders
    document.getElementById('hrv1').addEventListener('input', function() {
        document.getElementById('hrvValue1').textContent = this.value;
    });
    
    document.getElementById('hrv2').addEventListener('input', function() {
        document.getElementById('hrvValue2').textContent = this.value;
    });
    
    // Generate initial DNA codes
    generateDNACode('dna1');
    generateDNACode('dna2');
});

// Update zodiac sign based on birthdate
function updateZodiacSign(birthdateId, zodiacId) {
    const birthdate = new Date(document.getElementById(birthdateId).value);
    if (!birthdate || isNaN(birthdate.getTime())) return;
    
    const month = birthdate.getMonth() + 1; // JavaScript months are 0-indexed
    const day = birthdate.getDate();
    
    let zodiacSign = '';
    
    for (const [sign, dates] of Object.entries(zodiacDates)) {
        // Handle Capricorn's date range which crosses year end
        if (sign === 'capricorn') {
            if ((month === 12 && day >= dates.start.day) || 
                (month === 1 && day <= dates.end.day)) {
                zodiacSign = sign;
                break;
            }
        } else {
            if ((month === dates.start.month && day >= dates.start.day) || 
                (month === dates.end.month && day <= dates.end.day)) {
                zodiacSign = sign;
                break;
            }
        }
    }
    
    if (zodiacSign) {
        document.getElementById(zodiacId).value = zodiacSign;
    }
}

// Generate random DNA-like code
function generateDNACode(dnaId) {
    const length = 20;
    const bases = ['A', 'C', 'G', 'T'];
    let dna = '';
    
    for (let i = 0; i < length; i++) {
        dna += bases[Math.floor(Math.random() * bases.length)];
    }
    
    document.getElementById(dnaId).value = dna;
}

// Calculate compatibility
function calculateCompatibility() {
    // Get all input values for person 1
    const name1 = document.getElementById('name1').value || "Person 1";
    const age1 = parseInt(document.getElementById('age1').value) || 30;
    const zodiac1 = document.getElementById('zodiac1').value || "unknown";
    const movie1 = document.getElementById('movie1').value;
    const color1 = document.getElementById('color1').value;
    const hobbies1 = Array.from(document.querySelectorAll('input[name="hobbies1"]:checked')).map(el => el.value);
    const sleep1 = document.querySelector('input[name="sleep1"]:checked').value;
    const food1 = document.getElementById('food1').value.toLowerCase() || "unknown";
    const hrv1 = parseInt(document.getElementById('hrv1').value);
    const dna1 = document.getElementById('dna1').value;
    const quirk1 = document.getElementById('quirk1').value || "No quirks shared";
    
    // Get all input values for person 2
    const name2 = document.getElementById('name2').value || "Person 2";
    const age2 = parseInt(document.getElementById('age2').value) || 30;
    const zodiac2 = document.getElementById('zodiac2').value || "unknown";
    const movie2 = document.getElementById('movie2').value;
    const color2 = document.getElementById('color2').value;
    const hobbies2 = Array.from(document.querySelectorAll('input[name="hobbies2"]:checked')).map(el => el.value);
    const sleep2 = document.querySelector('input[name="sleep2"]:checked').value;
    const food2 = document.getElementById('food2').value.toLowerCase() || "unknown";
    const hrv2 = parseInt(document.getElementById('hrv2').value);
    const dna2 = document.getElementById('dna2').value;
    const quirk2 = document.getElementById('quirk2').value || "No quirks shared";
    
    // Calculate individual compatibility factors
    const zodiacScore = calculateZodiacCompatibility(zodiac1, zodiac2);
    const hobbiesScore = calculateHobbiesCompatibility(hobbies1, hobbies2);
    const movieScore = calculateMovieCompatibility(movie1, movie2);
    const sleepScore = calculateSleepCompatibility(sleep1, sleep2);
    const foodScore = calculateFoodCompatibility(food1, food2);
    const hrvScore = calculateHRVCompatibility(hrv1, hrv2);
    const dnaScore = calculateDNACompatibility(dna1, dna2);
    const ageScore = calculateAgeCompatibility(age1, age2);
    
    // Calculate weighted total score
    const totalScore = Math.round(
        (zodiacScore * 0.15) + 
        (hobbiesScore * 0.20) + 
        (movieScore * 0.10) + 
        (sleepScore * 0.10) + 
        (foodScore * 0.10) + 
        (hrvScore * 0.10) + 
        (dnaScore * 0.15) + 
        (ageScore * 0.10)
    );
    
    // Display results
    displayResults(
        name1, name2, 
        color1, color2, 
        totalScore, 
        zodiacScore, hobbiesScore, movieScore, sleepScore, foodScore, hrvScore, dnaScore,
        zodiac1, zodiac2,
        hobbies1, hobbies2,
        movie1, movie2,
        sleep1, sleep2,
        food1, food2,
        hrv1, hrv2,
        dna1, dna2,
        quirk1, quirk2
    );
    
    // Show result section
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// Calculate zodiac compatibility
function calculateZodiacCompatibility(zodiac1, zodiac2) {
    if (zodiac1 === "unknown" || zodiac2 === "unknown") return 50;
    
    // Zodiac compatibility matrix (simplified)
    const compatibilityMatrix = {
        aries: { aries: 70, taurus: 40, gemini: 80, cancer: 30, leo: 90, virgo: 50, libra: 80, scorpio: 60, sagittarius: 90, capricorn: 40, aquarius: 70, pisces: 50 },
        taurus: { aries: 40, taurus: 80, gemini: 40, cancer: 80, leo: 50, virgo: 90, libra: 60, scorpio: 70, sagittarius: 40, capricorn: 90, aquarius: 50, pisces: 80 },
        gemini: { aries: 80, taurus: 40, gemini: 70, cancer: 50, leo: 70, virgo: 50, libra: 90, scorpio: 40, sagittarius: 80, capricorn: 50, aquarius: 90, pisces: 40 },
        cancer: { aries: 30, taurus: 80, gemini: 50, cancer: 90, leo: 40, virgo: 70, libra: 50, scorpio: 90, sagittarius: 40, capricorn: 70, aquarius: 40, pisces: 90 },
        leo: { aries: 90, taurus: 50, gemini: 70, cancer: 40, leo: 80, virgo: 40, libra: 70, scorpio: 60, sagittarius: 90, capricorn: 50, aquarius: 70, pisces: 40 },
        virgo: { aries: 50, taurus: 90, gemini: 50, cancer: 70, leo: 40, virgo: 80, libra: 60, scorpio: 70, sagittarius: 50, capricorn: 90, aquarius: 60, pisces: 70 },
        libra: { aries: 80, taurus: 60, gemini: 90, cancer: 50, leo: 70, virgo: 60, libra: 80, scorpio: 50, sagittarius: 70, capricorn: 60, aquarius: 90, pisces: 50 },
        scorpio: { aries: 60, taurus: 70, gemini: 40, cancer: 90, leo: 60, virgo: 70, libra: 50, scorpio: 90, sagittarius: 60, capricorn: 70, aquarius: 40, pisces: 90 },
        sagittarius: { aries: 90, taurus: 40, gemini: 80, cancer: 40, leo: 90, virgo: 50, libra: 70, scorpio: 60, sagittarius: 80, capricorn: 40, aquarius: 80, pisces: 40 },
        capricorn: { aries: 40, taurus: 90, gemini: 50, cancer: 70, leo: 50, virgo: 90, libra: 60, scorpio: 70, sagittarius: 40, capricorn: 80, aquarius: 50, pisces: 70 },
        aquarius: { aries: 70, taurus: 50, gemini: 90, cancer: 40, leo: 70, virgo: 60, libra: 90, scorpio: 40, sagittarius: 80, capricorn: 50, aquarius: 80, pisces: 40 },
        pisces: { aries: 50, taurus: 80, gemini: 40, cancer: 90, leo: 40, virgo: 70, libra: 50, scorpio: 90, sagittarius: 40, capricorn: 70, aquarius: 40, pisces: 90 }
    };
    
    return compatibilityMatrix[zodiac1][zodiac2];
}

// Calculate hobbies compatibility
function calculateHobbiesCompatibility(hobbies1, hobbies2) {
    if (hobbies1.length === 0 && hobbies2.length === 0) return 50;
    
    const commonHobbies = hobbies1.filter(hobby => hobbies2.includes(hobby));
    const totalHobbies = new Set([...hobbies1, ...hobbies2]).size;
    
    const overlapPercentage = (commonHobbies.length / totalHobbies) * 100;
    
    // Scale to 0-100 range with minimum of 20
    return Math.max(20, Math.min(100, overlapPercentage * 1.5));
}

// Calculate movie compatibility
function calculateMovieCompatibility(movie1, movie2) {
    if (movie1 === movie2) return 100;
    
    // Some genres pair better than others
    const genrePairs = {
        romance: { comedy: 90, drama: 80, fantasy: 70, scifi: 40, action: 30, horror: 20, documentary: 50 },
        comedy: { romance: 90, drama: 70, fantasy: 80, scifi: 60, action: 50, horror: 40, documentary: 30 },
        action: { scifi: 80, fantasy: 70, horror: 60, comedy: 50, drama: 40, romance: 30, documentary: 20 },
        scifi: { fantasy: 90, action: 80, comedy: 60, drama: 50, horror: 70, romance: 40, documentary: 60 },
        horror: { action: 60, scifi: 70, fantasy: 50, comedy: 40, drama: 30, romance: 20, documentary: 10 },
        drama: { romance: 80, comedy: 70, fantasy: 60, scifi: 50, action: 40, horror: 30, documentary: 70 },
        fantasy: { scifi: 90, romance: 70, comedy: 80, action: 70, drama: 60, horror: 50, documentary: 40 },
        documentary: { drama: 70, scifi: 60, comedy: 30, romance: 50, fantasy: 40, action: 20, horror: 10 }
    };
    
    return genrePairs[movie1][movie2] || 50;
}

// Calculate sleep compatibility
function calculateSleepCompatibility(sleep1, sleep2) {
    return sleep1 === sleep2 ? 90 : 60;
}

// Calculate food compatibility
function calculateFoodCompatibility(food1, food2) {
    if (food1 === food2) return 100;
    
    // Some food categories
    const foodCategories = {
        italian: ["pizza", "pasta", "risotto"],
        asian: ["sushi", "ramen", "curry", "stir fry"],
        american: ["burger", "hot dog", "bbq", "fried chicken"],
        mexican: ["taco", "burrito", "enchilada"],
        healthy: ["salad", "smoothie", "quinoa"],
        dessert: ["ice cream", "cake", "pie"]
    };
    
    // Check if foods are in same category
    for (const category in foodCategories) {
        const foods = foodCategories[category];
        if (foods.some(f => food1.includes(f))) {  // Added missing parenthesis here
            if (foods.some(f => food2.includes(f))) {
                return 80;
            }
        }
    }
    
    return 50;
}

// Calculate HRV compatibility
function calculateHRVCompatibility(hrv1, hrv2) {
    const diff = Math.abs(hrv1 - hrv2);
    return Math.max(10, 100 - diff);
}

// Calculate DNA compatibility (just for fun)
function calculateDNACompatibility(dna1, dna2) {
    let matches = 0;
    const length = Math.min(dna1.length, dna2.length);
    
    for (let i = 0; i < length; i++) {
        if (dna1[i] === dna2[i]) matches++;
    }
    
    return (matches / length) * 100;
}

// Calculate age compatibility
function calculateAgeCompatibility(age1, age2) {
    const ageDiff = Math.abs(age1 - age2);
    
    if (ageDiff <= 2) return 100;
    if (ageDiff <= 5) return 80;
    if (ageDiff <= 10) return 60;
    if (ageDiff <= 15) return 40;
    return 20;
}

// Display results
function displayResults(
    name1, name2, 
    color1, color2, 
    totalScore, 
    zodiacScore, hobbiesScore, movieScore, sleepScore, foodScore, hrvScore, dnaScore,
    zodiac1, zodiac2,
    hobbies1, hobbies2,
    movie1, movie2,
    sleep1, sleep2,
    food1, food2,
    hrv1, hrv2,
    dna1, dna2,
    quirk1, quirk2
) {
    // Set names and colors
    document.getElementById('result-name1').textContent = name1;
    document.getElementById('result-name2').textContent = name2;
    document.getElementById('color-box1').style.backgroundColor = color1;
    document.getElementById('color-box2').style.backgroundColor = color2;
    
    // Set main score
    document.getElementById('compatibility-percentage').textContent = `${totalScore}%`;
    
    // Animate score circle with conic gradient
    const scoreCircle = document.querySelector('.score-circle');
    scoreCircle.style.background = `conic-gradient(var(--primary-color) 0%, var(--secondary-color) ${totalScore}%, #e9ecef ${totalScore}%, #e9ecef 100%)`;
    
    // Set individual scores
    document.getElementById('zodiac-progress').style.width = `${zodiacScore}%`;
    document.getElementById('hobbies-progress').style.width = `${hobbiesScore}%`;
    document.getElementById('movie-progress').style.width = `${movieScore}%`;
    document.getElementById('sleep-progress').style.width = `${sleepScore}%`;
    document.getElementById('food-progress').style.width = `${foodScore}%`;
    document.getElementById('hrv-progress').style.width = `${hrvScore}%`;
    
    // Set DNA comparison
    document.getElementById('dna-string1').textContent = dna1;
    document.getElementById('dna-string2').textContent = dna2;
    document.getElementById('dna-match-bar').style.width = `${dnaScore}%`;
    document.getElementById('dna-match-text').textContent = `Base pair match: ${Math.round(dnaScore)}%`;
    
    // Set analysis texts
    document.getElementById('zodiac-text').textContent = getAnalysisText('zodiac', zodiacScore, zodiac1, zodiac2);
    document.getElementById('hobbies-text').textContent = getAnalysisText('hobbies', hobbiesScore, hobbies1, hobbies2);
    document.getElementById('movie-text').textContent = getAnalysisText('movie', movieScore, movie1, movie2);
    document.getElementById('sleep-text').textContent = getAnalysisText('sleep', sleepScore, sleep1, sleep2);
    document.getElementById('food-text').textContent = getAnalysisText('food', foodScore, food1, food2);
    document.getElementById('hrv-text').textContent = getAnalysisText('hrv', hrvScore, hrv1, hrv2);
    
    // Set quirk analysis
    document.getElementById('quirk-analysis').textContent = generateQuirkAnalysis(quirk1, quirk2);
    
    // Set final analysis
    document.getElementById('final-analysis-text').textContent = getFinalAnalysis(totalScore);
}

// Get analysis text for a category
function getAnalysisText(category, score, value1, value2) {
    let textKey;
    
    if (score >= 85) textKey = 'perfect';
    else if (score >= 70) textKey = 'good';
    else if (score >= 50) textKey = 'average';
    else textKey = 'poor';
    
    let text = compatibilityTexts[category][textKey];
    
    // Add some specific details based on values
    if (category === 'zodiac') {
        text += ` (${value1.toUpperCase()} & ${value2.toUpperCase()})`;
    } else if (category === 'hobbies') {
        const common = value1.filter(h => value2.includes(h));
        if (common.length > 0) {
            text += ` You both enjoy ${common.join(', ')}.`;
        }
    } else if (category === 'movie') {
        text += ` (${value1.toUpperCase()} & ${value2.toUpperCase()})`;
    } else if (category === 'sleep') {
        text += value1 === value2 ? 
            ` You're both ${value1 === 'morning' ? 'morning people' : 'night owls'}.` : 
            ` One is a morning person, the other a night owl.`;
    } else if (category === 'food') {
        text += value1 === value2 ? 
            ` You both love ${value1}.` : 
            ` One prefers ${value1}, the other ${value2}.`;
    } else if (category === 'hrv') {
        const diff = Math.abs(value1 - value2);
        text += ` (${value1}ms vs ${value2}ms, difference: ${diff}ms)`;
    }
    
    return text;
}

// Generate quirk analysis
function generateQuirkAnalysis(quirk1, quirk2) {
    const quirks = [
        "Your quirks create an interesting dynamic that could lead to many amusing moments.",
        "The combination of your unique traits suggests a relationship full of surprises.",
        "Your individual quirks complement each other in unexpected ways.",
        "These distinctive qualities could either be a source of friction or endless amusement.",
        "Your unique characteristics suggest a relationship that will never be boring.",
        "The universe seems to have paired these quirks together for a reason."
    ];
    
    return `${quirk1} + ${quirk2} = ${quirks[Math.floor(Math.random() * quirks.length)]}`;
}

// Get final analysis based on total score
function getFinalAnalysis(score) {
    const analysis = finalAnalysisTexts.find(a => score >= a.min && score <= a.max);
    return analysis ? analysis.text : "Inconclusive results. The quantum love particles are uncertain.";
}

// Share result
function shareResult(platform) {
    const name1 = document.getElementById('name1').value || "Person 1";
    const name2 = document.getElementById('name2').value || "Person 2";
    const score = document.getElementById('compatibility-percentage').textContent;
    
    let text = `Our Quantum Love Compatibility Score is ${score}! Check yours at ${window.location.href}`;
    let url = '';
    
    switch (platform) {
        case 'twitter':
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
            break;
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
            break;
        case 'copy':
            navigator.clipboard.writeText(text);
            alert('Link copied to clipboard!');
            return;
    }
    
    if (url) {
        window.open(url, '_blank', 'width=600,height=400');
    }
}

// Restart calculator
function restartCalculator() {
    resultSection.style.display = 'none';
    document.querySelector('html').scrollIntoView({ behavior: 'smooth' });
}