// Generate Orb
document.getElementById('bodySelect').addEventListener('change', function() {
    const selectedBody = this.value;
    document.getElementById('body').style.backgroundImage = `url('images/bodies/${selectedBody}')`;
});

document.getElementById('eyesSelect').addEventListener('change', function() {
    const selectedEyes = this.value;
    document.getElementById('eyes').style.backgroundImage = `url('images/eyes/${selectedEyes}')`;
});

document.getElementById('mouthSelect').addEventListener('change', function() {
    const selectedMouth = this.value;
    document.getElementById('mouth').style.backgroundImage = `url('images/mouths/${selectedMouth}')`;
});

function startBattle() {
    const body = document.getElementById('bodySelect').value;
    const eyes = document.getElementById('eyesSelect').value;
    const mouth = document.getElementById('mouthSelect').value;

    // Saving to local storage
    localStorage.setItem('userOrb', JSON.stringify({
        body,
        eyes,
        mouth
    }));

    // Go to battle page
    window.location.href = 'battle.html';
}