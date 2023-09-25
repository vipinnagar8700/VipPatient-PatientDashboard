// styled components
import {Form, BtnWrapper, InputWrapper} from './style';

// components
import CustomSelect from '@ui/Select';
import Field from '@ui/Field';
import Btn from '@ui/Btn';
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';

// utils
import {useDispatch} from 'react-redux';
import {addTodo, toggleCollapse} from '@store/features/todos';
import {tasksOptions} from '@constants/options';
import {useState} from 'react';
import {nanoid} from 'nanoid';

const AddForm = ({isVisible, visibilityHandler, variant}) => {
    const [task, setTask] = useState('');
    const [category, setCategory] = useState(null);
    const dispatch = useDispatch();
    const timestamp = Date.now();

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    }

    const handleCategoryChange = e => {
        setCategory(e);
    }

    const resetForm = () => {
        setTask('');
        setCategory(null);
        visibilityHandler(false);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (task !== '' && category !== null) {
            const id = nanoid(5);
            dispatch(addTodo({
                id,
                name: task,
                timestamp,
                label: category.value,
                expanded: false
            }));
            setTimeout(() => dispatch(toggleCollapse({id})), 300);
            resetForm();
        }
    }

    return (
       <></>
    )
}

export default AddForm;