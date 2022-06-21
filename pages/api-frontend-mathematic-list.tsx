import { useEffect, useState } from 'react';
import { Mathematic } from '../util/database';

export default function ApiFrontendMathematicList() {
  const [mathematicList, setMathematicList] = useState<Mathematic[]>([]);

  const [activeMathematicId, setActiveMathematicId] = useState<
    number | undefined
  >(undefined);

  // state for new mathematic inputs
  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState('');
  const [newFun, setNewFun] = useState('');

  const [editFristName, setEditFirstName] = useState('');
  const [editFun, setEditFun] = useState('');

  const mathematics = [
    { id: 1, name: 'q', type: 'ddhfs', fun: 'dghjsfs' },
    { id: 2, name: 'qf', type: 'dghjds', fun: 'dsfhfds' },
    { id: 3, name: 'qdsd', type: 'ddffs', fun: 'dsfcbgs' },
    { id: 4, name: 'qfs', type: 'ddsdds', fun: 'dsdfghfs' },
  ];

  useEffect(() => {
    async function getMathematics() {
      const request = await fetch('/api/mathematics');
      const mathematicsPlus = await request.json();
      setMathematicList(mathematicsPlus);
    }
    getMathematics().catch(() => {
      console.log('mathematic request fails');
    });
  }, []);

  async function createMatheamticHandler() {
    const response = await fetch('/api/mathematics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application.json',
      },
      body: JSON.stringify({
        name: newName,
        fun: newFun,
        type: newType,
      }),
    });
    const createdMathematic = await response.json();

    // copy state
    // update copy of the state
    const newState = [...mathematicList, createdMathematic];

    // use setState func
    setMathematicList(newState);
    setNewName('');
    setNewFun('');
    setNewType('');
  }

  async function deleteMathematicHandler(id: number) {
    const response = await fetch(`api/mathematics/${id}`, { method: 'DELETE' });
    const deletedMathematic = await response.json();

    // copy state
    // update copy of the state
    const newState = mathematicList.filter(
      (animal) => animal.id !== deletedMathematic.id,
    );
    // use setState func
    setMathematicList(newState);
  }

  async function updateMathematicHandler(id: number) {
    const response = await fetch(`api/mathematics/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: editName,
        fun: editFun,
      }),
    });
    const updatedMathematic = await response.json();

    // copy state
    // update copy of the state
    const newState = mathematicList.map((mathematic) => {
      if (mathematic.id === updatedAMathematic.id) {
        return updatedAnimal;
      } else {
        return animal;
      }
    });
    // use setState func
    setAnimalList(newState);
  }

  return (
    <>
      <label>
        Name:
        <input
          value={newName}
          onChange={(event) => setNewName(event.currentTarget.value)}
        />
      </label>
      <label>
        Type:
        <input
          value={newType}
          onChange={(event) => setNewType(event.currentTarget.value)}
        />
      </label>
      <label>
        Fun:
        <input
          value={newFun}
          onChange={(event) => setNewFun(event.currentTarget.value)}
        />
      </label>
      <button>add mathematic</button>
      <hr />
      mathematic to be created: {newName} {newType} {newFun}
      <hr />
      {mathematics.map((mathematic) => {
        return mathematic.id === activeMathematicId ? (
          <div key={mathematic.id}>
            <label>
              Name:
              <input value={mathematic.name} disabled />
            </label>
            Type: {mathematic.type}
            <label>
              Fun:
              <input value={mathematic.fun} disabled />
            </label>
            <button>edit</button>
            <button>save</button>
            <button>x</button>
          </div>
        ) : (
          <div key={mathematic.id}>
            <label>
              Name:
              <input value={mathematic.name} disabled />
            </label>
            Type: {mathematic.type}
            <label>
              Fun:
              <input value={mathematic.fun} disabled />
            </label>
            <button>edit</button>
            <button>save</button>
            <button>x</button>
          </div>
        );
      })}
    </>
  );
}
