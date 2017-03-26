function readName() {
  // Print whatever we stored last time!
  chrome.storage.sync.get("name", function (result) {
    var foundName =  result['name']
    if (!foundName) {
      document.getElementById('todolist').textContent = "You've never typed anything here before!";
    } else {
      document.getElementById('todolist').textContent = "Hello, " + foundName;
    }
  })

  // Read new stuff!
  document.getElementById('ok_btn').addEventListener('click', function() {
    var name = document.getElementById('name_textbox');
    document.getElementById('todolist').textContent = "Hello, " + name.value;
    chrome.storage.sync.set({'name': name.value }, function() {
      message('Settings saved');
    })
  });
}

document.addEventListener('DOMContentLoaded', readName)

  
