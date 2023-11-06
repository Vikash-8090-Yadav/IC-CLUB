// const web3 = new Web3(new Web3.providers.HttpProvider("https://celo-alfajores.infura.io/v3/b208399f926f487093f45debc86299bb"));
import {mytodo_backend} from "../../declarations/mytodo_backend"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import club from "./pages/club";

window.changeClub = (clubId) => {
    localStorage.setItem('clubId', clubId);
    window.location.href = 'club';
  };

async function GetMyClubs() {
    const id = await mytodo_backend.ClubId();
    alert(id)
    console.log(id)
    const info = await mytodo_backend.GetClub(0);
    alert(info);
    console.log("info",info)
    var walletAddress = localStorage.getItem("filWalletAddress");
   
    
      
      if(id>0) {
  
        var list = document.querySelector('.my_clubs');
        console.log("list->",list);
          var table = document.createElement('table');
          var thead = document.createElement('thead');
          var tbody = document.createElement('tbody');
  
          var theadTr = document.createElement('tr');
          var balanceHeader = document.createElement('th');
          balanceHeader.innerHTML = 'ID';
          theadTr.appendChild(balanceHeader);
          var contractNameHeader = document.createElement('th');
          contractNameHeader.innerHTML = 'Name';
          theadTr.appendChild(contractNameHeader);
          var contractTickerHeader = document.createElement('th');
          contractTickerHeader.innerHTML = 'Members';
          theadTr.appendChild(contractTickerHeader);
          
          var usdHeader = document.createElement('th');
          usdHeader.innerHTML = 'Proposals';
          theadTr.appendChild(usdHeader);
  
          thead.appendChild(theadTr)
  
          table.className = 'table';
          table.appendChild(thead);
  
          for (let i = 0; i < id; i++) {
            const info = await mytodo_backend.GetClub(i);
            console.log(info[0])
            // var title = info[i].title;
            if (id && 1) {
              var tbodyTr = document.createElement('tr');
              var contractTd = document.createElement('td');
              
              contractTd.innerHTML = "<a class='btn btn-success' onclick='changeClub(" + i + ")''>" + i + "</a>";
              tbodyTr.appendChild(contractTd);
              var contractTickerTd = document.createElement('td');
         
              const add = info[0].title;
              contractTickerTd.innerHTML = '<b>' + add+ '</b>';
              tbodyTr.appendChild(contractTickerTd);
              var balanceTd = document.createElement('td');
              balanceTd.innerHTML = '<b>' + + '</b>';
              tbodyTr.appendChild(balanceTd);
              var balanceUSDTd = document.createElement('td');
              balanceUSDTd.innerHTML = '<b>' +  + '</b>';
              tbodyTr.appendChild(balanceUSDTd);
              tbody.appendChild(tbodyTr);
            }
          }
  
          alert("MyDone")
        table.appendChild(tbody);
  
          list.appendChild(table);
      }
      $('.loading_message').css('display','none');
    
  }

  export default GetMyClubs;