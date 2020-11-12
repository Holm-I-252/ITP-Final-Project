$('#submit').on('click', function() {
        let submited = $('#userForm :input')
        $('#contentArea').prepend(`
            <div id='userComment'>
                <div id='info'>
                    <h3 id='name'>${$('input#userName').val()}</h3>
                    <p id='commentContent'>${$('input#comment').val()}</p>
                </div>    
                <div id='commentButtons'>
                    <button id='edit'>Edit</button>
                    <button id='delete'>Delete</button>
                </div>
            </div>
            `)
            
            console.log(submited)
    })
$('#contentArea').on('click', '#edit', function(){
    let editParent = $(this).parent();
    $(editParent).append(
        `<form id="editForm">
        <input type='text' id="editInput" placeholder="New Comment">
        <input type='button' id='editSubmit' value='submit'>
        </form>
        `
    )
$('#contentArea').on('click', '#editSubmit', function(){
    let parents = $(this).parent();
    let nextParent = $(parents).parent();
    let nextParent2 = $(nextParent).parent();
    let kids = $(nextParent).children();
    let kids2 = $(parents).children();
    let kids3 = $(nextParent2).children();
    let kids4 = $(kids3).children();
    let kids5 = $(kids)
    $(kids4[1]).replaceWith(`<p id='commentContent'>${$(kids2[0]).val()}</p>`);
    $('#editForm').remove();
    console.log($(kids2).children());


})
$('input#comment').val()
})

$('#contentArea').on('click', '#delete', function(){
   let delParent = $(this).parent();
   let delParent2 = $(delParent).parent();
   $(delParent2).remove();
   console.log()
})

