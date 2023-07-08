pragma solidity ^0.8.7;
//SPDX-License-Identifier:MIT

contract Identification {

    struct Person {
        string name;
        string dob;
        string add;
        uint256 Id;
    }
    
    mapping(string => Person) private People;
    uint256 Id=10432;
    function setDetails(string memory name, string memory dob, string memory add,string memory aadhar) public {
        Id++;
        People[aadhar] = Person(name, dob, add, Id);
        
    }
    
    // event PersonReturned(string json);
    
    function get(string memory aadhar) public view returns(uint256 ){
        
        return People[aadhar].Id;

    }
    // function getDetails(string memory aadhar) public  {
    //     Person memory man = People[aadhar];
    
        
    //     string memory json = string(abi.encodePacked(
    //         '{"name":"', man.name, '",',
    //         '"dob":"', man.dob, '",',
    //         '"add":"', man.add, '",',
    //         '"aadhar":"', man.aadhar, '"}'
    //     ));
        
    //     emit PersonReturned(json);
    // }
}