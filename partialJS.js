// May need to declare one or more other variable(s) 

// Create array of company objects
let companies = [
    new Company('LogMeIn',
        'http://www.codesquad-test.org/bootcamp/LogMeIn_logo.png',
        "Simplifying how people interact with each other and the world around them to drive meaningful insight, deeper relationships and better outcomes for all has helped LogMeIn grow to become one of the world's top 10 SaaS companies with a leadership position in every one of our markets."),

    new Company('TripAdvisor',
        'https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg',
        'Tripadvisor helps nearly a half a billion travelers each month make every trip their best trip. Use the Tripadvisor site and app to browse hundreds of millions of reviews and opinions of accommodations, restaurants, experiences, airlines and cruises.'),

    new Company('Agero',
        'https://www.agero.com/sites/all/themes/agero/images/logo_header.png',
        "Agero's mission is to transform the entire driving experience through an unmatched combination of innovative technology and human-powered solutions.")
];

// Create object constructor for new company
function Company(name, logo, blurb) {
    this.name = name;
    this.logo = logo;
    this.blurb = blurb;
}

// Listen for user click on "Display list" button
document.querySelector('#displayAll').addEventListener('click', function() {
    displayAll();
});

function displayAll() {
    // Loop through array & create new node(s) for each company (or concatenate long string of HTML)
    let targetContainer = document.getElementById('compList');
    while (targetContainer.firstChild) {
        targetContainer.firstChild.remove()
    }
    for (let comp of companies) {
        let compContainer = document.createElement('div');
        let compImage = document.createElement('img');
        let compName = document.createElement('h3');
        let compBlurb = document.createElement('div');

        compImage.src = comp['logo'];
        compName.textContent = comp['name'];
        compBlurb.textContent = comp['blurb'];

        compImage.className = 'company-image'

        compContainer.className = 'imgCard';

        compContainer.append(compImage, document.createElement('br'), compName, compBlurb, document.createElement('br'));
        targetContainer.appendChild(compContainer)
    }
    // Display company names, logos and descriptions on page
}

// Listen for user click on "Add company" button
// {
// Get company info from user
let compName = document.querySelector('#compName').value;

// Create a new company object
document.getElementById('submitComp').addEventListener('click', function(e) {
    e.preventDefault();
    let name = document.getElementById('compName').value;
    document.getElementById('compName').value = ''
    let logo = document.getElementById('compLogo').value;
    document.getElementById('compLogo').value = ''
    let blurb = document.getElementById('compBlurb').value;
    document.getElementById('compBlurb').value = ''

    let addedComp = new Company(name, logo, blurb);

    companies.push(addedComp);
    console.log(companies)
})
// Add the new object to the companies array

// Display all companies
// }

// Listen for user click on "Clear" button
// {
// Set value of text inputs to empty strings
// }

// BONUS: Listen for user click on "Alphabetize" button
// {}

function compare(a, b) {
    // create new variables to isolate the name keys

    // compare two companies from the array; if a is greater (i.e. closer to end of alphabet), comparison variable = 1, if b is greater, comparison = -1

}