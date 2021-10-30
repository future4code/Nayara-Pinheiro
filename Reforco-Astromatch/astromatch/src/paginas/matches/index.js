import {
    PageContainer,
    ListItem,
    CandidateContainer,
    Avatar,
} from './styles';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../constantes/baseUrl';
import axios from 'axios';


export const MatchesPage = () => {
    const [matches, setMatches] = useState([]);

    const getMatches = () => {
        const URL = `${BASE_URL}/matches`

        axios.get(URL)
        .then((res) => {
            setMatches(res.data.matches)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }


      const MapMatchers = () => {
        const list = matches.map((match) => {
            return(
                <ListItem>
                    <Avatar src={match.photo}/>
                    <h4>{match.name}</h4>
                </ListItem>
            )
        })
        return list
  }

        useEffect(() => {
            getMatches()
        },[MapMatchers]);


    return(
        <PageContainer>
            <CandidateContainer>
               { matches.length ? <MapMatchers/> : <p>Sem Matchers</p>} 
            </CandidateContainer>
        </PageContainer>
    )
}