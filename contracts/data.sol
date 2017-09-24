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

contract marketplace is data {


    /************************************** 
        Functions
    **************************************/

    function buy (uint _id, uint val) returns (uint id_,bytes32 meta_, uint price_, uint data_) {
        //conditional/require
        require(coreData[_id]);
        coreData[_id].owner.transfer(val);

        return(coreData[_id].id,coreData[_id].meta,coreData[_id].price,coreData[_id].data);
    }

    function query (uint _id) constant returns (uint[] prices_,bytes32[] meta_, uint[] id_) {
        uint length = coreData[_id].length;
        uint[] memory prices = new uint[](length);
        bytes32[] memory meta = new bytes32[](length);
        uint[] memory id = new uint[](length);

        for (uint i = 0; i<length; i++) {
            //dataPoint memory cur; //pointer to dataPoint
            prices[i] = coreData[_id].price;
            meta[i] = coreData[_id].meta;
            id[i] = coreData[_id].id;
        }

        return(prices,meta,id);
    }

}