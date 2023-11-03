import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Cycles "mo:base/ExperimentalCycles";
import Hash "mo:base/Hash";
import Nat64 "mo:base/Nat64";
import Text "mo:base/Text";

shared(msg) actor class Club (
   capacity: Nat
  ){
  // Club for the finance


  type Club ={
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


// khdajksdj



  var signup = HashMap.HashMap<Text,Text> (1 ,Text.equal, Text.hash);


  var clubs = HashMap.HashMap<Nat,Club> (1 ,Nat.equal, Hash.hash);

  // for proposl 

  var proposals = HashMap.HashMap<Nat,Proposol> (1 ,Nat.equal, Hash.hash);

  stable var postIdCount : Nat=0;

  stable var proposolIdCount : Nat=0;

  public func createClub(post:Club) : async (){
    let id:Nat= postIdCount;
    postIdCount +=1;

    clubs.put(id,post);

    ();
  };


  public query func ClubInfo(id:Nat): async ?Club{
    let postres:?Club = clubs.get(id);

    postres;
  };


  // for proposol 

  public func createProposal(proposal:Proposol) : async (){
    let id:Nat= proposolIdCount;
    proposolIdCount +=1;

    proposals.put(id,proposal);

    ();
  };

  public query func ProposolInfo(id:Nat): async ?Proposol{
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





  var balance = 0;

  // Return the current cycle balance
  public shared(msg) func wallet_balance() : async Nat {
    return balance;
  };

  // Return the cycles received up to the capacity allowed
  public func wallet_receive() : async { accepted: Nat64 } {
    let amount = Cycles.available();
    let limit : Nat = capacity - balance;
    let accepted =
      if (amount <= limit) amount
      else limit;
    let deposit = Cycles.accept(accepted);
    assert (deposit == accepted);
    balance += accepted;
    { accepted = Nat64.fromNat(accepted) };
  };

  // Return the greeting
  public func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  // Return the principal of the caller/user identity
  public shared(msg) func owner() : async Principal {
    let currentOwner = msg.caller;
    return currentOwner;
  };


};
