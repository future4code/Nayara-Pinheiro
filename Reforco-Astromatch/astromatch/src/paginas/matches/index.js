import {
    PageContainer,
    ListItem,
    CandidateContainer,
} from './styles';
import { useState } from 'react';


export const MatchesPage = () => {
    const [matches, setMatches] = useState([
        {name: "Maria", image:"https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2018/06/12_pl540_unesco1.jpg" }
    ]);
    return(
        <PageContainer>
            <CandidateContainer>
                {matches.map(match => {
                    return(
                        <ListItem>
                            <img src={match.image}/>
                            <h2>{match.name}</h2>
                        </ListItem>
                    )
                })}
            </CandidateContainer>
        </PageContainer>
    )
}