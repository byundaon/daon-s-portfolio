$(function(){
    // alert('f')
    $('#main').fullpage({
        anchors:['page1','page2','page3','page4'],
        normalScrollElements:".work_flow",
        sectionsColor:['#F2BB57','#F2BB57','#F2BB57','#F2BB57']
        ,afterLoad:function(anchorsLink,index){
            console.log('현재섹션번호'+index)
        }
    })

    $('.menu nav ul .li').click(function(){
        $('.menu').hide()
    })
    


    $('.bar').click(function(){
        $('.menu').toggle()
    })

    $('.contactme, .contactmep').click(function(){
        $('.contactpopup').show(function(){
            $('.page4inner').hide()
        })
        
    })
    $('.contactpopup .null').click(function(){
        $('.contactpopup').hide(function(){
            $('.page4inner').show()
        })

        
    })


})