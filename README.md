# Internet Computer Club (IC-CLUB)

IC CLUB stands as a pioneering platform, revolutionizing the landscape of investment management. At its core, IC CLUB is designed to empower users by providing a decentralized, agile, and bureaucracy-free environment for managing investment clubs. The platform leverages innovative technologies to ensure transparency, security, and efficiency in investment processes.

One of the standout features of IC CLUB is its commitment to decentralization. Through the use of blockchain technology, the platform ensures that investment club data is transparent, secure, and immutable. This decentralized approach eliminates the need for intermediaries, putting control directly into the hands of the users.'


# What it does

## Create Investment Clubs

Users can create investment clubs by defining a name, and the club will be associated with the account of the user who creates it (owner).

![Screenshot from 2023-11-12 23-51-24](https://github.com/Vikash-8090-Yadav/IC-CLUB/assets/85225156/d95d370c-9643-4d2e-a510-c83b87c6ae23)


## Join or Leave Clubs

Anyone with an ICP (Internet Computer Protocol) blockchain account can join available investment clubs or leave them with just a couple of clicks.

## Contribute to the Club

Any member of a club can contribute to the common fund (pool) by depositing ICP coins. These contributions can be used in proposals.

## Create and Vote on Proposals

Members who have contributed funds to the club pool can create proposals. Proposals include a description, amount (not exceeding the pool amount), and recipient for potential investments in businesses or individuals. All members can approve or reject proposals, with only one vote allowed per member on each proposal.

![Screenshot from 2023-11-12 23-53-36](https://github.com/Vikash-8090-Yadav/IC-CLUB/assets/85225156/83b06e1b-8c91-4144-a9da-2b53aa45df68)


## Run Proposals

A proposal owner, if the approval is greater than rejection, can execute a proposal. This action will transfer the proposal amount to the specified recipient. The owner also has the option to close a proposal, either as a cancellation, due to a publication error, or to avoid sending funds if they decide not to proceed with it.

![Screenshot from 2023-11-13 00-26-42](https://github.com/Vikash-8090-Yadav/IC-CLUB/assets/85225156/4ca59e4e-5725-45d3-80cd-506e93a35b24)




```bash
cd IC-CLUB/
dfx help
dfx canister --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface

dfx deploy file_scaling_manager --argument='(false)'

dfx deploy file_storage --argument='(false)'

dfx deploy
```
# Project Gallery
![Screenshot from 2023-11-12 23-50-21](https://github.com/Vikash-8090-Yadav/IC-CLUB/assets/85225156/6b94e8bb-872c-47f5-b41b-0bee8c86fa32)

