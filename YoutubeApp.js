window.addEventListener("load",start,false);
function start(){
    $('#video').html(` <embed width="560" height="380"
src="https://www.youtube.com/v/rJesac0_Ftw&t=1685s" type="application/x-shockwave-flash">`);
    
    resultsLoop();
for(i=1 ; i <7;i++ ){
    document.getElementById("video" + i).addEventListener("click",changeVideo,false);
}
}
function resultsLoop(){
    
                $('main').html(`
                <article id ="video1">
                    <img src="https://i.ytimg.com/vi/rJesac0_Ftw/mqdefault.jpg" alt="" class="thumb">
                    <div class="details"></div>
                    <h4>Title</h4>
                    <p>I am a description.</p>
                </article>
                <article id ="video2">
                    <img src="https://img.youtube.com/vi/k32voqQhODc/mqdefault.jpg" alt=""  class="thumb">
                    <div class="details"></div>
                    <h4>Title</h4>
                    <p>I am a description.</p>
                </article>
                <article id ="video3">
                    <img src="https://i.ytimg.com/vi/zPHerhks2Vg/mqdefault.jpg" alt=""  class="thumb">
                    <div class="details"></div>
                    <h4>Title</h4>
                    <p>I am a description.</p>
                </article>
                <article id ="video4">
                    <img src="https://i.ytimg.com/vi/rlLuL3jYLvA/mqdefault.jpg" alt=""  class="thumb">
                    <div class="details"></div>
                    <h4>Title</h4>
                    <p>I am a description.</p>
                </article>
                <article id ="video5">
                    <img src="https://i.ytimg.com/vi/CRlGDDprdOQ/mqdefault.jpg" alt=""  class="thumb">
                    <div class="details"></div>
                    <h4>Title</h4>
                    <p>I am a description.</p>
                </article>
                <article id ="video6">
                    <img src="https://i.ytimg.com/vi/wSNa5b1mS5Y/mqdefault.jpg" alt=""  class="thumb">
                    <div class="details"></div>
                    <h4>Title</h4>
                    <p>I am a description.</p>
                </article>
    `);
}
function changeVideo(e){
    switch(e.target.getAttribute("id")){
        case "video1": $('#video').html(` <embed width="560" height="380"
        src="https://www.youtube.com/v/rJesac0_Ftw&t=1685s" type="application/x-shockwave-flash">`);
        break;
        case "video2": $('#video').html(` <embed width="560" height="380"
        src="https://www.youtube.com/v/k32voqQhODc&list=PLdRJvSd1Rc5OxhsBCQnzyhxCqWHN-NYKI&index=3&t=1s" type="application/x-shockwave-flash">`);
        break;
        case "video3":$('#video').html(` <embed width="560" height="380"
        src="https://www.youtube.com/v/zPHerhks2Vg&list=PLdRJvSd1Rc5OxhsBCQnzyhxCqWHN-NYKI&index=3" type="application/x-shockwave-flash">`);
        break; 
        case "video4":
    $('#video').html(` <embed width="560" height="380"
    src="https://www.youtube.com/v/rlLuL3jYLvA&list=PLdRJvSd1Rc5OxhsBCQnzyhxCqWHN-NYKI&index=4" type="application/x-shockwave-flash">`);
        break;
        case "video5": $('#video').html(` <embed width="560" height="380"
        src="https://www.youtube.com/v/CRlGDDprdOQ&list=PLdRJvSd1Rc5OxhsBCQnzyhxCqWHN-NYKI&index=5" type="application/x-shockwave-flash">`);
        break;
        case "video6":$('#video').html(` <embed width="560" height="380"
        src="https://www.youtube.com/v/wSNa5b1mS5Y&list=PLdRJvSd1Rc5OxhsBCQnzyhxCqWHN-NYKI&index=6" type="application/x-shockwave-flash">`);
        break; 
    }}