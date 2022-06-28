import React from 'react'
import List from './List';

const Title = ({ title, profil, profiles, alertTitle }) => {

    alertTitle();
    console.log(profiles)
    return (
        <div>
            <h1>
                {JSON.stringify(profil)}
                Title : {title} || {profil.name} || {profil.location}
            </h1>
            <h1>List Nama Orang :</h1>
            <ul>
                {profiles.map((profile) => (
                    <List name={profile.name} />
                ))}
            </ul>
        </div>
    )
}

export default Title