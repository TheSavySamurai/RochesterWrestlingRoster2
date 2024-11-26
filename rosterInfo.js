// Hardcoded CSV data as a string
const csvData = `Name,ClassName,Weight Class,Image
Adam Glinski,,,"Adam-Glinski.JPG"
Aiden Mullins,Freshman,,Aiden-Mullins.JPG
Amelia Meier,Sophomore,,Amelia-Meier.JPG
Anderson Wilcox,Sophomore,,Anderson-Wilcox.JPG
Austin Ashmore,Freshman,,Austin-Ashmore.JPG
Breandan Roscoe,,,"Breandan-Roscoe.JPG"
Caden Webb,Sophomore,,Caden-Webb.JPG
Cam Williams,,,"Cam-Williams.JPG"
Camoran Juliah,Freshman,,Camoran-Juliah.JPG
Christiano Butress,,,"Christiano-Butress.JPG"
Damian Yburra,,,"Damian-Yburra.JPG"
Dillon DeWitt,Sophomore,,Dillon-DeWitt.JPG
Gabe Gillum,,,"Gabe-Gillum.JPG"
Gael Cruz,Sophomore,,Gael-Cruz.JPG
Grant Laporte,Junior,,Grant-Laporte.JPG
Griffin Merchant,,,"Griffin-Merchant.JPG"
Hudson Blake,Sophomore,,Hudson-Blake.JPG
Ian Barbee,Sophomore,,Ian-Barbee.JPG
JT Kissinger,Freshman,,JT-Kissinger.JPG
Jack Lower,Junior,,Jack-Lower.JPG
Jack Pokorney,Sophomore,,Jack-Pokorney.JPG
Jackson Zook,Freshman,,Jackson-Zook.JPG
Jimmy Rohman,Sophomore,,Jimmy-Rohman.JPG
John Marten,Freshman,,John-Marten.JPG
Julian Abrishaman,Sophomore,,Julian-Abrishaman.JPG
Katie Carpenter,Sophomore,,Katie-Carpenter.JPG
Keagan Pfiffer,Freshman,,Keagan-Pfiffer.JPG
Logan Dembsey,Sophomore,,Logan-Dembsey.JPG
Mark Jones,Sophomore,,Mark-Jones.JPG
Mathias Hernandez,Freshman,,Mathias-Hernandez.JPG
Miles Metzen,Freshman,,Miles-Metzen.JPG
Ryan Cannon,Sophomore,,Ryan-Cannon.JPG
Santiago De La Rosa,Freshman,,Santiago-De-La-Rosa.JPG
Sayani Palomet,Sophomore,,Sayani-Palomet.JPG
Seth Payne,Junior,,Seth-Payne.JPG
Stew Kissinger,,,"Stew-Kissinger.JPG"
Tristan Hiatt,,,"Tristan-Hiatt.JPG"
Jacob Weaver,Freshman,,Weaver-Beaver.JPG
Zach Ming,Sophomore,,Zach-Ming.JPG
Zoran Khawnja,Sophomore,,Zoran-Khawnja.JPG`;

document.addEventListener('DOMContentLoaded', function() {
    const wrestlers = parseCSV(csvData); // Parse CSV data
    displayData(wrestlers); // Display data
    var buttons = document.getElementsByClassName('wrestlerButton');
    var buttonArray = Array.from(buttons);
    // Function to parse CSV data
    function parseCSV(text) {
        const rows = text.split('\n');
        const wrestlers = []; // Array to hold wrestler objects

        // Skip the header row and iterate through the data
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i].split(',');
            if (row[0]) { // Check if the name field is not empty
                wrestlers.push({
                    name: row[0], // Name of the wrestler
                    year: row[1] || 'N/A', // Class year
                    weight: row[2] || 'N/A', // Weight class
                    image: row[3] || "rochesterFalcon.JPG"// Image filename
                });
            }
        }
        return wrestlers; // Return the array of wrestlers
    }

    // Function to display data
    function displayData() {
        console.log(wrestlers);
        const numberOfWrestlers = wrestlers.length;
        for (let i = 0; i < numberOfWrestlers; i++) {
            var tempImageId = 'wrestlerPicture' + i; // ID for the image
            if (tempImageId) { // Check if the element exists
                document.getElementById(tempImageId).src = wrestlers[i].image; // Set the source of the image
                console.log(tempImageId.src);
            }
    
            // Additional code to set wrestler info...
        }
    }

    buttonArray.forEach(function(button) {
        var originalHeight = null; // Original height
        var isExpanded = false; // Flag to track if the box is expanded

        button.addEventListener('click', function(event) {
            var clickedButtonId = this.id;
            var wrestlerNumber = clickedButtonId.replace('Button', ''); // Get the wrestler number
            var wrestlerBoxId = 'wrestlerBox' + wrestlerNumber;
            var wrestlerBox = document.getElementById(wrestlerBoxId);
            var wrestlerInfoId = 'wrestlerInfo' + wrestlerNumber;
            var wrestlerInfo = document.getElementById(wrestlerInfoId);
            var wrestlerImageId = 'wrestlerImage' + wrestlerNumber;
            var wrestlerImage = document.getElementById(wrestlerImageId);
            if (wrestlerBox) {
                console.log('Clicked button ID:', clickedButtonId);
                console.log('Corresponding wrestler box ID:', wrestlerBox.id);
                
                // Get the current height of the wrestler box
                var currentHeight = wrestlerBox.clientHeight; // Get current height in pixels
                
                // Access the wrestler data using the wrestlerNumber
                const wrestler = wrestlers[wrestlerNumber]; // Get the wrestler object
                if (!isExpanded) {
                    // Store the original height on the first click
                    if (originalHeight === null) {
                        originalHeight = currentHeight; // Set original height
                    }
                    // Increase height by 40%
                    var newHeight = originalHeight + (originalHeight * 0.4);
                    wrestlerBox.style.height = newHeight + 'px'; // Set new height
                    
                    // Display wrestler info
                    wrestlerInfo.innerHTML = `Wrestler Name: ${wrestler.name}<br>Year: ${wrestler.year}<br>Weight: ${wrestler.weight}`;
                    
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
