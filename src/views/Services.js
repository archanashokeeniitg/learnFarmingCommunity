import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
//import tileData from "./tileData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "container",
    //flexWrap: "wrap",
    // justifyContent: "space-around",
    // overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    //width: 500,
    //height: 450,
  },
  title: {
    fontSize: 20,
  },

  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root} className="container">
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile>
          <img
            src="https://s3.wp.wsu.edu/uploads/sites/609/2019/07/DJI-Phantom-3-drone-1188x792.jpg"
            alt="name"
          />
          <GridListTileBar
            style={{ fontWeight: "bold", fontSize: 3 }}
            title="Drone monitoring"
            actionIcon={
              <IconButton aria-label={`info about `} className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
          <img
            src="https://www.innovationnewsnetwork.com/wp-content/uploads/2020/02/Organic-food-fraud.jpg"
            alt="name"
          />
          <GridListTileBar
            title="Organic Farming"
            actionIcon={
              <IconButton aria-label={`info about `} className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
          <img
            src="https://ogden_images.s3.amazonaws.com/www.observertoday.com/images/2020/10/11220732/Soil-probe-picture-from-Cornell-1100x618.jpg"
            alt="name"
          />
          <GridListTileBar
            title="Soil Testing"
            actionIcon={
              <IconButton aria-label={`info about `} className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
        <GridListTile>
          <img
            src="http://cropinsurancesolutions.com/wp-content/uploads/2018/05/crop-img-1-05302018.jpg"
            alt="name"
          />
          <GridListTileBar
            title="Fertilizers"
            actionIcon={
              <IconButton aria-label={`info about `} className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      </GridList>
    </div>
  );
}
