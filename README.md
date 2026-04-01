# 📄 Sistema de Registro de Falhas com Exportação CSV

## 📌 Sobre o Projeto

Este projeto é uma aplicação web simples para registro de falhas operacionais, permitindo que usuários preencham um formulário estruturado e exportem os dados em formato CSV.

O sistema conta com uma tela de login e uma interface principal de formulário, sendo ideal para uso em ambientes industriais ou operacionais.

---

## 🚀 Funcionalidades

- 🔐 Tela de login simples  
- 📝 Formulário estruturado para registro de falhas  
- 🎯 Seleção de setor e especialidade  
- 📅 Campo dinâmico de data/hora (exibido apenas quando necessário)  
- 📤 Exportação dos dados em formato CSV  
- 🎨 Interface responsiva e estilizada com CSS  

---

## 🖥️ Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  

---

## 📸 Telas do Sistema

### 🔐 Tela de Login
- Interface simples para autenticação  
- Redireciona para o formulário principal  

### 📝 Tela de Formulário
- Campos para registro de falhas  
- Seleção de setor, especialidade e status  
- Exportação dos dados  

---

## ⚙️ Como Executar o Projeto

1. Clone o repositório  
   `git clone https://github.com/seu-usuario/seu-repositorio.git`

2. Acesse a pasta do projeto  
   `cd seu-repositorio`

3. Abra o arquivo  
   `login.html`

4. Utilize o sistema normalmente no navegador  

---

## 📤 Exportação de Dados

Ao clicar no botão **"Exportar CSV"**, o sistema:

- Coleta todos os dados do formulário  
- Gera um arquivo `.csv`  
- Realiza o download automaticamente  

---

## 🧠 Lógica Implementada

### Exibição Condicional de Campo
O campo de data/hora só aparece quando o usuário seleciona **"Sim"** em "Gerou parada".

### Geração de CSV
Os dados são organizados em:

- Cabeçalho (keys)  
- Linha de valores  

Separados por `;` (padrão Excel BR)

---

## ⚠️ Limitações

- Login sem autenticação real (apenas redirecionamento)  
- Dados não são persistidos (sem banco de dados)  
- Exportação apenas local (não envia para servidor)  

---

## 🔮 Melhorias Futuras

- Integração com backend (Node.js, Firebase, etc.)  
- Autenticação real de usuários  
- Armazenamento em banco de dados  
- Dashboard de visualização de falhas  
- Upload de imagens  
- Exportação para Excel avançado  

---

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias:

1. Fork do projeto  
2. Crie uma branch (`git checkout -b feature/nova-feature`)  
3. Commit (`git commit -m 'feat: nova feature'`)  
4. Push (`git push origin feature/nova-feature`)  
5. Abra um Pull Request  

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

Desenvolvido por **Demarcorleo**
