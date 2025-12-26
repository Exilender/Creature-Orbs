document.addEventListener('DOMContentLoaded', function() {
    // Load user orb from localStorage
    const userOrb = JSON.parse(localStorage.getItem('userOrb'));

    if (!userOrb) {
        console.error("User Orb not found in Local Storage.");
        return;
    }

    // Generate foe orb
    const foeOrb = generateRandomOrb();

    displayOrb(userOrb, 'user');
    displayOrb(foeOrb, 'foe');
});

function generateRandomOrb() {
    const bodies = ['Body1.png', 'Body2.png', 'Body3.png'];
    const eyes = ['Eye1.png', 'Eye2.png', 'Eye3.png'];
    const mouths = ['Mouth1.png', 'Mouth2.png', 'Mouth3.png'];

    return {
        body: randomItem(bodies),
        eyes: randomItem(eyes),
        mouth: randomItem(mouths)
    };
}

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function displayOrb(orb, type) {
    const prefix = type === 'user' ? 'user' : 'foe';
    document.getElementById(prefix + 'Body').style.backgroundImage = `url('images/bodies/${orb.body}')`;
    document.getElementById(prefix + 'Eyes').style.backgroundImage = `url('images/eyes/${orb.eyes}')`;
    document.getElementById(prefix + 'Mouth').style.backgroundImage = `url('images/mouths/${orb.mouth}')`;
}