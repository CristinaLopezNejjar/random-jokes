import React,{Component} from 'react'
import Container from 'react-bootstrap/Container';
import From from 'react-bootstrap/From';
import Button from 'react-bootstrap/Button';

  render() {
    return (
      <h1>RANDOM JOKERS</h1>
    );
  }
  import React from 'react';

export default class ListPage extends React.Component {
  ...
}

ListPage.propTypes = {
  list: React.PropTypes.object,
  todos: React.PropTypes.array,
  loading: React.PropTypes.bool,
  listExists: React.PropTypes.bool,
};
import { Meteor } from 'meteor/meteor';
import { Lists } from 'lists.js';
import { withTracker } from 'meteor/react-meteor-data';

const ListPageContainer = withTracker(({ id }) => {
  const todosHandle = Meteor.subscribe('todos.inList', id);
  const loading = !todosHandle.ready();
  const list = Lists.findOne(id);
  const listExists = !loading && !!list;
  return {
    loading,
    list,
    listExists,
    todos: listExists ? list.todos().fetch() : [],
  };
})(ListPage);

export default ListPageContainer;
export default withTracker(({ id }) => {
  const handles = [
    Meteor.subscribe('todos.inList', id),
    Meteor.subscribe('otherSub'),
  ];
  const loading = handles.some(handle => !handle.ready());
  return {
    loading,
  };
})(ListPage);
<ListPageContainer id={7}/>

  <html>
  <head>
      <meta charset="utf-8">
      <title>Jokes</title>
      <link rel="stylesheet" href="StyleJokes.css">
      <script type="text/javascript" src="js.jsx"></script>

  </head>
  <body>
  <div id="galerie">
      <Ul id="galerie_mini">
        <li><a href="img/photo1.jpg" title="" id="0"><img src="img/m_photo1.png" alt="Le titre de la photo 1" /></a>    </li>
        <li><a href="img/photo2.jpg" title="" id="1"><img src="img/m_photo2.png" alt="Le titre de la photo 2" /></a>    </li>
        <li><a href="img/photo3.png" title="" id="2"><img src="img/m_photo3.png" alt="Le titre de la photo 3" /></a>    </li>
        <li><a href="img/photo4.png" title="" id="3"><img src="img/m_photo4.png" alt="Le titre de la photo 4" /></a>    </li>
      </Ul>

    <dl id="photo">
        <dt>Blague 1</dt>
        <dd><img id="big_pict" src="img/photo1.png" alt="Photo 1 en taille normale" /</dd>
    </dl>

    <Ul id="nav">
        <li><Button id="prevButton" type="nextButton" name="nextButton">Next</Button></li>
        <li><Button id="nextButton" type="prevButton" name="prevButton">Prev</Button></li>
    </Ul>

   </div>
</body>
</html>
