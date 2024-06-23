<script type="text/javascript">
    window.onload = function() {
        document.getElementById('temples-styles').removeAttribute('disabled');
        document.getElementById('temples-large-styles').removeAttribute('disabled');
    }
</script>


document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

    const hamburger = document.getElementById('hamburger');
    const navUL = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navUL.classList.toggle('show');
        hamburger.textContent = navUL.classList.contains('show') ? '✖' : '☰';
    });
});
