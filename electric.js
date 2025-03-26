let stepCount = 0;          // Initialize step count
let totalPressure = 0;      // Initialize total pressure generated
let totalElectricity = 0;   // Initialize total electricity generated

// Reward thresholds
const rewardThresholds = [10, 50, 100]; // Rewards at 10, 50, 100 steps
let rewards = [];  // Array to hold rewards that the user has earned

// Get references to the elements
const touchButton = document.getElementById('touchButton');
const stepCountDisplay = document.getElementById('stepCount');
const pressureDisplay = document.getElementById('pressure');
const electricityDisplay = document.getElementById('electricity');
const rewardsDisplay = document.getElementById('rewards');

// Function to simulate the step, generate pressure, electricity, and reward
touchButton.addEventListener('click', () => {
  stepCount++;  // Increment the step count

  // Generate random pressure between 10 and 50 Pascal (Pa)
  const pressureGenerated = (Math.random() * (50 - 10) + 10).toFixed(2);  // Random between 10 and 50 Pa
  totalPressure += parseFloat(pressureGenerated);  // Add to total pressure

  // Generate random electricity between 0.001 and 0.05 Joules (J)
  const electricityGenerated = (Math.random() * (0.05 - 0.001) + 0.001).toFixed(3);  // Random between 0.001 and 0.05 J
  totalElectricity += parseFloat(electricityGenerated);  // Add to total electricity

  // Update the displayed values
  stepCountDisplay.textContent = `Steps: ${stepCount}`;
  pressureDisplay.textContent = `Pressure Generated: ${totalPressure.toFixed(2)} Pa`;
  electricityDisplay.textContent = `Electricity Generated: ${totalElectricity.toFixed(3)} J`;

  // Check if the user has earned any new rewards
  checkForRewards();
});

// Function to check if the user has earned any new rewards based on step count
function checkForRewards() {
  rewardThresholds.forEach(threshold => {
    if (stepCount >= threshold && !rewards.includes(threshold)) {
      rewards.push(threshold);  // Add the reward threshold to the earned rewards array
      displayReward(threshold);  // Display the reward
    }
  });
}

// Function to display the appropriate reward message based on step count
function displayReward(threshold) {
  let rewardMessage = "";
  switch (threshold) {
    case 10:
      rewardMessage = "🎉 Congrats! You've earned a small reward! Keep going!";
      break;
    case 50:
      rewardMessage = "🥳 Awesome! You've earned a medium reward! Great job!";
      break;
    case 100:
      rewardMessage = "🏆 Incredible! You've earned a special reward! You're a champion!";
      break;
    default:
      rewardMessage = "Keep stepping!";
  }

  // Append the new reward message to the rewards display instead of replacing it
  rewardsDisplay.textContent += `\n${rewardMessage}`;
}
