pragma solidity ^0.4.4;

contract data {


    /************************************** 
        Structs and Variables
    **************************************/

    mapping (uint => dataPoint) public coreData;
    mapping (address => user) userData;

    uint coreDataIter; //iterator pointer for coreData

    struct user {
        uint16 location;
        bool gender; 
        uint dob;   //year of birth
        uint8 race;
    }

    struct dataPoint {
        uint id;
        address owner;
        address participant;
        bytes32 meta;
        uint256 price;
        uint data;
    }

    /************************************** 
        Functions
    **************************************/

    /* Researcher submits data */
    function submitData(address _address,bytes32 _meta, uint256 _price, uint _data) returns(bool success) {
        dataPoint memory newDataPoint;
		newDataPoint.id = 1333;
		newDataPoint.owner = msg.sender;
		newDataPoint.participant = _address;
        newDataPoint.meta = _meta;
        newDataPoint.price = _price;
        newDataPoint.data = _data;

        coreData[coreDataIter] = newDataPoint; //changes state

        //add event
		return true;	
    }

    /************************************** 
        Modifiers
    **************************************/

    //Confirms that only researcher is uploading data
    modifier checkResearcher(address _researcher)
    {
        require(msg.sender == _researcher);
        _;
    }


}