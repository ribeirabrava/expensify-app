import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdmin = (WrappedComponent) => {
  return (props) =>  (
    <div>
      {props.isAdmin && <p>This is private/ pls dont shre</p>}
      <WrappedComponent {...props}/>
      
    </div>
  );
};

const requireAytentification = (WrappedComponent) => {
 return (props) => (
   <div>
     {props.isAuthentificate ? (
        <WrappedComponent {...props} />
     ) : (
      <p>Please, log in</p>
     )}
   </div>
 )
};
const AuthInfo = requireAytentification(Info);

const AdminInfo = withAdmin(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='alsdhflkj  jhgf  dsh s' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthentificate={true} info='alsdhflkj  jhgf  dsh s' />, document.getElementById('app'));