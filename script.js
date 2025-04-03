// DOM Elements
const calculateBtn = document.getElementById('calculate-btn');
const resultSection = document.getElementById('result-section');
const historySection = document.getElementById('history-section');
const historyList = document.getElementById('history-list');

// Zodiac data with elements and compatibility
const zodiacData = {
    aries: { 
        element: 'fire',
        compatibleWith: ['leo', 'sagittarius', 'gemini', 'aquarius'],
        dates: { start: { month: 3, day: 21 }, end: { month: 4, day: 19 } }
    },
    taurus: { 
        element: 'earth',
        compatibleWith: ['virgo', 'capricorn', 'cancer', 'pisces'],
        dates: { start: { month: 4, day: 20 }, end: { month: 5, day: 20 } }
    },
    gemini: { 
        element: 'air',
        compatibleWith: ['libra', 'aquarius', 'aries', 'leo'],
        dates: { start: { month: 5, day: 21 }, end: { month: 6, day: 20 } }
    },
    cancer: { 
        element: 'water',
        compatibleWith: ['scorpio', 'pisces', 'taurus', 'virgo'],
        dates: { start: { month: 6, day: 21 }, end: { month: 7, day: 22 } }
    },
    leo: { 
        element: 'fire',
        compatibleWith: ['aries', 'sagittarius', 'gemini', 'libra'],
        dates: { start: { month: 7, day: 23 }, end: { month: 8, day: 22 } }
    },
    virgo: { 
        element: 'earth',
        compatibleWith: ['taurus', 'capricorn', 'cancer', 'scorpio'],
        dates: { start: { month: 8, day: 23 }, end: { month: 9, day: 22 } }
    },
    libra: { 
        element: 'air',
        compatibleWith: ['gemini', 'aquarius', 'leo', 'sagittarius'],
        dates: { start: { month: 9, day: 23 }, end: { month: 10, day: 22 } }
    },
    scorpio: { 
        element: 'water',
        compatibleWith: ['cancer', 'pisces', 'virgo', 'capricorn'],
        dates: { start: { month: 10, day: 23 }, end: { month: 11, day: 21 } }
    },
    sagittarius: { 
        element: 'fire',
        compatibleWith: ['aries', 'leo', 'libra', 'aquarius'],
        dates: { start: { month: 11, day: 22 }, end: { month: 12, day: 21 } }
    },
    capricorn: { 
        element: 'earth',
        compatibleWith: ['taurus', 'virgo', 'scorpio', 'pisces'],
        dates: { start: { month: 12, day: 22 }, end: { month: 1, day: 19 } }
    },
    aquarius: { 
        element: 'air',
        compatibleWith: ['gemini', 'libra', 'aries', 'sagittarius'],
        dates: { start: { month: 1, day: 20 }, end: { month: 2, day: 18 } }
    },
    pisces: { 
        element: 'water',
        compatibleWith: ['cancer', 'scorpio', 'taurus', 'capricorn'],
        dates: { start: { month: 2, day: 19 }, end: { month: 3, day: 20 } }
    }
};

// Food categories with weights
const foodCategories = {
    italian: { 
        foods: ["pizza", "pasta", "risotto", "spaghetti", "lasagna"],
        weight: 1.2
    },
    asian: {
        foods: ["sushi", "ramen", "curry", "stir fry", "dumplings", "pho"],
        weight: 1.3
    },
    american: {
        foods: ["burger", "hot dog", "bbq", "fried chicken", "steak", "wings"],
        weight: 1.1
    },
    mexican: {
        foods: ["taco", "burrito", "enchilada", "quesadilla", "fajita"],
        weight: 1.2
    },
    mediterranean: {
        foods: ["hummus", "falafel", "gyro", "kebab"],
        weight: 1.4
    },
    healthy: {
        foods: ["salad", "smoothie", "quinoa", "avocado", "tofu"],
        weight: 1.3
    },
    dessert: {
        foods: ["ice cream", "cake", "pie", "chocolate", "cookies"],
        weight: 1.0
    }
};

// Personality types
const personalityTypes = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP',
                        'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'];

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
    },
    personality: {
        perfect: "Your personality types create an ideal match!",
        good: "Your personality types complement each other well.",
        average: "Your personality types have some compatibility.",
        poor: "Your personality types may require extra understanding."
    }
};

// Final analysis texts
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
    
    // Generate initial DNA codes and personality types
    generateDNACode('dna1');
    generateDNACode('dna2');
    generatePersonalityType('personality-type1');
    generatePersonalityType('personality-type2');
    
    // Load history if available
    loadHistory();
});

// Update zodiac sign based on birthdate
function updateZodiacSign(birthdateId, zodiacId) {
    const birthdate = new Date(document.getElementById(birthdateId).value);
    if (!birthdate || isNaN(birthdate.getTime())) return;
    
    const month = birthdate.getMonth() + 1; // JavaScript months are 0-indexed
    const day = birthdate.getDate();
    
    for (const [sign, data] of Object.entries(zodiacData)) {
        // Handle Capricorn's date range which crosses year end
        if (sign === 'capricorn') {
            if ((month === 12 && day >= data.dates.start.day) || 
                (month === 1 && day <= data.dates.end.day)) {
                document.getElementById(zodiacId).value = sign;
                return;
            }
        } else {
            if ((month === data.dates.start.month && day >= data.dates.start.day) || 
                (month === data.dates.end.month && day <= data.dates.end.day)) {
                document.getElementById(zodiacId).value = sign;
                return;
            }
        }
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
    return dna;
}

// Generate random personality type
function generatePersonalityType(elementId) {
    const randomType = personalityTypes[Math.floor(Math.random() * personalityTypes.length)];
    if (elementId) {
        document.getElementById(elementId).textContent = randomType;
    }
    return randomType;
}

// Calculate compatibility
function calculateCompatibility() {
    // Validate inputs
    if (!validateInputs()) return;
    
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
    
    // Get personality types
    const personality1 = document.getElementById('personality-type1').textContent;
    const personality2 = document.getElementById('personality-type2').textContent;
    
    // Calculate individual compatibility factors
    const zodiacScore = calculateZodiacCompatibility(zodiac1, zodiac2);
    const hobbiesScore = calculateHobbiesCompatibility(hobbies1, hobbies2);
    const movieScore = calculateMovieCompatibility(movie1, movie2);
    const sleepScore = calculateSleepCompatibility(sleep1, sleep2);
    const foodScore = calculateFoodCompatibility(food1, food2);
    const hrvScore = calculateHRVCompatibility(hrv1, hrv2);
    const dnaScore = calculateDNACompatibility(dna1, dna2);
    const ageScore = calculateAgeCompatibility(age1, age2);
    const personalityScore = calculatePersonalityCompatibility(personality1, personality2);
    
    // Calculate weighted total score
    const totalScore = Math.round(
        (zodiacScore * 0.15) + 
        (hobbiesScore * 0.15) + 
        (movieScore * 0.08) + 
        (sleepScore * 0.08) + 
        (foodScore * 0.10) + 
        (hrvScore * 0.08) + 
        (dnaScore * 0.10) + 
        (ageScore * 0.08) +
        (personalityScore * 0.18)
    );
    
    // Display results
    displayResults(
        name1, name2, 
        color1, color2, 
        totalScore, 
        zodiacScore, hobbiesScore, movieScore, sleepScore, foodScore, hrvScore, dnaScore, personalityScore,
        zodiac1, zodiac2,
        hobbies1, hobbies2,
        movie1, movie2,
        sleep1, sleep2,
        food1, food2,
        hrv1, hrv2,
        dna1, dna2,
        personality1, personality2,
        quirk1, quirk2
    );
    
    // Show result section with animation
    resultSection.style.display = 'block';
    resultSection.classList.add('fade-in');
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// Validate inputs
function validateInputs() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    
    if (!name1 || !name2) {
        alert("Please enter names for both people");
        return false;
    }
    
    return true;
}

// Calculate zodiac compatibility
function calculateZodiacCompatibility(zodiac1, zodiac2) {
    if (zodiac1 === "unknown" || zodiac2 === "unknown") return 50;
    if (zodiac1 === zodiac2) return 90;
    
    const zodiacInfo1 = zodiacData[zodiac1];
    const zodiacInfo2 = zodiacData[zodiac2];
    
    if (!zodiacInfo1 || !zodiacInfo2) return 50;
    
    // Check direct compatibility
    if (zodiacInfo1.compatibleWith.includes(zodiac2)) {
        return 85;
    }
    
    // Check elemental compatibility
    if ((zodiacInfo1.element === 'fire' && zodiacInfo2.element === 'air') || 
        (zodiacInfo1.element === 'air' && zodiacInfo2.element === 'fire') ||
        (zodiacInfo1.element === 'water' && zodiacInfo2.element === 'earth') || 
        (zodiacInfo1.element === 'earth' && zodiacInfo2.element === 'water')) {
        return 75;
    }
    
    return 50;
}

// Calculate hobbies compatibility
function calculateHobbiesCompatibility(hobbies1, hobbies2) {
    if (hobbies1.length === 0 && hobbies2.length === 0) return 50;
    
    const hobbyWeights = {
        'reading': 1, 'sports': 1.2, 'music': 1.1, 
        'travel': 1.3, 'cooking': 1.4, 'gaming': 1,
        'art': 1.2, 'dancing': 1.3, 'photography': 1.1
    };
    
    const common = hobbies1.filter(hobby => hobbies2.includes(hobby));
    const totalWeight = common.reduce((sum, h) => sum + (hobbyWeights[h] || 1), 0);
    
    // Scale to 30-100 range (minimum 30 even with no shared hobbies)
    return Math.min(100, 30 + (totalWeight * 20));
}

// Calculate movie compatibility
function calculateMovieCompatibility(movie1, movie2) {
    if (movie1 === movie2) return 100;
    
    // Genre compatibility pairs
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
    if (!food1 || !food2) return 50;
    
    food1 = food1.toLowerCase().trim();
    food2 = food2.toLowerCase().trim();
    
    if (food1 === food2) return 100;

    // Find categories for each food
    const categories1 = [];
    const categories2 = [];
    
    for (const category in foodCategories) {
        if (foodCategories[category].foods.some(food => food1.includes(food))) {
            categories1.push(category);
        }
        if (foodCategories[category].foods.some(food => food2.includes(food))) {
            categories2.push(category);
        }
    }

    // Check for direct matches first
    if (categories1.some(cat => categories2.includes(cat))) {
        return 85;
    }

    // Check for compatible pairings
    const compatiblePairs = {
        italian: ['mediterranean', 'american'],
        asian: ['mediterranean', 'healthy'],
        american: ['italian', 'mexican'],
        mexican: ['american', 'mediterranean'],
        mediterranean: ['asian', 'healthy'],
        healthy: ['asian', 'mediterranean'],
        dessert: [] // desserts go with everything
    };

    if (categories1.some(cat1 => 
        categories2.some(cat2 => 
            compatiblePairs[cat1]?.includes(cat2) || 
            compatiblePairs[cat2]?.includes(cat1)
        )
    )) {
        return 70;
    }

    return 40;
}

// Calculate HRV compatibility
function calculateHRVCompatibility(hrv1, hrv2) {
    const diff = Math.abs(hrv1 - hrv2);
    return Math.max(10, 100 - diff);
}

// Calculate DNA compatibility
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

// Calculate personality compatibility
function calculatePersonalityCompatibility(type1, type2) {
    if (!type1 || !type2) return 50;
    
    // Same first letter (introvert/extrovert)
    if (type1[0] === type2[0]) return 70;
    
    // Same second letter (sensing/intuition)
    if (type1[1] === type2[1]) return 65;
    
    // Same third letter (thinking/feeling)
    if (type1[2] === type2[2]) return 60;
    
    // Same fourth letter (judging/perceiving)
    if (type1[3] === type2[3]) return 55;
    
    return 40;
}

// Display results
function displayResults(
    name1, name2, 
    color1, color2, 
    totalScore, 
    zodiacScore, hobbiesScore, movieScore, sleepScore, foodScore, hrvScore, dnaScore, personalityScore,
    zodiac1, zodiac2,
    hobbies1, hobbies2,
    movie1, movie2,
    sleep1, sleep2,
    food1, food2,
    hrv1, hrv2,
    dna1, dna2,
    personality1, personality2,
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
    document.getElementById('dna-match-bar').style.width = `${dnaScore}%`;
    
    // Set DNA comparison
    document.getElementById('dna-string1').textContent = dna1;
    document.getElementById('dna-string2').textContent = dna2;
    document.getElementById('dna-match-text').textContent = `Base pair match: ${Math.round(dnaScore)}%`;
    visualizeDNAMatch(dna1, dna2);
    
    // Set personality types
    document.getElementById('personality-type1').textContent = personality1;
    document.getElementById('personality-type2').textContent = personality2;
    
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
    document.getElementById('final-analysis-text').textContent = getFinalAnalysis(totalScore, {
        top: [
            zodiacScore > 80 ? "celestial alignment" : null,
            hobbiesScore > 80 ? "shared interests" : null,
            personalityScore > 70 ? "personality match" : null
        ].filter(Boolean),
        lowest: {
            name: [
                zodiacScore < 40 ? "zodiac signs" : null,
                hobbiesScore < 40 ? "shared interests" : null,
                personalityScore < 40 ? "personality types" : null
            ].filter(Boolean)[0] || "no significant weaknesses",
            score: Math.min(zodiacScore, hobbiesScore, personalityScore)
        }
    });
    
    // Add animations
    document.querySelectorAll('.result-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('slide-up');
    });
    
    // Show history if available
    showHistory();
    
    // Save this calculation
    saveCalculation({
        name1, 
        name2, 
        score: totalScore,
        date: new Date().toLocaleString()
    });
}

// Visualize DNA match
function visualizeDNAMatch(dna1, dna2) {
    let matchHtml = '';
    const length = Math.min(dna1.length, dna2.length);
    
    for (let i = 0; i < length; i++) {
        const match = dna1[i] === dna2[i];
        matchHtml += `<span class="${match ? 'dna-match' : 'dna-mismatch'}">${dna1[i]}</span>`;
    }
    
    document.getElementById('dna-visualization').innerHTML = matchHtml;
}

// Get analysis text for a category
function getAnalysisText(category, score, value1, value2) {
    let textKey;
    
    if (score >= 85) textKey = 'perfect';
    else if (score >= 70) textKey = 'good';
    else if (score >= 50) textKey = 'average';
    else textKey = 'poor';
    
    let text = compatibilityTexts[category][textKey];
    
    // Add specific details based on values
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
    } else if (category === 'personality') {
        text += ` (${value1} & ${value2})`;
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
function getFinalAnalysis(totalScore, factors) {
    const analysis = finalAnalysisTexts.find(a => totalScore >= a.min && totalScore <= a.max);
    let text = analysis ? analysis.text : "Inconclusive results. The quantum love particles are uncertain.";
    
    // Add factors if available
    if (factors?.top?.length > 0) {
        text += ` Your strongest connections are in ${factors.top.join(', ')}.`;
    }
    
    if (factors?.lowest?.score < 40) {
        text += ` Your ${factors.lowest.name} show room for improvement.`;
    }
    
    return text;
}

// History functions
function saveCalculation(result) {
    const history = JSON.parse(localStorage.getItem('compatibilityHistory') || '[]');
    history.unshift(result); // Add newest first
    if (history.length > 5) history.pop(); // Keep only 5 most recent
    localStorage.setItem('compatibilityHistory', JSON.stringify(history));
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem('compatibilityHistory') || '[]');
    return history;
}

function showHistory() {
    const history = loadHistory();
    if (history.length > 0) {
        historySection.style.display = 'block';
        historyList.innerHTML = history.map(item => `
            <li class="fade-in">
                <strong>${item.name1} & ${item.name2}</strong><br>
                ${item.score}% - ${item.date}
            </li>
        `).join('');
    }
}

// Share result
function shareResult(platform) {
    const name1 = document.getElementById('name1').value || "Person 1";
    const name2 = document.getElementById('name2').value || "Person 2";
    const score = document.getElementById('compatibility-percentage').textContent;
    
    let text = `Our Quantum Love Compatibility Score is ${score}! ${name1} ❤️ ${name2}\nCheck yours at ${window.location.href}`;
    let url = '';
    
    switch (platform) {
        case 'X':
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
            break;
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
            break;
        case 'whatsapp':
            url = `https://wa.me/?text=${encodeURIComponent(text)}`;
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
    resultSection.classList.remove('fade-in');
    document.querySelector('html').scrollIntoView({ behavior: 'smooth' });
}

// Check if Font Awesome loaded properly
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (!window.FontAwesome || !document.querySelector('.fa-x-twitter')) {
            document.documentElement.classList.add('fa-missing');
        }
    }, 2000); // Check after 2 seconds
});