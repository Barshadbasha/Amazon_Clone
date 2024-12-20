const imgs =document.querySelectorAll('.header-slider ul img');
const prevBtn =document.querySelector('.prev');
const nextBtn =document.querySelector('.next');

let n=0;
function slideChange()
{
    for(let i=0;i<imgs.length;i++)
    {
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';
}

prevBtn.addEventListener('click',(e)=>
{
 if(n>0)
    {
        n--;
    }   
    else
    {
        n=imgs.length-1;

    }
    slideChange();
})

nextBtn.addEventListener('click',(e)=>
{
    if(n < imgs.length - 1)
    {
        n++;
    }
    else
    {
        n=0;
    }
    slideChange();
})

const scrollController=document.querySelectorAll('.prod');
for(const item of scrollController)
{
    item.addEventListener('wheel',(e)=>
    {
        e.preventDefault();
        item.scrollLeft+=e.deltaY;
    })
}


