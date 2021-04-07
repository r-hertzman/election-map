var createPolitician = function(name, partyColor){
    var politician = {};
    politician.name = name;
    politician.results = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;
    
    politician.tallyUpTotalVotes = function ()
  {
    this.totalVotes = 0;
    for (var i = 0; i < this.results.length; i++)
      {
        this.totalVotes = this.totalVotes + this.results[i];
      }
  };
    
    return politician;
  };
  
  var cheeto = createPolitician("Donald Trump", [132, 17, 11]);
  
  var gramps = createPolitician("Joe Biden",  [245, 141, 136]);
  
  
  var winner;
  
  cheeto.results = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
  
  gramps.results = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];
  
  cheeto.results[9] = 1;
  gramps.results[9] = 28;
  cheeto.results[4] = 17;
  gramps.results[4] = 38;
  cheeto.results[43] = 11;
  gramps.results[43] = 27;
  
  var setStateResults = function(state){
    theStates[state].winner = null;
    
    if (cheeto.results[state] > gramps.results[state]){
      theStates[state].winner = cheeto;
    }
    else if (gramps.results[state] > cheeto.results[state]){
      theStates[state].winner = gramps;
    }
    
    var stateWinner = theStates[state].winner;
    
    if (stateWinner != null){
      theStates[state].rgbColor = stateWinner.partyColor
    }
    
    else {theStates[state].rgbColor =[11, 32, 57];}
  
    
    var stateInfoTable = document.getElementById('stateResults');
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var stateAbbrev = header.children[0].children[1];
    var candidate1Name = body.children[0].children[0];
    var candidate1Results = body.children[0].children[1];
    var candidate2Name = body.children[1].children[0];
    var candidate2Results = body.children[1].children[1];
    var winnerName = body.children[2].children[1];
    
    stateName.innerText = theStates[state].nameFull;
    stateAbbrev.innerText = theStates[state].nameAbbrev;
    candidate1Name.innerText = cheeto.name;
    candidate1Results.innerText = cheeto.results[state];
    candidate2Name.innerText = gramps.name;
    candidate2Results.innerText = gramps.results[state];
    
    if (theStates[state].winner === null){
      winnerName.innerText = "DRAW";
  } 
    else {
      winnerName.innerText = theStates[state].winner.name;
  }
    
  };
  
  cheeto.tallyUpTotalVotes();
  gramps.tallyUpTotalVotes();
  
  if (cheeto.totalVotes > gramps.totalVotes){
    winner=cheeto.name;
  }
  
  else if (gramps.totalVotes > cheeto.totalVotes){
    winner=gramps.name;
  }
  
  else if (gramps.totalVotes = cheeto.totalVotes){
    winner="DRAW!"
  };
  

  var countryResultsTable = document.getElementById('countryResults');
  var row = countryResultsTable.children[0].children[0];

  row.children[0].innerText = cheeto.name;
  row.children[1].innerText = cheeto.totalVotes;
  row.children[2].innerText = gramps.name;
  row.children[3].innerText = gramps.totalVotes;
  row.children[5].innerText = winner;
  