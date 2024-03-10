document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const deleteBtn = document.getElementById('btn2');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        saveData();
    });

    deleteBtn.addEventListener('click', function(event) {
    event.preventDefault();
    confirmDelete();
});

    function saveData() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;

        alert(`Informações salvas!\n\nNome: ${name}\nEmail: ${email}\nSenha: ${password}\nTelefone: ${phone}`);

        // Será mostrado no console
        console.log("Nome:", name);
        console.log("Email:", email);
        console.log("Senha:", password);
        console.log("Telefone:", phone);
    }

    function confirmDelete() {
        const confirmation = confirm("Tem certeza que deseja excluir a conta?");
    // Tela de carregamento
        if (confirmation) {
        alert("Conta excluída com sucesso!");
        const telaDeCarregamento = document.createElement('div');
        telaDeCarregamento.textContent = 'Que pena! Sua conta está sendo excluída.';
        telaDeCarregamento.style.position = 'fixed';
        telaDeCarregamento.style.top = '0';
        telaDeCarregamento.style.left = '0';
        telaDeCarregamento.style.width = '100%';
        telaDeCarregamento.style.height = '100%';
        telaDeCarregamento.style.background = 'rgba(20, 20, 20, 0.9)';
        telaDeCarregamento.style.color = 'white'
        telaDeCarregamento.style.display = 'flex';
        telaDeCarregamento.style.justifyContent = 'center';
        telaDeCarregamento.style.alignItems = 'center';
        document.body.appendChild(telaDeCarregamento);

        setTimeout(function() {
            window.location.href = "index.html";
        }, 2000);
        } else {
        alert("Exclusão de conta cancelada.");
        }
    }
    });

    document.addEventListener('DOMContentLoaded', function() {

    const changeNameLink = document.getElementById('changeName');
    const changeEmailLink = document.getElementById('changeEmail');
    const changePasswordLink = document.getElementById('changePassword');
    const changePhoneLink = document.getElementById('changePhone');

    changeNameLink.addEventListener('click', function(event) {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        nameInput.disabled = false;
        nameInput.focus();
    });

    changeEmailLink.addEventListener('click', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        emailInput.disabled = false;
        emailInput.focus();
    });

    changePasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        const passwordInput = document.getElementById('password');
        passwordInput.disabled = false;
        passwordInput.focus();
    });

    changePhoneLink.addEventListener('click', function(event) {
        event.preventDefault();
        const phoneInput = document.getElementById('phone');
        phoneInput.disabled = false;
        phoneInput.focus();
    });
});

// Quando alterar o nome, aparecer no h2
document.addEventListener('DOMContentLoaded', function() {
const editNameLink = document.getElementById('changeName');
const nameField = document.getElementById('name');
const userNameElement = document.getElementById('userName');
const form = document.getElementById('userForm');

// Verificar se há um nome salvo
const savedName = localStorage.getItem('savedName');
if (savedName) {
    userNameElement.textContent = savedName;
}

editNameLink.addEventListener('click', function(event) {
    event.preventDefault();
    editNameLink.style.display = 'none';
    nameField.value = userNameElement.textContent;
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newName = nameField.value;
    userNameElement.textContent = newName;
    // Salvar o nome no local storage
    localStorage.setItem('savedName', newName); 
    editNameLink.style.display = 'inline';
});
});

//Para permitir a alteração da imagem do perfil

document.addEventListener('DOMContentLoaded', function() {
    const imageUpload = document.getElementById('imageUpload');
    const changeImageBtn = document.getElementById('changeImage');
    const profileImage = document.getElementById('profileImage');

    // clicar no botão de alterar imagem
    changeImageBtn.addEventListener('click', function() {
    // Simular o clique no input file
    imageUpload.click();
    });

    // Quando uma nova imagem for selecionada
    imageUpload.addEventListener('change', function(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
        const reader = new FileReader();

        reader.onload = function(event) {
        // Atualizar a fonte da imagem com a nova imagem selecionada
        profileImage.src = event.target.result;
        };

        reader.readAsDataURL(selectedFile);
    }
    });
});


// Para que as informações dentro dos campos permaneçam atualizadas após uma alteração e mesmo após a atualização da página
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const phoneInput = document.getElementById('phone');

function loadUserData() {
    const storedName = localStorage.getItem('userData_name');
    const storedEmail = localStorage.getItem('userData_email');
    const storedPhone = localStorage.getItem('userData_phone');

    if (storedName) {
        nameInput.value = storedName;
    }
    if (storedEmail) {
        emailInput.value = storedEmail;
    }
    if (storedPhone) {
        phoneInput.value = storedPhone;
    }
}

loadUserData();

// Adicionar eventos para alterar e armazenar os dados quando os campos forem alterados
nameInput.addEventListener('input', function() {
    localStorage.setItem('userData_name', nameInput.value);
});

emailInput.addEventListener('input', function() {
    localStorage.setItem('userData_email', emailInput.value);
});

phoneInput.addEventListener('input', function() {
    localStorage.setItem('userData_phone', phoneInput.value);
});

}); 