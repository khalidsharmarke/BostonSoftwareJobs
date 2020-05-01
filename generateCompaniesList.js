// making an obj like this sucks because i have no way of connecting the DOM obj to this js
// i'd have to create a new instance of this obj once the values in js are changed
// currently only good if you req arr from server and user doesnt directly append data
class CompanyList {
	constructor(arr_of_companies){
		this.listOfCompanies = arr_of_companies;
	}
	addComp(comp_obj){
		this.listOfCompanies.push(comp_obj);
		return this.displayList()
	}
	displayList(){
		 visibleList = document.createElement('div');
		for (let company of this.listOfCompanies){
			let companyTile = document.createElement('div');
			let companyName = document.createElement('span');
			let companyLogo = document.createElement('img');
			let companyBlurb = document.createElement('p');

			companyName.textContent = company['name']
			companyLogo.src = company['logo'];
			companyBlurb. = company['blurb']

			companyTile.append(companyLogo, companyName, companyBlurb)
			visibleList.appendChild(companyTile)
		}
	}
}