import { useState, useEffect } from 'react';
import Input from './elements/input';
import Select from './elements/select';
import TextArea from './elements/textarea';
enum Priority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  Critical = 'Critical',
}

enum Status {
  New = 'New',
  InProgress = 'In Progress',
  Complete = 'Complete',
}

interface Ticket {
  meta: {
    id: string;
    date: number | string;
    // createdAt: string;
    // onChangeInfodAt: string;
  };
  info: {
    title: string;
    description: string;
    priority: object;
  };
}

const Ticket = () => {
  const priorityLevels = [
    { status: 'Low', id: 1, color: 'bg-green-500' },
    { status: 'Medium', id: 2, color: 'bg-yellow-500' },
    { status: 'High', id: 3, color: 'bg-red-500' },
    { status: 'Critical', id: 4, color: 'bg-red-600' },
    { status: 'None', id: 0, color: 'bg-indigo-500' },
  ];
  const [priority, setPriority] = useState(priorityLevels[0]);
  const date = new Date(Date.now()).toLocaleString();
  const [ticket, setTicket] = useState<Ticket>({
    meta: {
      id: '',
      date: '',
    },
    info: {
      title: '',
      description: '',
      priority: priority,
    },
  });

  function onChangeInfo(e) {
    setTicket((ticket) => ({
      ...ticket,
      info: {
        ...ticket.info,
        [e.target.name]: e.target.value,
      },
    }));
  }

  function onChangePriority() {
    setTicket((ticket) => ({
      ...ticket,
      info: {
        ...ticket.info,
        priority: priority,
      },
    }));
  }

  useEffect(() => {
    onChangePriority(), priority;
  }, [priority]);

  return (
    <form>
      <div>
        <div className="m-2">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <Input
              type="text"
              required={true}
              label="Title*"
              name="title"
              value={ticket.info.title}
              onChange={onChangeInfo}
              placeholder="Enter a title..."
            />
            <div className="sm:w-64 w-32">
              <Select
                options={priorityLevels}
                onChange={setPriority}
                value={ticket.info.priority}
                label="Priority"
              />
            </div>
          </div>

          <TextArea
            name="description"
            value={ticket.info.description}
            onChange={onChangeInfo}
            placeholder="Enter a description.."
            label="Description*"
            rows={4}
          />
        </div>
        <div>{JSON.stringify(ticket)}</div>
      </div>
      <button type="submit">Submit Form</button>
    </form>
  );
};

export default Ticket;
