Welcome to use the API from GitHub, for first use you need this command in VS Code for example:

$data = Invoke-RestMethod https://douglasribeirosanguino.github.io/dataTestJsonAPI/dataTestJson.json

this filter below is used only you need infos like a "Porca"
$data.itens | Where-Object { $_.nome -like "*Porca*" }

But you add texts for more simple read on terminal:

"Status: ", $data.status, "Version: ", $data.versao, $data.itens

<img width="615" height="300" alt="image" src="https://github.com/user-attachments/assets/4e1346fc-9662-4c3b-87fb-a9e3fecc6a77" />
