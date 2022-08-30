// console.log(filter);
// ul = document.getElementsByClassName("content");
// console.log(ul); //all phones selected
//console.log(ul)
//li = ul[0].getElementsByTagName("li");
// console.log(ul[0].getElementsByTagName("li")[0].innerHTML);
//for (i = 0; i < ul.length; i++) {
//a = ul[i].getElementsByTagName("li")[0];
// console.log(a)
//ul[i].style.display = 'block';

//console.log("nha")

// const ele = document.getElementsByClassName("checkbox");
// console.log(ele);

// var array = ["lowdash", "remove", "delete", "reset"]

// // Using filter method to create a remove method


//console.log(array);

// console.log(phoneProducts);

// for (i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("change", (e) => {
//     // console.log(e.target)
//     // console.log(e.target.value)
//     //  e.preventDefault();
//       console.log(e.target.checked)
//       if(e.target.checked)
//       {

//     const filter = e.target.dataset.filter;//samsung oppo asus

//     console.log(filter);

//     phoneProducts.forEach((product) => {

//       if (filter == "all") {

//         product.classList.remove("hide");

//         }else{
//two for loop one for producta and one for the list of checked items
//         if (product.classList.contains(filter)) {
//           product.classList.remove("hide");
//         } else {
//           product.classList.add("hide");
//         }
//         }
//     });
//   }
//   else{

//     phoneProducts.forEach((product) => {
//     product.classList.remove("hide");
//     })
//   }
//   });
// }

// Uncheck
// console.log(document.getElementById("checkbox").checked = false)


function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput"); //input

  filter = input.value.toUpperCase();

  const phoneProducts = document.querySelectorAll(".content");

  phoneProducts.forEach((product) => {
    txtValue = product.textContent || product.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      product.style.display = "block";
    
    } else {
      product.style.display = "none";
    }
  });
}











setTimeout(() => {
  function arrayRemove(arr, value) {
    return arr.filter(function (geeks) {
      return geeks != value;
    });
  }

  function arraycontains(arr, value) {
    // console.log(value)

    for (k = 0; k < arr.length; k++) {
      if (arr[k] === value) return true;
    }
    return false;
  }

  // }

  // var result = arrayRemove(array, "delete");

  var array = new Array();

  const btns = document.querySelectorAll(".checkbox");

  console.log(btns);

  const phoneProducts = document.querySelectorAll(".content");

  //console.log(phoneProducts);

  for (let i = 0; i < btns.length; i++) {
    //console.log(btns[i])

    btns[i].addEventListener("change", (e) => {
      if (e.target.checked) {
        if (array.indexOf(e.target.dataset.filter) === -1) {
          array.push(e.target.dataset.filter);
        }

        //console.log(array);

        for (let k = 0; k < array.length; k++) {
          // [redmi ,apple]
          //console.log(array[k]);
          phoneProducts.forEach((product) => {
            //console.log("value of k",k)
            if (array[k] === "all") {
              product.style.display = "block";
              document.querySelectorAll(".checkbox").forEach((item) => {
                item.checked = item.dataset.filter === "all";
              });
            } else {
              //two for loop one for producta and one for the list of checked items

              //console.log(product.classList[1])

              if (
                product.classList.contains(array[k]) ||
                arraycontains(array, product.classList[1])
              ) {
                product.style.display = "block";
              } else {
                //console.log(product.classList);
                product.style.display = "none";
              }
            }
          });
        }
      } else {
        array = arrayRemove(array, e.target.dataset.filter);

        for (let i = 0; i < array.length; i++) {
          phoneProducts.forEach((product) => {
            if (e.target.dataset.filter === "all") {
              window.location.reload();
            } else {
              if (
                product.classList.contains(array[k]) ||
                arraycontains(array, product.classList[1])
              ) {
                product.style.display = "block";
              } else {
                //console.log(product.classList);
                product.style.display = "none";
              }
            }
          });
        }
      }
    });
  }
});
