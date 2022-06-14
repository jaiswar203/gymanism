import React from 'react'
import { Typography, Button, Stack } from '@mui/material'

import BodyPartsImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

    const extractDetail=[
        {
            icon: BodyPartsImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name:target 
        },
        {
            icon: EquipmentImage,
            name:equipment
        }
    ]
    return (
        <Stack gap={"60"} sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>
            <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />
            <Stack sx={{gap:{lg:"35px",xs:"20px"}}}>
                <Typography variant="h4">
                    {name?.toUpperCase()}
                </Typography>
                <Typography>
                    Exercise Keep you strong. {name} {` `}
                    is one of the best exercise to target your {target}. It wiil help you improve your mood and gain energy
                </Typography>
                {extractDetail.map((item)=>(
                    <Stack key={item.name} direction="row" gap={"24px"} alignItems="center">
                        <Button sx={{background:"#fff2db",borderRadius:"50%",width:"100px",height:"100px"}}>
                            <img src={item.icon} alt={bodyPart} style={{width:"50px",height:"50px"}} />
                        </Button>
                        <Typography variant="h5" textTransform="capitalize">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail