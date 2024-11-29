// Hardcoded CSV data as a string
const csvData = "Name,ClassName,Weight Class,Image\n" +
"Adam Glinski,Junior,,Adam-Glinski.JPG\n" +
"Aiden Mullins,Freshman,,Aiden-Mullins.JPG\n" +
"Amelia Meier,Sophomore,,Amelia-Meier.JPG\n" +
"Anderson Wilcox,Sophomore,,Anderson-Wilcox.JPG\n" +
"Austin Ashmore,Freshman,,Austin-Ashmore.JPG\n" +
"Breandan Roscoe,Junior,,Breandan-Roscoe.JPG\n" +
"Caden Webb,Sophomore,,Caden-Webb.JPG\n" +
"Cam Williams,Senior,,Cam-Williams.JPG\n" +
"Camoran Juliah,Freshman,,Camoran-Juliah.JPG\n" +
"Christiano Butress,Junior,,Christiano-Butress.JPG\n" +
"Damian Yburra,Senior,,Damian-Yburra.JPG\n" +
"Dillon DeWitt,Sophomore,,\n" +
"Gabe Gillum,Freshman,,Gabe-Gillum.JPG\n" +
"Gael Cruz,Sophomore,,Gael-Cruz.JPG\n" +
"Grant Laporte,Junior,,Grant-Laporte.JPG\n" +
"Griffin Merchant,Senior,,Griffin-Merchant.JPG\n" +
"Hudson Blake,Sophomore,,Hudson-Blake.JPG\n" +
"Ian Barbee,Sophomore,,Ian-Barbee.JPG\n" +
"JT Kissinger,Freshman,,JT-Kissinger.JPG\n" +
"Jack Lower,Junior,,Jack-Lower.JPG\n" +
"Jack Pokorney,Sophomore,,Jack-Pokorney.JPG\n" +
"Jackson Zook,Freshman,,Jackson-Zook.JPG\n" +
"Jimmy Rohman,Sophomore,,Jimmy-Rohman.JPG\n" +
"John Marten,Freshman,,John-Marten.JPG\n" +
"Julian Abrishaman,Sophomore,,Julian-Abrishaman.JPG\n" +
"Katie Carpenter,Sophomore,,Katie-Carpenter.JPG\n" +
"Keagan Pfiffer,Freshman,,Keagan-Pfiffer.JPG\n" +
"Logan Dembsey,Sophomore,,Logan-Dembsey.JPG\n" +
"Mark Jones,Sophomore,,Mark-Jones.JPG\n" +
"Mathias Hernandez,Freshman,,Mathias-Hernandez.JPG\n" +
"Miles Metzen,Freshman,,Miles-Metzen.JPG\n" +
"Ryan Cannon,Sophomore,,Ryan-Cannon.JPG\n" +
"Santiago De La Rosa,Freshman,,Santiago-De-La-Rosa.JPG\n" +
"Sayani Palomet,Sophomore,,Sayani-Palomet.JPG\n" +
"Seth Payne,Junior,,Seth-Payne.JPG\n" +
"Stew Kissinger,Senior,,Stew-Kissinger.JPG\n" +
"Tristan Hiatt,Junior,,Tristan-Hiatt.JPG\n" +
"Weaver Beaver,Freshman,,Weaver-Beaver.JPG\n" +
"Zach Ming,Sophomore,,Zach-Ming.JPG\n" +
"Zoran Khawnja,Sophomore,,Zoran-Khawnja.JPG";
document.addEventListener('DOMContentLoaded', function () {
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
                    image: row[3] || "rochesterFalcon.JPG" // Image filename
                });
            }
        }
        return wrestlers; // Return the array of wrestlers
    }
    //function to sort wrestlers
    function sortWrestlers(){
        let wrestlerNames= wrestlers.name;
        console.log(wrestlerNames);
    }
    // Function to display data
    function displayData(wrestlers) { // Accept wrestlers as parameter
        const numberOfWrestlers = wrestlers.length;
        for (let i = 0; i < numberOfWrestlers; i++) {
            var tempImageId = 'wrestlerPicture' + i; // ID for the image
            var tempImageName = "images/" + wrestlers[i].image;
            var wrestlerNameId= 'wrestlerName' + i;
            var wrestlerName=document.getElementById(wrestlerNameId);
            if (tempImageId && tempImageName) {
                document.getElementById(tempImageId).src = tempImageName;
                wrestlerName.innerHTML = wrestlers[i].name;
            } else{
                console.error("element not found");
            }
        }
    }
    // Call displayData with wrestlers
    displayData(wrestlers); // Pass wrestlers to displayData
    buttonArray.forEach(function (button) {
        var originalHeight = null; // Original height
        var isExpanded = false; // Flag to track if the box is expanded
        button.addEventListener('click', function (event) {
            var clickedButtonId = this.id;
            var wrestlerNumber = clickedButtonId.replace('Button', ''); // Get the wrestler number
            
            var wrestlerBoxId = 'wrestlerBox' + wrestlerNumber;
            var wrestlerBox = document.getElementById(wrestlerBoxId);
            var wrestlerInfoId = 'wrestlerInfo' + wrestlerNumber;
            var wrestlerInfo = document.getElementById(wrestlerInfoId);
            var wrestlerImageId = 'wrestlerImage' + wrestlerNumber;
            var wrestlerImage = document.getElementById(wrestlerImageId);
            if (wrestlerBox) {
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
                    wrestlerInfo.innerHTML = `Year: ${wrestler.year}<br>Weight: ${wrestler.weight}`;
                    wrestlerInfo.classList.add('show'); // Show info
                    isExpanded = true; // Mark as expanded
                } else {
                    // Revert back to original height
                    wrestlerInfo.classList.remove('show'); // Hide info
                    wrestlerBox.style.height = originalHeight + 'px'; // Set back to original height
                    isExpanded = false; // Mark as not expanded
                }
            } else {
                console.error('No matching wrestler box found for ID:', wrestlerBoxId);
            }
        });
    });
});
//sort wrestlers
