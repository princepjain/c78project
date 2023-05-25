var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0
function update(){
    i++
    var number_of_family_member_in_array = 5
    if(i > number_of_family_member_in_array){
        i = 0
    }
    var updatedimage = images[i]
    var updatedname = names[i]
    document.getElementById("family_member_image").src = updatedimage 
    document.getElementById("family_member_name").innerHTML = updatedname
}