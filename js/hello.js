const url = "https://openapi.programming-hero.com/api/retro-forum/posts";
fetch(url)
.then( res => res.json())
.then(data => displayPosts(data.posts));
var allPosts = [];
const displayPosts = (data) =>{
    const postContainer = document.getElementById('posts-container');
    for(const post of data){
        allPosts.push(post);
        const newPost = document.createElement("div");
        newPost.classList.add("card", "bg-blue-50", "hover:bg-blue-100", "shadow-xl", "p-12", "my-4");
        newPost.innerHTML = `
        <div class="flex gap-4">
                           <div>
                            <div class="avatar placeholder online">
                                <div class="bg-white text-neutral-content rounded w-24">
                                <img src="${post?.image}" />
                                </div>
                              </div>
                           </div>
                            <div class="mx-4 text-start">
                                <p class="text-gray-500"> <span>#${post?.category}</span> <span class="mx-4">Author :  <span>${post?.author?.name}</span> </span> </p>
                              <h2 class="my-1 text-xl font-semibold">${post?.title}</h2>
                              <p class="text-gray-500 pb-2 border-b-2 border-dashed border-gray-300">${post?.description}</p>
                              <div class="flex justify-between text-gray-500 my-2">
                                <div class="flex gap-8 items-center">
                                    <p><i class="fa-regular fa-envelope"></i> ${post?.comment_count}</p>
                                <p><i class="fa-regular fa-eye"></i>  ${post?.view_count}</p>
                                <p><i class="fa-regular fa-clock"></i>  ${post?.posted_time}min</p>
                                </div>
                                <div>
                                    <button class="btn btn-accent text-white rounded-full" onclick="handleMarked(${post?.id})">
                                        <i class="fa-regular fa-envelope-open"></i>
                                    </button>
                                </div>
                              </div>
                            </div>
                        </div>
        `;
        postContainer.appendChild(newPost);
    }
};

function handleMarked(id){
    console.log("mark handle clicked", id);
    const idChecker = allPosts.filter(n=> n.id === id);
    const newItem = idChecker[0];
    const newTitle = newItem.title;
    const newViewCount = newItem.view_count;
    const titleContainer = document.getElementById('title-container');
    const newTitleCard = document.createElement("div");
    newTitleCard.classList.add("bg-white", "p-2", "rounded-md", "my-4");
    newTitleCard.innerHTML = `
    
    <div class="flex gap-4">
    <div ><h2 class="text-md font-medium">${newTitle}</h2></div>
  <div class="w-36"><p><i class="fa-regular fa-eye"></i> ${newViewCount}</p></div>
  </div>
    `;
    titleContainer.append(newTitleCard)
    
}