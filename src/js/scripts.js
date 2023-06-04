async function logJSONData() {
    url = "/data.json"
    // url = "src/img/1.jpg"

    // url = "https://star.oeid.ir/employee/phonelistdata/data.json"
    const response = await fetch(url,{
        // mode: 'no-cors'
    });
    const data = await response.json();
    console.log(response);

    return data;
}
async function logJSONImage() {
    url = "src/img/1.jpg"

    // url = "https://star.oeid.ir/web/image/res.partner/7/image_512/1.jpg"
    
    // url = "https://star.oeid.ir/employee/phonelistdata/data.json"
    const response = await fetch(url,{
        mode: 'no-cors',
        method: "GET"

    });
    const data = await response.blob();
    console.log('response, data: ',response, data);
    localStorage.setItem('image', JSON.stringify(data))
    const reader = new FileReader();

    // return data;
}
logJSONImage();

logJSONData()
    .then(data => {
        // console.log(data);
        data['data'].forEach((rec, index) => {
            localStorage.setItem(`employee_${rec['id']}`, JSON.stringify(rec))
            // console.log(index, rec)
        })
    })
    .catch(err => console.error(err));



    url = "src/img/1.jpg"
    // url = "https://star.oeid.ir/web/image/res.partner/7/image_512/1.jpg"
    var xhr = new XMLHttpRequest(),
        blob;
        xhr.open("GET", url, true);
        xhr.setRequestHeader("mode", "no-cors");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhr.responseType = "arraybuffer";
    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            blob = new Blob([xhr.response], {type: "image/png"});
            console.log('blob:',blob)
        }
    });

    xhr.send();
    // console.log(xhr)


    var xhr = new XMLHttpRequest();
xhr.open('GET', 
'src/img/1.jpg',
true);
xhr.responseType = "blob";
xhr.onload = function(e){ //Stringify blob...
    //reload the icon from storage
    var fr = new FileReader();
    fr.onload = 
        function(e) {
            localStorage['icon'] = e.target.result;
            document.getElementById("myicon").src = localStorage['icon'];
        }
    fr.readAsDataURL(xhr.response);
}
xhr.send(null)

