import {
    CandidateContainer,
     CandidateImage, 
     PageContainer,
     CandidateName, 
     CandidadeDescription,
     ChooseButton,
     } from './styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constantes/baseUrl';

export const HomePage = () => {
    const [profile, setProfile] = useState({})

    const getProfile = () => {
        const URL = `${BASE_URL}/person`

        axios.get(URL)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err.response)
            })
        }

    const choosePerson = (boolean) => {
        const URL = `${BASE_URL}/choose-person` 
        const body = {
            "id": profile.id,
            "choice": boolean
        }

        axios.post(URL, body)
            .then((res)=>{
                getProfile()
            })
            .catch((err) => {
                console.log(err.response)
            })

    }

    useEffect(() => {
        getProfile()
    },[]);


    return (
        <PageContainer> 
            <CandidateContainer>
                 <CandidateImage src={profile.photo}/>
                 <CandidateName>{profile.name},{profile.age}</CandidateName>
                 <CandidadeDescription>{profile.bio}</CandidadeDescription>
                 <div> 
                 <ChooseButton onClick={()=> choosePerson(false)} >❌</ChooseButton>
                 <ChooseButton onClick={()=> choosePerson(true)}>💚</ChooseButton>
                 </div>
            </CandidateContainer>
        </PageContainer>
    )
}