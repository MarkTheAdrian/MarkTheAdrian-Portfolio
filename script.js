document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.dataset.target;

        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show the selected section
        document.getElementById(target).classList.remove('hidden');
    });
});
