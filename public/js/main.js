document.addEventListener("DOMContentLoaded", () => {
  const rankBox = document.querySelector("div.ranking");
  const mainHeader = document.querySelector("header.main");
  const navButtons = document.querySelector("div.main.button.box");
  const boardSort = document.querySelector(".categorylist");
  const tbodyList = document.querySelector(".boardcontainer tbody")

  
  

  //   td = document.createElement("td")
  //   td.textContent = data.b_title
  //   tr.appendChild(td)

  //   td = document.createElement("td")
  //   td.textContent = data.b_update_date
  //   tr.appendChild(td)

  //   return boardList
  // tbody.append(...boardList)
  
  const showBoard = (datas) => {
    tbodyList.textContent=""
    const tr = document.createElement("TR")
    tr.className = "board tr"
    const tbody1 = document.createElement("TBODY")
    // console.log(datas)
    const boardList = datas.map((data, index, i )=>{
    
    let td = document.createElement("td")
    td.classList = "board seq"
    td.textContent =  index+1
    tr.appendChild(td)
    tbody1.appendChild(tr)

    td = document.createElement("TD")
    td.classList = "board title"
    td.textContent = data.b_title
    console.log(td.textContent)
    tr.appendChild(td)
    tbody1.appendChild(tr)

    td = document.createElement("TD")
    td.classList = "board nickname"
    td.textContent = data.b_nickname
    // console.log(td.textContent)
    tr.appendChild(td)
    tbody1.appendChild(tr)
    

    td = document.createElement("td")
    td.classList = "board date"
    td.textContent = data.b_update_date
    tr.appendChild(td)
    tbody1.appendChild(tr)
    // tbody1.appendChild(tr)
    // return tbodylist
    })
    // tbodyList.appendchild(tbody1)
    
    tbodyList.append(...boardList)
    
  }
   navButtons?.addEventListener("click", (e) => {
    const button = e.target;
    const btnClass = button.textContent;
    if (btnClass == "랭킹") {
      document.location.href = "#ranking";
    } else if (btnClass == "달력") {
      document.location.href = "#main2";
    } else if (btnClass == "포럼") {
      document.location.href = "#main1";
    } 
  });
  boardSort?.addEventListener("click", async (b)=>{
    const target = b.target
    if( target.tagName === "DIV") {
      let loadFor = target.textContent
      // console.log(loadFor)
      await fetch(`/forum/:${loadFor}`)
      .then((res)=> res.json())
      .then((datas)=> {console.log(datas); showBoard(datas)}
      )
    }
  });

  
});
