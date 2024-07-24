import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Education.css';


function EducationCard({ id, institution, course, startYear, endYear, url, icon }) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
        imgContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            width: 50,
        },
        img: {
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }));

    const classes = useStyles();

  return (
    <Fade bottom>
      <a href={url} target="_blank" rel="noreferrer" className={`education-card ${classes.educationCard}`}>
        <div className={classes.imgContainer}>
          <img src={icon} className={classes.img} alt="" />
        </div>
        <div className="education-details">
          <h6 style={{ color: theme.primary }}>{startYear}-{endYear}</h6>
          <h4 style={{ color: theme.tertiary }}>{course}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
        </div>
      </a>
    </Fade>
  );
}

export default EducationCard;
