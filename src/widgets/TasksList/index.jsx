// styling

// styled components
import { DraggableListItem, DraggablePlannerItem } from '../../components/Todos/DnDLayout/style';
// styled components
import { Form, BtnWrapper, InputWrapper } from '../../components/Todos/AddForm/style';

// components
import Field from '@ui/Field';
import Btn from '@ui/Btn';
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';
import { useSnackbar } from 'notistack';
// utils
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleCollapse } from '@store/features/todos';
import { tasksOptions } from '@constants/options';
import { useState } from 'react';
import { nanoid } from 'nanoid';
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
import { Content, ListItemContainer, Main } from '../../components/Todos/Todo/list';
import Checkbox from '@ui/Checkbox';
import { useEffect } from 'react';
import { ADDAPPOINRTMN, GETAPPOINTMENTTYPE, GetAppointmentRequest } from '@components/Api/AllApi';
import { Grid, MenuItem, Select, TextField } from '@mui/material';
import styled from 'styled-components/macro';
// styled components

// components

// utils
// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import { Navbar } from '@components/Widget/style';
import TodosLegend from '@components/Todos/TodosLegend';
import AddForm from '@components/Todos/AddForm';
import DnDLayout from '@components/Todos/DnDLayout';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import { useRef } from 'react';
import useContentHeight from '@hooks/useContentHeight';
import CustomSelect from '@ui/Select';

const Footer = styled.div`
  padding: 2px 24px 22px 24px;
`;

const TasksList = ({ isVisible, visibilityHandler, variant }) => {
    const { enqueueSnackbar } = useSnackbar();
    // const todos = useSelector(state => state['todos'].todos);
    const [isFormVisible, setFormVisible] = useState(false);
    const [day, setDay] = useState("");
    const [type, setType] = useState("");
    const [note, setNote] = useState("");
    const [amount, setAmount] = useState(""); // You need to set clinicID

    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const listRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);

    useEffect(() => {
        listRef.current.scrollTo(0, 0);
    }, [isFormVisible]);


    const handleAddAppointment = () => {
        ADDAPPOINRTMN(day, type, note, amount)
            .then(response => {
                // Handle the response here
                console.log("Appointment added successfully!", response);
                enqueueSnackbar(response.messege, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });

            })
            .catch(error => {
                // Handle errors here
                // console.error("Error adding appointment:", error);
                enqueueSnackbar("Error adding appointment:", error, {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
            });
    }

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
            setTimeout(() => dispatch(toggleCollapse({ id })), 300);
            resetForm();
        }
    }
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


    const [AAA, setAAAA] = useState(false)

    useEffect(() => {


        const GETAPPOINTTY = GETAPPOINTMENTTYPE();
        if (GETAPPOINTTY) {
            GETAPPOINTTY.then((data) => {
                console.log(data?.result, "OOOOOOOOOOOOOOOOOOOOOOOOOOOOoo")
                setAAAA(data?.result)
            })
        }

    }, [])


    return (
        <Widget name="TasksList" mobile={600}>
            <WidgetHeader title="Request an Appointment" flex="column" style={{ paddingBottom: 2 }} elRef={headerRef}>
                <Navbar as="div" style={{ margin: '0 -22px' }}>
                    Preferred Day of Week
                </Navbar>
            </WidgetHeader>
            <ScrollContainer height={height}>
                <div className="track" ref={listRef} style={{ overflowY: isFormVisible ? 'hidden' : 'auto' }}>
                    <AddForm isVisible={isFormVisible} visibilityHandler={setFormVisible} variant="list" />
                    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}
                        modifiers={[restrictToVerticalAxis]} autoScroll={true}>
                        <SortableContext items={todos} strategy={verticalListSortingStrategy} disabled={!device.isDesktop()}>
                            {post && post.map(todo => (
                                <SortableItem key={todo.id} id={todo.id}>
                                    <DnDItem>
                                        <ListItemContainer className="list-item" tabIndex={0}>
                                            <Content>
                                                <TextField type='checkbox' sx={{ height: 24, width: 24 }} onChange={e => setDay(e.target.value)} />
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
                </div>
            </ScrollContainer>
            <Footer >


                <Select size='small' fullWidth onChange={e => setType(e.target.value)}>
                    <MenuItem disabled> Choose a reason
                    </MenuItem>
                    {
                        AAA && AAA.map((data, index) => {
                            return (
                                <MenuItem value={data.id} key={index}>{data.name}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
                <TextField sx={{ marginTop: 1 }} fullWidth placeholder="Reason for Appointment"
                    // value={Note}
                    size='small'
                    name='note'
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    className="field"
                />
                <TextField sx={{ marginTop: 1 }} fullWidth placeholder="Amount"
                    value={amount}
                    size='small'
                    name='amount'
                    onChange={e => setAmount(e.target.value)}
                    className="field"
                />

                <button style={{backgroundColor:'green',color:"white",padding:10,marginTop:3}} onClick={handleAddAppointment} type="submit"  >Submit Request</button>
            </Footer>
        </Widget>
    )
}

export default TasksList;