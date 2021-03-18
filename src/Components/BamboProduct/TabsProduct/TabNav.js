import * as S from "../style";

function TabNav(props) {
  return (
    <div>
      <S.ListProduct className="nav nav-tabs">
        {props.tabs.map((tab) => {
          const active = tab === props.selected ? "active" : "";
          return (
            <li className="nav-item" key={tab}>
              <a
                className={"nav-link " + active}
                onClick={() => props.SelectTab(tab)}
              >
                {tab}
              </a>
            </li>
          );
        })}

        {console.log(props.tabs)}
      </S.ListProduct>
      {props.children}
    </div>
  );
}

export default TabNav;
