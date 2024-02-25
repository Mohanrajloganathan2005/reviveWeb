
function darkmode()
{
    document.body.classList.toggle('dark-mode');
}
document.getElementById('darkModeToggle').addEventListener('click',toggleDarkMode);

function validateEmail()
{
    var email= document.getEmailById('emailInput').value;
    var emailRegax = /^[^\s@]+@[^\s@P]+\.[^\s@]+$/;
    if (!emailRegax.test(email))
    {
        document.getElementById('errorMessage').innerText='Please enter a valid email address.';
        return;
    }
    document.getElementById('errorMessage').innerText='';
    console.log('Email submitted: ',email);

}