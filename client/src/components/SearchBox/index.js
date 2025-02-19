import React, {useRef} from 'react';
import {useTasks} from '../../state/TasksProvider';
import {InputBase, Box} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const SearchBox = () => {
    const {
        tasks,
        setSearchResults
    } = useTasks();
    const searchRef = useRef(null);

    const handleInputChange = () => {
        const searchTerm = searchRef.current?.value || '';
        const keysToSearch = ['taskID', 'summary', 'epic', 'priority', 'assignee', 'status'];
        const filteredItems = tasks.filter((item) =>
            keysToSearch.some((key) => String(item[key]).toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setSearchResults(filteredItems);
    };

    return <>
        <Box
        sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 2,
            paddingX: 1,
            width: "100%",
            maxWidth: 400,
        }}>
            <SearchIcon color="action"/>
            <InputBase inputRef={searchRef}
                placeholder="Search..."
                onChange={handleInputChange}
                sx={{ marginLeft: 1, flex: 1 }}
                    />
        </Box>
    </>;
};