// styled components
import { DraggableListItem, DraggablePlannerItem } from './style';
// styled components
import {Form, BtnWrapper, InputWrapper} from '../AddForm/style';

// components
import CustomSelect from '@ui/Select';
import Field from '@ui/Field';
import Btn from '@ui/Btn';
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';

// utils
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, toggleCollapse} from '@store/features/todos';
import {tasksOptions} from '@constants/options';
import {useState} from 'react';
import {nanoid} from 'nanoid';
// components
import Todo from '@components/Todos/Todo';
import {
    DndContext,
    closestCenter,
    TouchSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
    useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

// hooks
import useMobileDetect from 'use-mobile-detect-hook';

// utils
import propTypes from 'prop-types';
import { updateOrder } from '@store/features/todos';
import { Content, ListItemContainer, Main } from '../Todo/list';
import Checkbox from '@ui/Checkbox';
import { useEffect } from 'react';
import { GetAppointmentRequest } from '@components/Api/AllApi';
import { TextField } from '@mui/material';

const DnDLayout = ({isVisible, visibilityHandler, variant}) => {
    const device = useMobileDetect();
    const todos = useSelector(state => state['todos'].todos);
    const DnDItem = variant === 'list' ? DraggableListItem : DraggablePlannerItem;
    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: {
            distance: 15,
        }
    }), useSensor(TouchSensor, {
        activationConstraint: {
            delay: 2000,
            tolerance: 5,
        },
    }));

    const SortableItem = (props) => {
        const {
            attributes,
            listeners,
            setNodeRef,
            transform,
            transition,
            isOver,
            isDragging,
        } = useSortable({ id: props.id });

        const style = {
            transform: CSS.Transform.toString(transform),
            transition,
            zIndex: isOver || isDragging ? 10 : 0,
            position: 'relative',
            touchAction: 'none',
        };

        return (
            <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                {props.children}
            </div>
        );
    }

    const onDragEnd = e => {
        const { active, over } = e;

        if (active.id !== over.id) {
            const oldIndex = todos.findIndex(({ id }) => id === active.id);
            const newIndex = todos.findIndex(({ id }) => id === over.id);
            dispatch(updateOrder(arrayMove(todos, oldIndex, newIndex)));
        }
    }


    const [post, setPost] = useState(false)

    useEffect(() => {

        const GetEEEE = GetAppointmentRequest()
        if (GetEEEE) {
            GetEEEE.then((data) => {
                console.log(data?.result, "AUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUuu")
                setPost(data?.result || [])
            })
        }

    }, [])

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
        <>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}
                modifiers={[restrictToVerticalAxis]} autoScroll={true}>
                <SortableContext items={todos} strategy={verticalListSortingStrategy} disabled={!device.isDesktop()}>
                    {post && post.map(todo => (
                        <SortableItem key={todo.id} id={todo.id}>
                            <DnDItem>
                                <ListItemContainer className="list-item" tabIndex={0}>
                                    <Content>
                                        <TextField type='checkbox' sx={{ height: 24, width: 24 }} />
                                        {todo.dotw}
                                        <Main>
                                            <input type="text" readOnly={true} />
                                        </Main>

                                    </Content>

                                </ListItemContainer>
                            </DnDItem>
                        </SortableItem>
                    ))}
                </SortableContext>
            </DndContext>
          
        </>

    )
}

DnDLayout.propTypes = {
    variant: propTypes.oneOf(['planner', 'list']).isRequired
}

export default DnDLayout;