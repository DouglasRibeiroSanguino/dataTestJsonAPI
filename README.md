Welcome to use the API from GitHub, for first use you need this command in VS Code for example or use from GitPage in index:

https://douglasribeirosanguino.github.io/dataTestJsonAPI/index

<img width="548" height="434" alt="image" src="https://github.com/user-attachments/assets/0d75715f-cdaa-496f-807e-5456cba7b5d4" />

========= VS Code =========

$data = Invoke-RestMethod https://douglasribeirosanguino.github.io/dataTestJsonAPI/dataTestJson.json

this filter below is used only you need infos like a "NUT"
$data.items | Where-Object { $_.name -like "*NUT*" }

But you add texts for more simple read on terminal:

"Status: ", $data.status, "Version: ", $data.version, $data.items

<img width="615" height="300" alt="image" src="https://github.com/user-attachments/assets/4e1346fc-9662-4c3b-87fb-a9e3fecc6a77" />
