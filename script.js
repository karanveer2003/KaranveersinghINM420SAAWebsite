// Function to update date and time
function updateTime() {
  const now = new Date();
  const optionsDate = { 
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', timeZone: 'America/Toronto' 
  };
  const optionsTime = { 
    hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'America/Toronto' 
  };
  document.getElementById('date').textContent = now.toLocaleDateString('en-CA', optionsDate);
  document.getElementById('time').textContent = now.toLocaleTimeString('en-CA', optionsTime);
}

updateTime();
setInterval(updateTime, 1000);

// Expire button handler
document.getElementById('expireBtn').addEventListener('click', () => {
  const expiryInfo = document.getElementById('expiryInfo');
  expiryInfo.textContent = 'This pass has expired.';
  document.getElementById('expireBtn').disabled = true;
  document.getElementById('expireBtn').style.backgroundColor = 'gray';
});