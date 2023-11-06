import List "mo:base/List";
import Debug "mo:base/Debug";
import Nat8 "mo:base/Nat8";
import Int32 "mo:base/Int32";
import TrieMap "mo:base/TrieMap";
import Iter "mo:base/Iter";
import AssocList "mo:base/AssocList";
import Type "types";
import Error "mo:base/Error";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Cycles "mo:base/ExperimentalCycles";
import Hash "mo:base/Hash";
import Nat64 "mo:base/Nat64";
import Text "mo:base/Text";


 actor Club{

  // Club for the finance

// AUthentication start 





public shared query (msg) func whoami() : async Principal {
        msg.caller
    };


// Auntentications end
  type ClubInfo ={
    title: Text;
    description: Text;
  };

  type Proposol={
    title: Text;
    decsription: Text;
    destination: Text;
    Amount: Nat;
    password: Text;

  };





  var signup = HashMap.HashMap<Text,Text> (1 ,Text.equal, Text.hash);


  var clubs = HashMap.HashMap<Nat,ClubInfo> (1 ,Nat.equal, Hash.hash);

  // for proposl 

  var proposals = HashMap.HashMap<Nat,Proposol> (1 ,Nat.equal, Hash.hash);

  stable var postIdCount : Nat=0;

  stable var proposolIdCount : Nat=0;

  public func createClub(post:ClubInfo) : async (){
    let id:Nat= postIdCount;
    postIdCount +=1;

    clubs.put(id,post);

    ();
  };


  public query func GetClub(id:Nat): async ?ClubInfo{
    let postres:?ClubInfo = clubs.get(id);

    postres;
  };


  // for proposol 

  public func createProposal(proposal:Proposol) : async (){
    let id:Nat= proposolIdCount;
    proposolIdCount +=1;

    proposals.put(id,proposal);

    ();
  };

  public query func GetProposol(id:Nat): async ?Proposol{
    let postres:?Proposol = proposals.get(id);

    postres;
  };


  //  Signup



  public query func ClubId(): async (Nat){
    return postIdCount;
  };

  public query func ProposalId(): async (Nat){
    return proposolIdCount;
  };



};






