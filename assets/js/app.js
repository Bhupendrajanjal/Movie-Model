var cl=console.log;
const showModalBtn = document.getElementById("showModalBtn");
const backdrop = document.getElementById("backdrop")
const ourModal = document.getElementById('ourModal')
const modelClose =[...document.querySelectorAll('.modelClose')]
const moviForm = document.getElementById('movieform')
const Tiltecontrol = document.getElementById('Tilte')
const Urlcontrol = document.getElementById('Url')
const Ratingcontrol = document.getElementById('Rating')
const moviecontainer = document.getElementById('moviecontainer')

const onModalHandler=()=>{
   backdrop.classList.toggle('active')
   ourModal.classList.toggle('active')
}

const moviArray=[{
    "Tilte": "Sauth Block baster",
    "url": "https://i.ytimg.com/vi/mu29scuty1k/maxresdefault.jpg",
    "Rating": "7/8"
}];

    const templeting =(arr)=>{
        
        var result =''
        arr.forEach(movie=>{
            result+=`
            <div class="col-md-4 py-5">
                <div class="card">
                    <div class="card-header">
                        <h5>${movie.Tilte}</h5>
                    </div>
                    <div class="card-body">
                        <figure class="imgHolder">
                            <img class="img-fluid" src="${movie.url}" alt="">
                                <figcaption>
                                    <p> Rating ${movie.Rating}</p>
                                </figcaption>
                        </figure>  
                    </div>


                
                    <div class="card-footer">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
        </div>
            `
        })

        moviecontainer.innerHTML=result;
    }

    templeting(moviArray)



const hidemodel=()=>{
    backdrop.classList.remove('active')
    ourModal.classList.remove('active')
}
const onMovieSubmit=(eve)=>{
    eve.preventDefault();
    let movieobject={
        Tilte : Tiltecontrol.value,
        url : Urlcontrol.value,
        Rating : Ratingcontrol.value,
    }
    
    moviArray.unshift(movieobject)
    templeting(moviArray)
    eve.target.reset();
    cl(moviArray)
    onModalHandler()

}
moviForm.addEventListener("submit",onMovieSubmit)

backdrop.addEventListener("click",hidemodel)

showModalBtn.addEventListener('click',onModalHandler)
modelClose.forEach(ele=>{
    ele.addEventListener('click',()=>{
        // alert('model Closed')
        // backdrop.classList.remove('active')
        // ourModal.classList.remove('active')
        onModalHandler()
    })
})