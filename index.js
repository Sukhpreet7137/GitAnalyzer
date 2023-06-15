const username1 = document.querySelector(".input-username");
const formcontainer = document.querySelector(".form-container");
let profilepic=document.querySelector("[profile-pic]");
let biodata=document.querySelector("[bio-data]");
let usnam =document.querySelector("[nam]");
let githubprofile=document.querySelector("[github-profile]");
let followerscnt=document.querySelector("[follow]");
let followingcnt=document.querySelector("[followi]");
let reposcount=document.querySelector("[repo]");
let currloc=document.querySelector("[loc]");
let bloglink=document.querySelector("[blog]");
let twitteracc=document.querySelector("[twitter]");
let currcompany=document.querySelector("[company]");
let joindate=document.querySelector("[joined]");
let lightmode=document.querySelector(".light");
let darkmode=document.querySelector(".dark");
let wrap=document.querySelector(".wrapper");
let formcont=document.querySelector(".form-container");
let prcont=document.querySelector(".profile-content");
let inputt=document.querySelector("#input");
let mcont=document.querySelector(".mode-container");
let innercontent=document.querySelector(".cnt");
let grid=document.querySelector(".grid");

let username="Sukhpreet7137";
getgithubinfo();
formcontainer.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(username1.value);
    username = username1.value;

    getgithubinfo();
});

async function getgithubinfo() {
    try {
        console.log(username);
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        if(data?.message=='Not Found') throw "Not Found";
        rendergithubinfo(data);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

function rendergithubinfo(messageinfo){
    let image=messageinfo?.avatar_url;
    let bio=messageinfo?.bio;
    let followers=messageinfo?.followers;
    let following=messageinfo?.following;
    let repos=messageinfo?.public_repos;
    let url=messageinfo?.html_url;
    let name=messageinfo?.name;
    let location1=messageinfo?.location;
    let join_date=messageinfo?.created_at;
    let twitterusername=messageinfo?.twitter_username;
    let company=messageinfo?.company;
    let blog=messageinfo?.blog;
    // console.log(usnam);
    profilepic.src=image;
    biodata.innerText=bio;
    githubprofile.href=url;
    githubprofile.innerText="@"+name;
    usnam.innerText=name;
    joindate.innerText="Joined "+join_date.slice(0,10);
    followerscnt.innerText=followers;
    followingcnt.innerText=following;
    reposcount.innerText=repos;
    currloc.innerText=location1;
    console.log(blog);
    if(blog===""){
        bloglink.href="Not available";
        bloglink.innerText="Not available";
    }
    else{
        bloglink.href=blog;
        bloglink.innerText=name+".bio";
    }
    if(twitterusername===null){
        twitteracc.href="Not available";
        twitteracc.innerText="Not available";
    }
    else{
        twitteracc.href=twitterusername;
        twitteracc.innerText=twitterusername;
    }
    if(company==null){
    currcompany.innerText="Not available";
    }
    else{
        currcompany.innerText=company;
    }
}
let darkmode1=function(){ 
    lightmode.classList.remove("active");
    darkmode.classList.remove("active1");
    darkmode.classList.add("active");
    lightmode.classList.add("active1");
    wrap.style.backgroundColor="rgb(20,29,47)";
    formcont.style.backgroundColor="rgb(30,42,71)";
    prcont.style.backgroundColor="rgb(30,42,71)";
    prcont.style.color="white";
    mcont.style.color="white";
    biodata.style.color="white";
    inputt.style.color="white";
    innercontent.style.backgroundColor="#141d2f";
    grid.style.color="white";
}
let lightmode1=function(){
    darkmode.classList.remove("active");
    lightmode.classList.remove("active1");
    darkmode.classList.add("active1");
    lightmode.classList.add("active");
    wrap.style.backgroundColor="#f6f8ff";
    formcont.style.backgroundColor="#fefefe";
    prcont.style.backgroundColor="#fefefe";
    prcont.style.color="black";
    mcont.style.color="white";
    mcont.style.color="#4b6a9b";
    biodata.style.color="#4b6a9b";
    inputt.style.color="#4b6a9b";
    innercontent.style.backgroundColor="#f6f8ff";
    grid.style.color="#4b6a9b";
}