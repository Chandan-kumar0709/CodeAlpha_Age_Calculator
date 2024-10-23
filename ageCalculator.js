document.getElementById('calculate').addEventListener('click', function() {
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) {
        document.getElementById('result').innerText = 'Please enter a valid date of birth.';
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();
    
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
});
