const buyBtns =document.querySelectorAll('.js-buy-ticket')
const moadl= document.querySelector('.modal')
function showBuyTicket(){
    moadl.classList.add(open)
}

        for(const buyBtn of buyBtns){
            buyBtn.addEventListener('click', showBuyTicket)
        }