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