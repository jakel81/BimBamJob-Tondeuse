import React, {useEffect, useState} from 'react';
import Tondeuse from './Tondeuse'

const Test = () => {

    const [fileData, setFileData] = useState("");
    const programme = {};

    useEffect(() => {
        if (fileData) {
            //console.log("file data trigger when dependencie is changed", fileData.split(/\s+/g))
            const data  = fileData.split(/\s+/g);
            //console.log(data)
            initData(data)
            let nbTondeuse = programme.startPositions.length
            //console.log(programme.startPositions)
            //console.log(programme.startPositions.length)
            for (let i = 0; i < nbTondeuse; i++) {
                //Déclaration d'une instance pour chaque tondeuse
                const tondeuse = new Tondeuse(programme.coordPelouse, programme.startPositions[i], programme.sequence[i], `Tondeuse N°${i + 1} `)
                tondeuse.init()
            }
        }
    })

    const initData = (dataArray) => {
        //Récupération des coordonnées du coin supérieur droit de la pelouse
        programme.coordPelouse = dataArray[0].trim().toUpperCase().split('')
        //console.log(programme.coordPelouse)
        //On parcourt le tableau des instructions
        for (let i = 1; i < dataArray.length; i++) {
            //Pour aller chercher les infos dans le tableau aux positions 1 et 3 du tableau de données
            if (i % 2 !== 0) {
                //Récuperation de la position de départ des tondeuses
                const initPosition = dataArray[i].trim().toUpperCase().split('')
                //console.log(initPosition)
                //console.log(programme.startPositions)
                programme.startPositions = programme.startPositions ? programme.startPositions.concat([initPosition]) : [initPosition]
            } else {
                //Récuperation de la séquence de déplacement aux positions 2 et 4 du tableau de données
                const initSequence = dataArray[i].toUpperCase().replace(/\s+/g, '').split('')
                programme.sequence = programme.sequence ? programme.sequence.concat([initSequence]) : [initSequence]
            }
        }
    }

    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            console.log(text)
            setFileData(text)
        };
        reader.readAsText(e.target.files[0])
    }


    return (
        <div>
            Fichier de test:
            <input type={"file"} onChange={showFile}/>
        </div>
    );
};

export default Test;
