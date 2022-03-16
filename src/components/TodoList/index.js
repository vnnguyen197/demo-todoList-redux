import { Col, Input, Button, Select, Tag, Row } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import { todoListSelector } from '../../redux/selectors';


export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [prioriry, setPrioriry] = useState('Medium');
  const searchText = useSelector();
  const dispatch = useDispatch();
  const todoList = useSelector(todoListSelector);
  console.log({ todoList });

  const handleAddButtonClick = () => {
    //dispatch
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
      prioriry: prioriry,
      completed: false,
    }))
  }
  const handleInputChange = (e) => {
    console.log('handleInputChange', e.target.value)
    setTodoName(e.target.value);
  }

  const handlePrioriryChange = (value) => {
    // console.log({value});
    setPrioriry(value);
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => <Todo key={todo.id} name={todo.name} prioriry={todo.prioriry} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={prioriry} onChange={handlePrioriryChange} >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
