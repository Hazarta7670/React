import React, { useState } from "react";
import { NavLink, json } from 'react-router-dom';
import Header2 from "../atoms/header2";
import Label from "../atoms/label";
import Input from "../atoms/input";
import data from '../../data/data.json';

function Form() {
    const [player, setPlayer] = useState('')
    const [team, setTeam] = useState('')
    const [points, setPoints] = useState('')
    const [timePlayed, setTimePlayed] = useState('')

    function adding_player(e) {
        e.preventDefault()
        let body = {
            'name': player,
            'team': team,
            'points': points,
            'time': timePlayed
        }
        data.data.push(body)
        setPlayer('')
        setTeam('')
        setPoints('')
        setTimePlayed('')
    }

    return (
        <>
            <header>
                <NavLink to='/'>Home Page</NavLink>
            </header>
            <form className="form" onSubmit={adding_player}>
                <Header2 text='Add Player Stats'/>
                <div className="player">
                    <Label className="player" htmlFor="player" text='Player Name'/>
                    <Input 
                        type="text" 
                        required
                        placeholder="Enter Player Name"
                        data={player}
                        setData={setPlayer}
                    />
                </div>
                <div className="team">
                    <Label className="team" htmlFor="team" text='Team' />
                    <Input 
                        type="text" 
                        required 
                        placeholder="Enter Team"
                        data={team}
                        setData={setTeam}
                    />
                </div>
                <div className="point_scored">
                    <Label className="points_scored" htmlFor="points_scored" text='Points Scored'/>
                    <Input 
                        type="number" 
                        required
                        placeholder="Enter Point Scored"
                        data={points}
                        setData={setPoints} 
                    />
                </div>
                <div className="time_played">
                    <Label className="time_played" htmlFor="time_played" text='Time Played' />
                    <Input 
                        type="number" 
                        required
                        placeholder="Enter Time Played"
                        data={timePlayed}
                        setData={setTimePlayed}
                    />
                </div>
                <button type='submit'>Add to DataBase</button>
            </form>
        </>
    )
}

export default Form