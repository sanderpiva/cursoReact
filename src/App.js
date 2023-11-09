
import './App.css'
import axios from "axios"
import {useState, useEffect} from "react"
import {Col, Container, Row } from "react-bootstrap"

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(({data})=>{
      setPosts(data)
    })

  }, [])


  /*return (<div>
    <ul>
      {posts.map(post =>{
        return <li>{post.title}</li>
      })}
    </ul>
    
  </div>);*/

    return(
      <Container>
        <Row>
        {posts.map(post =>{
          return <Col>{post.title}</Col>
        })}
        </Row>
      </Container>


    )

}

export default App;


