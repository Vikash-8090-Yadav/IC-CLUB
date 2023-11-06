import React from 'react'

import {mytodo_backend} from "../../declarations/mytodo_backend"

async function GetClub() {



    // var clubId = localStorage.getItem("clubId");
    // alert(clubId)

    const id = await mytodo_backend.ClubId();
    const info = await  mytodo_backend.GetClub(0);
    alert(info[0].title)
    try {
        // alert(clubId)
        // var club = await contractPublic.methods.getClubById(clubId).call();
        if (id != null) {
            // Update UI elements
            // alert(club.name)
            $('.club_name').text(info[0].title);
            $('#club_id').text(club.id);
            $('.club_members').text(club.memberCount);
            $('.club_proposals').text(club.proposalCount);
            // alert(club.pool)
            const poolBalanceWei = club.pool;
            const poolBalanceEther = web3.utils.fromWei(poolBalanceWei.toString(), 'ether');
            $('.club_balance').text(poolBalanceEther);
            // $('.club_balance').text(web3.utils.fromWei(club.pool));
        }
    } catch (error) {
        // alert(error)
        console.error("Error fetching club data:", error);
    }


    // if(clubId != null) {
    //   await getContract();

    //   if(contractPublic != undefined) {
    //     var club = await contractPublic.methods.getClubById(clubId).call();
    //     alert(club)
    //     alert(club.name)
    //     if(club != null) {
    //       $('.club_name').text(club.name);
    //       $('#club_id').text(club.id);
    //       $('.club_members').text(club.memberCount);
    //       $('.club_proposals').text(club.proposalCount);
    //       $('.club_balance').text(web3.utils.fromWei(club.pool));
    //     }
    //   }
    // }
}


export default GetClub