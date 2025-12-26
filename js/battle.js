    let userOrbHealth = 100;
    let foeOrbHealth = 100;
    let currentTurn = 0; // 0 for user; 1 for foe

    function attack() {
        const damage = 10;
        const attacker = currentTurn === 0 ? 'userOrb' : 'foeOrb';
        const defender = currentTurn === 0 ? 'foeOrb' : 'userOrb';

        // Calculate damage
        if (attacker === 'userOrb') {
            foeOrbHealth -= damage;
            foeOrbHealth = Math.max(foeOrbHealth, 0);
            document.getElementById("foe-orb-health").textContent = `Health: ${foeOrbHealth}`;
        } else {
            userOrbHealth -= damage;
            userOrbHealth = Math.max(userOrbHealth, 0);
            document.getElementById("user-orb-health").textContent = `Health: ${userOrbHealth}`;
        }

        // Check for winner
        if (userOrbHealth <= 0) {
            alert('Foe Orb Wins!');
            reset();
        } else if (foeOrbHealth <= 0) {
            alert('Your Orb Wins!');
            reset();
        }

        // Switch turns
        currentTurn = 1 - currentTurn;
    }

    function resetBattle() {
        userOrbHealth = 100;
        foeOrbHealth = 100;
        currentTurn = 0;
        document.getElementById("user-orb-health").textContent = `Health: ${userOrbHealth}`;
        document.getElementById("foe-orb-health").textContent = `Health: ${foeOrbHealth}`;
    }
