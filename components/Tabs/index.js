// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
.get('https://lambda-times-backend.herokuapp.com/topics') //get data from api here
.then(works => {
    works.data.topics.forEach(newElements =>{ //used forEach method to grab all data that is needed
        const freshDivs = document.createElement('div');
        freshDivs.classList.add('tab');
        freshDivs.textContent = newElements;
        const newTabs = document.querySelector('.topics'); //was able use a query selector for the topics.
        newTabs.append(freshDivs);
    });
    })
    .catch(fail =>{
        console.log(fail)
    });

