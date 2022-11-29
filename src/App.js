import './App.css';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const politicians = [
  {name: "Joe Biden", party: "Democrat", votes: 500, image: "images/Joe Biden.png", isFollowing: false, buttonText: "Follow This Politician"},      
  {name: "Hillary Clinton", party: "Democrat", votes: 350, image: "images/Hillary Clintonj.png", isFollowing: false, buttonText: "Follow This Politician"},
  {name: "Kamala Harris", party: "Democrat", votes: 300, image: "images/Kamala Harris.png", isFollowing: false, buttonText: "Follow This Politician"},
  {name: "Gavin Newsom", party: "Democrat", votes: 250, image: "images/gavin newsom.png", isFollowing: false, buttonText: "Follow This Politician"},
  {name: "Pete Buttigieg", party: "Democrat", votes: 225, image: "images/Pete Buttigieg.png", isFollowing: false, buttonText: "Follow This Politician"},
  {name: "Amy Klobuchar", party: "Democrat", votes: 200, image: "images/Amy-Klobuchar-2007.webp", isFollowing: false, buttonText: "Follow This Politician"},
  {name: "Donald Trump", party: "Republican", votes: 450, image: "images/Donald Trump.png", isFollowing: false, buttonText: "Follow This Politician"},
  {name: "Ron Desantis", party: "Republican", votes: 400, image: "images/ron desantis.png", isFollowing: false, buttonText: "Follow This Politician"},
  {name: "Mike Pence", party: "Republican", votes: 300, image: "images/mike pence.png", isFollowing: false, buttonText: "Follow This Politician"},
  {name: "Tim Scott", party: "Republican", votes: 250, image: "images/tim scott.jpeg", isFollowing: false, buttonText: "Follow This Politician"},
  {name: "Ted Cruz", party: "Republican", votes: 225, image: "images/ted cruz.png", isFollowing: false, buttonText: "Follow This Politician"},
  {name: "Chris Sununu", party: "Republican", votes: 180, image: "images/GOV_SUNUNU_OFFICIAL_PHOTO.jpeg", isFollowing: false, buttonText: "Follow This Politician"}
]

function App() {
  const[following, setFollowing] = useState([]);
  const[totalVotes, setTotalVotes] = useState(0);
  const[list, setList] = useState(politicians)

  function handleFollow(politician) {
    var dummyList2 = []
    if(politician.buttonText === "Follow This Politician") {
      for(var i=0; i < list.length; i++) {
        dummyList2.push(list[i])
      }
      for(var i = 0; i < dummyList2.length; i++){
        if(politician.name === dummyList2[i].name) {
          dummyList2[i].isFollowing = true
        }
      }
      if(!(search(following, politician))){
        setTotalVotes(totalVotes + politician.votes)
        setFollowing([...following, politician])
      }
      setList(dummyList2)
    }
    if(politician.buttonText === "Unfollow Politician") {
      for(var i=0; i < following.length; i++) {
        dummyList2.push(following[i])
      }
      for(var i=0; i < dummyList2.length; i++) {
        if(dummyList2[i].name === politician.name) {
          dummyList2.splice(i, 1)
          i--
        }
      }
      setFollowing(dummyList2)
      setTotalVotes(totalVotes - politician.votes)
    }
  }

  function buttonChange(politician){
    if(politician.buttonText === "Follow This Politician") {
      for(var i = 0; i < list.length; i++) {
        if(politician.name === list[i].name) {
          list[i].buttonText = "Unfollow Politician"
        }
      }
    }
    else {
      for(var i = 0; i < list.length; i++) {
        if(politician.name === list[i].name) {
          list[i].buttonText = "Follow This Politician"
        }
      }
    }
  }

  function search(list, param) {
    for(var i = 0; i < list.length; i++) {
      if(list[i] === param){
        return true
      }
    }
    return false
  }

  function filterList(str) {
    var dummyList = []
    for(var i=0; i < list.length; i++) {
      dummyList.push(list[i])
    }
    if(str === "All") {
      for(var i=0; i < politicians.length; i++) {
        if(!(search(dummyList, politicians[i]))) {
          dummyList.push(politicians[i])
        }
      }
      setList(dummyList)
    }
    if(str === "Democrat") {
      for(var i=0; i < dummyList.length; i++) {
        if(dummyList[i].party === "Republican") {
          dummyList.splice(i, 1)
          i--
        }
      }
      for(var i=0; i < dummyList.length; i++) {
        if(!(search(list, dummyList[i]))) {
          dummyList.splice(i, 1)
          i--
        }
      }
      setList(dummyList)
    }
    if(str === "Republican") {
      for(var i=0; i < dummyList.length; i++) {
        if(dummyList[i].party === "Democrat") {
          dummyList.splice(i, 1)
          i--
        }
      }
      setList(dummyList)
    }
    if(str === "Following") {
      for(var i=0; i < dummyList.length; i++) {
        if(dummyList[i].isFollowing === false) {
          dummyList.splice(i, 1)
          i--
        }
      }
      setList(following)
  }
  if(str === "Sort") {
    dummyList.sort(function(a, b){return b.votes - a.votes});
    setList(dummyList)
  }
}


  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Politicians Running</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => filterList("All")}>All Politicians</Nav.Link>
            <Nav.Link onClick={() => filterList("Democrat")}>Democrats</Nav.Link>
            <Nav.Link onClick={() => filterList("Republican")}>Republicans</Nav.Link>
            <Nav.Link onClick={() => filterList("Following")}>Following</Nav.Link>
            <Nav.Link onClick={() => filterList("Sort")}>Sort By Highest Vote Count</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {list.map((politician, index) => {
      return (
        <div key={index}>
        <img src={politician.image} width="480" height="450"></img>
        <h1>{politician.name}</h1>
        <p>{politician.party}</p>
        <p>Votes: {politician.votes}</p>
        <button onClick={() => {handleFollow(politician); buttonChange(politician)}}>{politician.buttonText}</button>
      </div>
      )})}
      <p>Total Votes for Followed Politicians: {totalVotes}</p>
      </div>
  )
}

export default App;