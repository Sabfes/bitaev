import './App.css';
import {useState} from "react";


function App() {
  const [state, setState] = useState([
    {
      id: 'a12da.smd,msdasdasd12',
      name: 'Folders',
    },
    {
      id: '12lamsdlml2',
      name: 'Projects',
    },
    {
      id: 'asdasdasd12',
      name: 'About',
      children: [
        {
          id: 'asda123123sdasd12',
          name: 'About__2',
          children:  [
            {
              id: 'asda121231233123sdasd12',
              name: 'About__3',
              children:  []
            },
            {
              id: 'asda1231asdasd23sdasd12',
              name: 'About__3.2',
              children:  []
            },
          ]
        },
        {
          id: 'asda123123sd123asdasd12',
          name: 'About__2.2',
          children:  []
        }
      ]
    }
  ])
  const [displayChildren, setDisplayChildren] = useState({});

  const renderChild = (children, level) => {
    const test = children.map(el => {
      return <div key={el.id}>
        <div
          onClick={ () => {
            setDisplayChildren({
              ...displayChildren,
              [el.name]: !displayChildren[el.name],
            });
          }}
          style={{marginLeft: level * 40 + 'px'}}
          className={`test ${displayChildren[el.name] && 'active'}`}>
          {el.name}
        </div>
        {
          el.children && displayChildren[el.name] && <div className={'test__child'}>
            {renderChild(el.children, level + 1)}
          </div>
        }
      </div>
      })
    return <div>
      {test}
    </div>
  }

  return (
    <div className={'App'}>
      {
        state.map((el) => {
          return <div key={el.id}>
            <div
              onClick={() => {
                setDisplayChildren({
                  ...displayChildren,
                  [el.name]: !displayChildren[el.name],
                });
              }}              className={`test ${displayChildren[el.name] && 'active'}`}
              >
              {el.name}
            </div>
            {
              el.children && displayChildren[el.name] && <div className={'test__child'}>
                {renderChild(el.children, 1)}
              </div>
            }
          </div>
        })
      }
    </div>
  );
}

export default App;
