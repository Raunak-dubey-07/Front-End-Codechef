let Username = "raunak_dubey";
let CodechefApi = "https://codechef-api.vercel.app/";
const main = document.querySelector('#main');
const getUser = async (Username) => {
    try {
        main.innerHTML = "";
        let g = document.querySelector('.error');
        g.innerHTML = "";
        const res = await fetch(CodechefApi + Username);
        if (!res.ok) {
            throw new Error(`Error: ${res.status} - User not found`);
        }
        const data = await res.json();
        console.log(data);
        let arr = data.ratingData;
        let n = arr.length;
        function openprofile() {
            window.location.href = 'https://www.codechef.com/users/' + Username;
        };
        const card = `
            <div class="container">
                <div class="profileInfo">
                    <img class="profilimg" src="${data.profile}">
                    <h4>${data.name}</h4>
                    <div class="countryinfo">
                        <h5>${data.countryName}</h5>
                        <img class="flagimage" src="${data.countryFlag}">
                    </div>
                    <div class="star1">
                        <h3 class="star">${data.stars}</h3>
                    </div>
                    <div style="height: 1px; background-color:black; width: 100%;"></div>
                </div>
                <div class="info">
                    <div class="global">
                        <h4 class="h3">Current Rating </h4>
                        <div class="rank">
                            <h4>${data.currentRating}</h4>
                        </div>
                    </div>
                    <div class="global">
                        <div class="h3">
                            <h4> Country Rank </h4>
                        </div>
                        <div class="rank">
                            <h4>${data.countryRank}</h4>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <div class="global">
                        <h4 class="h3">Highest Rating </h4>
                        <div class="rank">
                            <h4>${data.highestRating}</h4>
                        </div>
                    </div>
                    <div class="global">
                        <div class="h3">
                            <h4>Global Rank &nbsp;&nbsp;&nbsp; </h4>
                        </div>
                        <div class="rank">
                            <h4>${data.globalRank}</h4>
                        </div>
                    </div>
                </div>
                <div style="height: 1px; background-color: black; width: 100%;"></div>
                <h2 style="text-align: center;">Last 3 Contests</h2>
                <div class="past">
                    <div class="contests" style="text-align: center;">
                        <div class="p">
                            <p>${arr[n - 1].name} </p>
                        </div>
                        <div class="c">
                            <div class="pastcontests">
                                <h5>Rank - </h5>
                                <h5 style="font-weight: bold;">${arr[n - 1].rank}</h5>
                            </div>
                            <div class="pastcontests">
                                <h5>Rating - </h5>
                                <h5 style="font-weight: bold;">${arr[n - 1].rating}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="contests" style="text-align: center;">
                        <div class="p">
                            <p>${arr[n - 2].name}</p>
                        </div>
                        <div class="c">
                            <div class="pastcontests">
                                <h5>Rank - </h5>
                                <h5 style="font-weight: bold;">${arr[n - 2].rank}</h5>
                            </div>
                            <div class="pastcontests">
                                <h5>Rating - </h5>
                                <h5 style="font-weight: bold;">${arr[n - 2].rating}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="contests" style="text-align: center;">
                        <div class="p">
                            <p>${arr[n - 3].name}</p>
                        </div>
                        <div class="c">
                            <div class="pastcontests">
                                <h5>Rank - </h5>
                                <h5 style="font-weight: bold;">${arr[n - 3].rank}</h5>
                            </div>
                            <div class="pastcontests">
                                <h5>Rating - </h5>
                                <h5 style="font-weight: bold;">${arr[n - 3].rating}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="view">
                        <button class="viewbutton">View Profile</button>
                    </div>
                </div>
            </div>`
        main.innerHTML = card;
        const button = document.querySelector('.viewbutton');
        button.addEventListener("click", () => {
            window.open("https://www.codechef.com/users/" + Username, "_blank");
        });
    }
    catch (error) {
        let e = document.querySelector('.error');
        e.innerHTML = "User not found or an error occurred.";
        console.error(error.message);
    }
}
let searchbtn = document.querySelector('.search');
searchbtn.addEventListener("click", () => {
    let search = document.querySelector('input');
    let value = search.value;
    search.value = "";
    getUser(value);
});