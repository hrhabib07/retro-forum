const url2 = "https://openapi.programming-hero.com/api/retro-forum/latest-posts";
fetch(url2)
.then(res=> res.json())
.then(data=> displayData(data));

function displayData (data){
    const latestPostsContainer = document.getElementById("latest-posts-container");
    data.forEach(element => {


        
const newLatestPost = document.createElement("div");
newLatestPost.classList.add("card", "bg-base-100", "shadow-xl");
newLatestPost.innerHTML = `
<figure class="px-10 pt-10">
<img src="${element.cover_image}" alt="Shoes" class="rounded-xl" />
</figure>
<div class="card-body">
  <p class="text-gray-500"> <i class="fa-regular fa-calendar text-left mr-2"></i> ${element?.author?.posted_date || "published date is not available"}</p>
  <h2 class="card-title">${element?.title}</h2>
  <p class="text-gray-500"> ${element?.description}</p>
  <div class="flex gap-4 my-4">
      <div><img class="w-16 rounded-full" src="${element.profile_image}" alt=""></div>
      <div>
          <h2 class="text-lg font-semibold">Cameron Williamson</h2>
          <p class="text-gray-500">${element?.author?.designation || "Unknown"}</p>
      </div>
  </div>
</div>
`;
latestPostsContainer.appendChild(newLatestPost);


        console.log(element);
    });
}
