// Function to update the current date and time in Toronto timezone
function updateTime() {
  const now = new Date();

  // Format date as "Tue Jan 07 2025" in Toronto timezone
  const optionsDate = { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    timeZone: 'America/Toronto' 
  };
  const dateStr = now.toLocaleDateString('en-CA', optionsDate);

  // Format time as "1:00:43 PM" in Toronto timezone
  const optionsTime = { 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric', 
    hour12: true, 
    timeZone: 'America/Toronto' 
  };
  const timeStr = now.toLocaleTimeString('en-CA', optionsTime);

  document.getElementById('date').textContent = dateStr;
  document.getElementById('time').textContent = timeStr;
}

// Initialize the times
updateTime();

// No need to update every second for static message, but keep for real-time clock
setInterval(updateTime, 1000);

// Handle manual expiration
document.getElementById('expireBtn').addEventListener('click', function() {
  const expiryInfo = document.getElementById('expiryInfo');
  expiryInfo.textContent = 'This pass has expired.';
  this.disabled = true;
  this.style.backgroundColor = 'gray';
});