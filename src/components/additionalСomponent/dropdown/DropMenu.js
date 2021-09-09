import React, {useEffect} from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';
import {genresService} from "../../../services";
import {getGenres} from "../../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

export default function DropMenu () {

    const {genres} = useSelector(state => {
        const { genresReducer} = state;
        return genresReducer
    });
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        genresService.getGenres().then(value => dispatch(getGenres(value)));
    },[dispatch])

    const genresMoviePage = (value) => {
      history.push(`/genresMovie/${value}`);
    }

    return (
        <UncontrolledDropdown className={'dropMenu'}>
            <DropdownToggle caret color="danger">
                Genres
            </DropdownToggle>
            <DropdownMenu>
                {genres.map((value) => <DropdownItem key={value.id} onClick={() => {genresMoviePage(value.id)}}>{value.name}</DropdownItem>)}
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}