document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.getElementsByClassName('wrestlerButton');
    var buttonArray = Array.from(buttons);
    
    buttonArray.forEach(function(button) {
        var originalHeight = null; // Original height
        var isExpanded = false; // Flag to track if the box is expanded

        button.addEventListener('click', function(event) {
            var clickedButtonId = this.id;
            var wrestlerNumber = clickedButtonId.replace('Button', '');
            var wrestlerBoxId = 'wrestlerBox' + wrestlerNumber;
            var wrestlerBox = document.getElementById(wrestlerBoxId);
            var wrestlerInfoId = 'wrestlerInfo' + wrestlerNumber;
            var wrestlerInfo = document.getElementById(wrestlerInfoId);
            
            if (wrestlerBox) {
                console.log('Clicked button ID:', clickedButtonId);
                console.log('Corresponding wrestler box ID:', wrestlerBox.id);
                
                // Get the current height of the wrestler box
                var currentHeight = wrestlerBox.clientHeight; // Get current height in pixels
                
                if (!isExpanded) {
                    // Store the original height on the first click
                    if (originalHeight === null) {
                        originalHeight = currentHeight; // Set original height
                    }
                    // Increase height by 40%
                    var newHeight = originalHeight + (originalHeight * 0.4);
                    wrestlerBox.style.height = newHeight + 'px'; // Set new height
                    wrestlerInfo.classList.add('show'); // Show info
                    console.log('New height:', wrestlerBox.clientHeight);
                    isExpanded = true; // Mark as expanded
                } else {
                    // Revert back to original height
                    wrestlerInfo.classList.remove('show'); // Hide info
                    wrestlerBox.style.height = originalHeight + 'px'; // Set back to original height
                    console.log('Reverted to original height:', wrestlerBox.clientHeight);
                    isExpanded = false; // Mark as not expanded
                }
            } else {
                console.error('No matching wrestler box found for ID:', wrestlerBoxId);
            }
        });
    });
});