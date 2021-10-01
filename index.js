function Upload() {  // plus-sqaure
    document.getElementById("Notification_btn").className = "fa fa-bell-o"; // for outline bell icon
    document.getElementById("User_btn").className = "fa fa-user-o"; // for outline user icon
    btn = document.getElementById("Upload_btn");
    btn.className = "fa fa-plus-square";

}
function notification() {     // bell
    document.getElementById("Upload_btn").className = "fa fa-plus-square-o"; // for outline upload icon
    document.getElementById("User_btn").className = "fa fa-user-o";   // for outline user icon
    btn = document.getElementById("Notification_btn");
    btn.className = "fa fa-bell";
}
function User() { //user
    document.getElementById("Notification_btn").className = "fa fa-bell-o";  // for outline notification icon
    document.getElementById("Upload_btn").className = "fa fa-plus-square-o";  // for outline upload icon
    btn = document.getElementById("User_btn");
    btn.className = "fa fa-user";
}

function Like() {
    btn = document.getElementById('Like_btn');
    // btn.toggle("fa-heart")
    document.getElementById('Like_btn').classList.toggle('fa', 'fa-heart');
    // document.getElementById('Like_btn').classList.remove('fa-heart-o');
    btn.classList.replace('fa-heart-o', 'fa-heart');
    console.log('Done');
}

function Comment() {
    btn = document.getElementById("Comment_btn");
    btn.className = "fa fa-comment"
}

let sec = document.getElementById('section');
//pic api
let pic = `https://pixabay.com/api/?key=23653130-27de2e6ea0d3a857738708cab`;
let spinner  = document.getElementById('spinner');
let pgno = 1;
fetch();

let post = '';
function fetch() {
let link = `https://randomuser.me/api/?page=${pgno}&results=10`;
    let xhr = new XMLHttpRequest();

    xhr.open('Get', link, true);

    xhr.onreadystatechange = function () {
        // console.log("ready state" + this.readyState);

        if (this.readyState == 4) {
            spinner.style.display = "none";
        }

    }

    xhr.onload = function () {
        if (this.status === 200) {
        let obj = JSON.parse(this.response);
        // let obj2 = JSON.parse(pic);
        // let picture = obj2.
        // console.log(obj2);
        let loop = obj.results;
        console.log("done");
        console.log(loop);
        loop.forEach(e => {
            let html = `<div class=" Main__content_out sm\:container sm\:m-auto m-1">
            <div class="Main__contents   border-1 border-gray-400 rounded-lg m-auto ">
                <div class="Main__icon flex ">
                    <div class="Main__User__Profile w-7 border-gray-900 flex m-auto ">
                        <img src=${e.picture.medium} alt="">
                        <!-- <i class="fa fa-user-circle-o" style="border: 1px solid red;"></i> -->
                    </div>
                    <div class="Main__User__Contain  w-11/12 pl-2">
                        <div class="Main__User__Name text-sm font-semibold">${e.name.first}</div>
                        <hr class="m-0 w-1/5">
                        <div class="Main__User__Place text-sm">${e.location.country}</div>
                    </div>
                    <div class="Main__User__Option w-11 p-2">
                        <button><i class="fa fa-ellipsis-v"></i></button>
                    </div>
                </div>
                <hr class="m-0">
                <!-- Picture Part -->
                <div class="Main__data ">
                   <img src="https://images.unsplash.com/photo-1632714391952-abd0705ba7f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzA5NzEyMQ&ixlib=rb-1.2.1&q=80&w=1080" alt="">
                    <!-- <img src="https://source.unsplash.com/user/erondu/1500x600" alt=""> -->
                </div>
                <hr id="hr1">


                <!-- Comment Part -->
                <div class="Main__comment h-20">
                    <div class="Main__Comment__Part grid ">
                        <div class="Main__Like"><button class="text-xl" onclick="Like()"><i class="fa fa-heart-o"
                                    id="Like_btn"></i></button></div>
                        <div class="Main__Comment"><button class="text-xl" onclick="Comment()"><i
                                    class="fa fa-comment-o" id="Comment_btn"></i></button></div>
                        <div class="Main__Share"><button class="text-xl"><i class="fa fa-share"></i></button></div>
                        <div class="Main__Save"></div>
                    </div>
                    <div class="Main__Comment_All">
                        this is comment part.
                    </div>
                    <div class="Main__items flex">
                        <div class="Emoji"><i class="fa fa-empire"></i></div>
                        <div class="Main__Input w-2/3 ml-5 ">
                            <input type="text"
                                class="border-t-0 border-r-0 border-l-0 w-full rounded focus:border-green-400 focus:outline-none  focus:ring"
                                name="" placeholder="Comment...">
                        </div>
                        <div class="Main__Save  ml-3">
                            <i class="fa fa-bookmark"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>`;
            post += html;

        });


        sec.innerHTML = post;
    }
    else{
        sec.innerHTML = "Some error occured..."
    }
    }

    xhr.send();
}

function fetchmore() {
    pgno ++;
    let link = `https://randomuser.me/api/?page=${pgno}&results=10`;
        let xhr = new XMLHttpRequest();
    
        xhr.open('Get', link, true);
    
        xhr.onreadystatechange = function () {
            // console.log("ready state" + this.readyState);
    
            if (this.readyState == 4) {
                spinner.style.display = "none";
            }
    
        }
    
        xhr.onload = function () {
            if (this.status === 200) {
            let obj = JSON.parse(this.response);
            // let obj2 = JSON.parse(pic);
            // let picture = obj2.
            // console.log(obj2);
            let loop = obj.results;
            console.log("done");
            console.log(loop);
            let post2 = '';
            loop.forEach(e => {
                let html2 = `<div class=" Main__content_out sm\:container sm\:m-auto m-1">
                <div class="Main__contents   border-1 border-gray-400 rounded-lg m-auto ">
                    <div class="Main__icon flex ">
                        <div class="Main__User__Profile w-7 border-gray-900 flex m-auto ">
                            <img src=${e.picture.medium} alt="">
                            <!-- <i class="fa fa-user-circle-o" style="border: 1px solid red;"></i> -->
                        </div>
                        <div class="Main__User__Contain  w-11/12 pl-2">
                            <div class="Main__User__Name text-sm font-semibold">${e.name.first}</div>
                            <hr class="m-0 w-1/5">
                            <div class="Main__User__Place text-sm">${e.location.country}</div>
                        </div>
                        <div class="Main__User__Option w-11 p-2">
                            <button><i class="fa fa-ellipsis-v"></i></button>
                        </div>
                    </div>
                    <hr class="m-0">
                    <!-- Picture Part -->
                    <div class="Main__data ">
                       <img src="https://images.unsplash.com/photo-1632714391952-abd0705ba7f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzA5NzEyMQ&ixlib=rb-1.2.1&q=80&w=1080" alt="">
                        <!-- <img src="https://source.unsplash.com/user/erondu/1500x600" alt=""> -->
                    </div>
                    <hr id="hr1">
    
    
                    <!-- Comment Part -->
                    <div class="Main__comment h-20">
                        <div class="Main__Comment__Part grid ">
                            <div class="Main__Like"><button class="text-xl" onclick="Like()"><i class="fa fa-heart-o"
                                        id="Like_btn"></i></button></div>
                            <div class="Main__Comment"><button class="text-xl" onclick="Comment()"><i
                                        class="fa fa-comment-o" id="Comment_btn"></i></button></div>
                            <div class="Main__Share"><button class="text-xl"><i class="fa fa-share"></i></button></div>
                            <div class="Main__Save"></div>
                        </div>
                        <div class="Main__Comment_All">
                            this is comment part.
                        </div>
                        <div class="Main__items flex">
                            <div class="Emoji"><i class="fa fa-empire"></i></div>
                            <div class="Main__Input w-2/3 ml-5 ">
                                <input type="text"
                                    class="border-t-0 border-r-0 border-l-0 w-full rounded focus:border-green-400 focus:outline-none  focus:ring"
                                    name="" placeholder="Comment...">
                            </div>
                            <div class="Main__Save  ml-3">
                                <i class="fa fa-bookmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>`;
                post2 += html2;
    
            });
    
            post.append(post2);
            
        }
        else{
            sec.innerHTML = "Some error occured..."
        }
        }
    
        xhr.send();
}

window.addEventListener('scroll', () => {
    if (scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        console.log('i am at bottom');
       document.getElementById('endspinner').classList.add('spinner-border');
        console.log('spinner added');
        fetch();
    }
})
