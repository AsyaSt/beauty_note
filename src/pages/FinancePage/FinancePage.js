import Chart from 'chart.js/auto';
import { useEffect } from "react";
import { BottomMenu } from "../../components/BottomMenu/BottomMenu";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import './FinancePage.styles.scss';
import { ListItemIcon, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';



// const Can = () => {
//     let ctx = document.querySelector('#myChart').getContext("2d");
    
//     const labels = [
//         'Mon', 
//         'Tue',
//         'Wed',
//         'Thu',
//         'Fri',
//         'Sat'
//       ];
//     const data = {
//       labels: labels,
//       datasets: [{
//         label: '-',
//         data: [565, 359, 480, 481,356, 455, 140],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//           'rgba(255, 205, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(201, 203, 207, 0.2)'
//         ],
//         borderColor: [
//           'rgb(255, 99, 132)',
//           'rgb(255, 159, 64)',
//           'rgb(255, 205, 86)',
//           'rgb(75, 192, 192)',
//           'rgb(54, 162, 235)',
//           'rgb(153, 102, 255)',
//           'rgb(201, 203, 207)'
//         ],
//         borderWidth: 1
//       }]
//     };
//     const stackedBar = new Chart(ctx, {
//         type: 'bar',
//         data: data,
//         options: {
//             scales: {
//                 x: {
//                     stacked: true
//                 },
//                 y: {
//                     stacked: true
//                 }
//             }
//         }
//     });
// }


export const FinancePage = () => {
    // useEffect(() => {
    //     // let chartStatus = Chart.getChart("myChart"); // <canvas> id
    //     // if (chartStatus !== undefined) {
    //     //     chartStatus.destroy();
    //     // }
    //     // Can();
    // }, []);

    const [period, setPeriod] = useState(null);
    console.log(period)
    const handleFormatChange = (event, updatedPeriod) => {
        setPeriod(updatedPeriod);
    }
    return (
        <div className= "finance">
            <ToggleButtonGroup
                // sx={{color: 'white'}}
                aria-label="text formatting" value={period}
                onChange={handleFormatChange} size='small' color='primary'
                exclusive
            >
                <ToggleButton value="day">Day</ToggleButton>
                <ToggleButton value="week">Week</ToggleButton>
                <ToggleButton value="month">Month</ToggleButton>
            </ToggleButtonGroup>
            <div className= 'salary'>
                12 345 uah
            </div>
            <hr/>
            <div>
                <div className="uah">
                    <div className="uahh">
                        <AddCircleOutlineIcon/>
                        {/* <FontAwesomeIcon icon={faSquarePlus}/> */}
                        <span>1 234 uah</span>
                    </div>
                    <div className="uahh">
                        <RemoveCircleOutlineIcon/>
                        {/* <FontAwesomeIcon icon={faSquareMinus}/> */}
                        <span>1 234 uah</span>
                    </div>
                </div>
                {/* <canvas id="myChart" width="400" height="400"></canvas> */}
            </div>
            <div>
            <List sx={{ width: '100%' }}>
                <ListItem>
                    <ListItemIcon>
                        <AddCircleOutlineIcon color="success"/>
                    </ListItemIcon>
                    <ListItemText primary="Work" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                <ListItemIcon>
                        <AddCircleOutlineIcon color="success"/>
                    </ListItemIcon>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <RemoveCircleOutlineIcon color="error"/>
                    </ListItemIcon>
                    <ListItemText primary="Materials" secondary="July 20, 2014" />
                </ListItem>
            </List>
            </div>
            <BottomMenu/>
        </div>
    )
}
   