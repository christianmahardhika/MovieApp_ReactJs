import MovieComponent from "./components/MovieComponent";
import React,{useState, useEffect} from "react";
import styled from 'styled-components';
import MovieRepository from "./repository/MovieRepository";
import { PbContainer } from "../../components/pbcontainer";
import { Container, Grid, Header, Image } from "semantic-ui-react";

// export default function Movie() {
//   const SEARCH_API="https://api.themoviedb.org/3/search/company?api_key=6d9463ea75dd62fcccc52f2b0edc5214&query="
//   const [movies, setMovies] = useState([]);
//     useEffect(() => {
//         MovieRepository.DiscoverMovies().then(res => { console.log(res.results); setMovies(res.results)})
//       })
//   return (<div>
//     <h1>React Movie Apps</h1>
//     <MovieContainer>
//     {movies.length > 0 && movies.map((movie) => 
//       (<MovieComponent {...movie} />)
//     )}
//     </MovieContainer>
//   </div>)
// }


export default function Movie() {
  const SEARCH_API="https://api.themoviedb.org/3/search/company?api_key=6d9463ea75dd62fcccc52f2b0edc5214&query="
  const [movies, setMovies] = useState([]);
    useEffect(() => {
        MovieRepository.DiscoverMovies().then(res => { setMovies(res.results) })
      })
  return (
    <PbContainer
      height = "460px"
      backgroundsize = "cover"
      backgroundposition = "center center"
      backgroundimageurl = "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
      margin = "0px !important"
    >
      <PbContainer paddingtop = "30px" >
          <Grid>
            <Grid.Row>
                <Grid.Column textAlign = "left" mobile = {3} tablet = {3} computer = {1}>
                    <Image src = "https://www.freepngimg.com/download/camera/70747-minion-kevin-stuart-bob-the-minions.png"/>
                </Grid.Column>
                <Grid.Column mobile = {13} tablet = {13} computer = {15}>
                    <Header textAlign = "right">Login</Header>
                </Grid.Column>
            </Grid.Row> 

            <Grid.Row>
                <Grid.Column width="10">
                    <Header as = "h1">Selamat Datang di </Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width="12">
                    <Header as = "h1">Kelas by Pengajar Belajar</Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </PbContainer>
    </PbContainer>
  );
}


// const Heading = styled.div`
//   ${(props: { width: number; }) => ellipsis(props.width)};
// `;

// export const PbTest = styled(Container)`
//   ${(props: { chickenAs: Boolean; }) => `margin-top: ${ props.chickenAs ?  }`};
// `;