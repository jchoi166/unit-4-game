
let total = 0
let goal = Math.floor(Math.random()*80)+20
    $('.goal').text(goal)
    $('.total').text(total)

    for (let i = 1; i < 4; i++){
        $('.crystalRow').append(`
        <div class = "col-md-4 text-center">
            <img class = "crystal" id = "crystal${i}" data-crystal = ${Math.floor(Math.random()*20) + 1} src = "assets/images/crystal${i}.png">
        </div>
        `)
    }

    $('.crystal').on('click' , function(){
        let crystalValue = $(this).attr('data-crystal')
        total += parseInt(crystalValue)
        console.log(total)
        $('.total').text(total)
        gameStatus()
        })

       function gameStatus(){

            if (goal === total){
                alert ('You Win!')
                reset()

            }
            else if (total > goal){
                alert ('you Lose!')
                reset()
            }            
       }

        function reset(){
            $('#crystal1').attr('data-crystal', Math.floor(Math.random() *20) + 1 )
            $('#crystal2').attr('data-crystal', Math.floor(Math.random() *20) + 1 )
            $('#crystal3').attr('data-crystal', Math.floor(Math.random() *20) + 1 )
            total = 0 
            $('.total').text(total)
            goal = Math.floor(Math.random()*80)+20
            $('.goal').text(goal)
        }

        
   
        