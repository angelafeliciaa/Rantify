var moodEntry = null;
var journalsData = [];
function chosenMood(moodNumber) {
  moodEntry = moodNumber;
}
function openPastEntriesPage(){
  window.location.href = "rantEntries.html";
}
function openThankYouPage(){
  window.location.href = "thankyou.html";
}

function submit() {
  var submittedJournals = document.getElementById("journal").value;
  var submittedReflections = document.getElementById("reflection").value;
  var submittedSummaries = document.getElementById("summary").value;
  if(moodEntry==null){
    alert("Choose the mood");
    return;
  }
  var journal = {
    mood: moodEntry,
    journal: submittedJournals,
    reflection: submittedReflections,
    summary: submittedSummaries,
  };
  var storedData = localStorage.getItem(logged);
  if (storedData) {
    journalsData = JSON.parse(storedData);
  }
  journalsData.push(journal);
  localStorage.setItem(logged, JSON.stringify(journalsData));
  window.location.href = "submitRant.html";
}

function newPage() {
    window.location.href = "rantEntries.html";
  }
