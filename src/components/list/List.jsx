import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import "./List.scss";
import ListItem from "../listitem/ListItem";

const List = () => {
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <ArrowBackIosOutlined />
      <div className="container">
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
        <ListItem/> 
      </div>
      <ArrowForwardIosOutlined/>
    </div>
  );
};

export default List;
