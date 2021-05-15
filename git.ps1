$message = Read-Host "Commit Message "

Start-Process git -ArgumentList 'add .'
Start-Process git -ArgumentList "commit -m $message"
Start-Process git -ArgumentList 'push origin main' 