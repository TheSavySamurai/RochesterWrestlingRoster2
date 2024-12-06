// Hardcoded CSV data as a string
const csvData = "Name,ClassName,Weight Class,Image\n" +
"Aiden Mullins,Sophomore,,Aiden-Mullins.jpg\n" +
"Amare Harris,Junior,,Amare-Harris.jpg\n" +
"Austin Ashmore,Sophomore,,Austin-Ashmore.jpg\n" +
"Austin Hillard,Freshman,,Austin-Hillard.jpg\n" +
"Benjamin Humbyrd,Freshman,,Benjamin-Humbyrd.jpg\n" +
"Benjamin Mundt,Sophomore,,Benjamin-Mundt.jpg\n" +
"Brandon Jin Logan,Freshman,,Brandon-Jin-Logan.jpg\n" +
"Breandan Roscoe,Senior,,Breandan-Roscoe.jpg\n" +
"Brendan Collins,Freshman,,Brendan-Collins.jpg\n" +
"Cameron Julian,Sophomore,,Cameron-Julian.jpg\n" +
"Carson Dolezel,Freshman,,Carson-Dolezel.jpg\n" +
"Chace Czerwien,Freshman,,Chace-Czerwien.jpg\n" +
"Charles Marten,Sophomore,,Charles-Marten.jpg\n" +
"Christiano Butrus,Senior,,Christiano-Butrus.jpg\n" +
"Christopher Nicholas jr.,Freshman,,Christopher-Nicholas-Jr.jpg\n" +
"Dillon DeWitt,Junior,,Dillon-DeWitt.jpg\n" +
"Edward Rosenquist,Freshman,,Edward-Rosenquist.jpg\n" +
"Fernando Carballo,Sophomore,,Fernando-Carballo.jpg\n" +
"Gael Cruz,Junior,,Gael-Cruz.jpg\n" +
"Grant Laporte,Senior,,Grant-Laporte.jpg\n" +
"Grant Saris,Sophomore,,Grant-Saris.jpg\n" +
"Greyson Miesch,Freshman,,Greyson-Miesch.jpg\n" +
"Hector Contreras,Freshman,,Hector-Contreras.jpg\n" +
"Henry Nabity,Freshman,,Henry-Nabity.jpg\n" +
"Hudson Blake,Junior,,Hudson-Blake.jpg\n" +
"Jack Lower,Senior,,Jack-Lower.jpg\n" +
"Jack Pokorny,Junior,,Jack-Pokorny.jpg\n" +
"Jackson Zook,Sophomore,,Jackson-Zook.jpg\n" +
"Jacob Weaver,Sophomore,,Jacob-Weaver.jpg\n" +
"Jake Welch,Sophomore,,Jake-Welch.jpg\n" +
"Jimmy Rohmann,Junior,,Jimmy-Rohmann.jpg\n" +
"John Marten,Junior,,John-Marten.jpg\n" +
"Jonatan Szawiela,Freshman,,Jonatan-Szawiela.jpg\n" +
"Jonathan Abrishaman,Freshman,,Jonathan-Abrishaman.jpg\n" +
"Julian Abrishaman,Junior,,Julian-Abrishaman.jpg\n" +
"Karma Pillai,Freshman,,Karma-Pillai.jpg\n" +
"Kyle Phillips,Freshman,,Kyle-Phillips.jpg\n" +
"Lucca Vitale,Freshman,,Lucca-Vitale.jpg\n" +
"Lydia Stainbrook,Freshman,,Lydia-Stainbrook.jpg\n" +
"Madison Johnson,Senior,,Madison-Johnson.jpg\n" +
"Maelo Guy Andre Manz Dzabana,Freshman,,Maelo-Guy-Andre-Manz-Dzabana.jpg\n" +
"Myles Metzen,Sophomore,,Myles-Metzen.jpg\n" +
"Nick Aulph,Sophomore,,Nick-Aulph.jpg\n" +
"Nolan Johnson,Sophomore,,Nolan-Johnson.jpg\n" +
"Rares Casian Moroiu,Freshman,,Rares-Casian-Moroiu.jpg\n" +
"Ricardo Quintero,Freshman,,Ricardo-Quintero.jpg\n" +
"Ryan Cannon,Junior,,Ryan-Cannon.jpg\n" +
"Sayani Palomet,Junior,,Sayani-Palomet.jpg\n" +
"Seth Payne,Senior,,Seth-Payne.jpg\n" +
"Tesher Trestyn,Freshman,,Tesher-Trestyn.jpg\n" +
"Vann Terenzi,Freshman,,Vann-Terenzi.jpg\n" +
"Wade Youngblood,Freshman,,Wade-Youngblood.jpg\n" +
"Zoran Khawaja,Junior,,Zoran-Khawaja.jpg";

document.addEventListener('DOMContentLoaded', function () {
    const wrestlers = parseCSV(csvData); // Parse CSV data
    displayData(wrestlers); // Display data

    // Sort button
    const AtoZButton = document.getElementById('AtoZ');
    const ZtoAButton = document.getElementById('ZtoA');
    const sortByGradeBTN = document.getElementById('Grade');
    const showAllBTN = document.getElementById("showAll");

    AtoZButton.addEventListener('click', function() {
        sortWrestlersAtoZ(wrestlers);
        displayData(wrestlers); // Update display after sorting
    });
    ZtoAButton.addEventListener('click', function() {
        sortWrestlersZtoA(wrestlers);
        displayData(wrestlers); // Update display after sorting
    });
    sortByGradeBTN.addEventListener('click', function() {
        sortWrestlersByGrade(wrestlers);
        displayData(wrestlers); // Update display after sorting
    });
    showAllBTN.addEventListener('click', function(){
        var boxes;
            for(i = 0; i < wrestlers.length; i++){
                boxes = document.getElementById("wrestlerBox" + i);
                boxes.style.display = "block";
            }
            sortWrestlersAtoZ(wrestlers);
    });
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
        console.log(wrestlers);
        return wrestlers; // Return the array of wrestlers
    }

    // Function to display data
    function displayData(wrestlers) { // Accept wrestlers as parameter
        const numberOfWrestlers = wrestlers.length;
        for (let i = 0; i < numberOfWrestlers; i++) {
            var tempImageId = 'wrestlerPicture' + i; // ID for the image
            var tempImageName = "images/" + wrestlers[i].image;
            var wrestlerNameId = 'wrestlerName' + i;
            var wrestlerName = document.getElementById(wrestlerNameId);
            if (tempImageId && tempImageName) {
                document.getElementById(tempImageId).src = tempImageName;
                wrestlerName.innerHTML = wrestlers[i].name;
            } else {
                console.error("element not found");
            }
        }
    }

    // Function to sort wrestlers alphabetically by name
    function sortWrestlersAtoZ(wrestlers) {
            for(i = 0; i < wrestlers.length; i++){
                boxes = document.getElementById("wrestlerBox" + i);
                boxes.style.display = "block";
            }
        wrestlers.sort((a, b) => a.name.localeCompare(b.name));
    }
    function sortWrestlersZtoA(wrestlers) {
        var boxes;
            for(i = 0; i < wrestlers.length; i++){
                boxes = document.getElementById("wrestlerBox" + i);
                boxes.style.display = "block";
            }
        wrestlers.sort((a, b) => b.name.localeCompare(a.name));
    }
    function sortWrestlersByGrade(wrestlers) {
        var boxes;
            for(i = 0; i < wrestlers.length; i++){
                boxes = document.getElementById("wrestlerBox" + i);
                boxes.style.display = "block";
            }
        const gradeOrder = {
            'Freshman': 1,
            'Sophomore': 2,
            'Junior': 3,
            'Senior': 4
        };
        wrestlers.sort((a, b) => gradeOrder[a.year] - gradeOrder[b.year]);
    }
    var searchBtn = document.getElementById("searchButton");
    var searchInput = document.getElementById("searchBar");
    searchBtn.addEventListener("click", function() {
        console.log("search btn clicked");
        var searchValue = searchInput.value.toLowerCase();
        var box1 = document.getElementById("wrestlerBox0");
        var boxes;
        var filteredWrestlers = wrestlers.filter(function(wrestler) {
            return wrestler.name.toLowerCase().includes(searchValue);
        });
            displayData(filteredWrestlers);
            for(i = 1; i < wrestlers.length; i++){
                boxes = document.getElementById("wrestlerBox" + i);
                boxes.style.display = "none";
            }
         });
    
    var buttons = document.getElementsByClassName('wrestlerButton');
    var buttonArray = Array.from(buttons);
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
                    wrestlerBox.style.height = "fit-content"; // Set new height
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