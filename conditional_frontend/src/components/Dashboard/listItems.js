import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import CreateIcon from '@material-ui/icons/Create';

export const mainListItems = (
  <div>
    <a href="/dashboard/add"><ListItem button className="mt-5">
      <ListItemIcon>
        <AddIcon style={{color : "#006AEE", transform : "translateX(25%)"}}/>
      </ListItemIcon >
      <ListItemText primary="CREATE NEW TEST" style={{transform : "translateX(-8%)"}}/>
    </ListItem>
    </a>
  
    <a href="/dashboard/list">
    <ListItem button>
      <ListItemIcon>
        <ListIcon style={{color : "#006AEE", transform : "translateX(25%)"}}/>
      </ListItemIcon>
      <ListItemText primary="VIEW TEST" style={{transform : "translateX(-8%)"}}/>
    </ListItem>
    </a>

    
    <a href="/dashboard/Edit">
    <ListItem button>
      <ListItemIcon>
        <CreateIcon style={{color : "#006AEE", transform : "translateX(25%)"}}/>
      </ListItemIcon>
      <ListItemText primary="EDIT TEST" style={{transform : "translateX(-8%)"}}/>
    </ListItem>
    </a>
  </div>
);
