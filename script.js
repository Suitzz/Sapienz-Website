document.addEventListener("DOMContentLoaded", function () {
            // Get all social media icons
            var icons = document.querySelectorAll('.wrapper .icon');

            // Attach click event listener to each icon
            icons.forEach(function (icon) {
                // Find the link within the icon
                var link = icon.querySelector('a');

                // Attach the click event listener
                link.addEventListener('click', function (event) {
                    // Get the URL from the link's href attribute
                    var url = link.getAttribute('href');

                    // Open the link in a new tab
                    window.open(url, '_blank');
                });
            });
        });