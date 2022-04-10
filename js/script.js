function store_and_submit(val){
    document.querySelector('#btn').addEventListener('click',(e)=>{
       document.querySelector('#rating_form').style.display="none";
       document.querySelector('.end').style.display="flex";
       document.querySelector('#firstp').innerHTML=" You selected "+val+" out of 5";
    })
}




let all_options=document.querySelectorAll('#nums>div');

for(let i=0;i<all_options.length;i++){
    all_options[i].addEventListener('click',(e)=>{
        store_and_submit(e.target.innerHTML);
    })
}

