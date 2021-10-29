import {
    CandidateContainer,
     CandidateImage, 
     PageContainer,
     CandidateName, 
     CandidadeDescription,
     ChooseButton,
     } from './styles';
import Image from '../../img/natureza.jpg';

export const HomePage = () => {
    return (
        <PageContainer> 
            <CandidateContainer>
                 <CandidateImage src={Image}/>
                 <CandidateName>Leandro</CandidateName>
                 <CandidadeDescription>Melhor marido do mundo</CandidadeDescription>
                 <div> 
                 <ChooseButton>❌</ChooseButton>
                 <ChooseButton>💚</ChooseButton>
                 </div>
            </CandidateContainer>
        </PageContainer>
    )
}