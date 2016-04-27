var Item = React.createClass({
  getInitialState() {
    return { editable: false }
  },
  handleEdit() {
    if(this.state.editable) {
      var id          = this.props.item.id;
      var name        = this.refs.name.value;
      var description = this.refs.description.value;
      var item        = { id: id, name: name, description: description };
      this.props.handleUpdate(item);
    }
    this.setState({editable: !this.state.editable})
  },
  render () {
    var name        = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : this.props.item.name;
    var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} />: this.props.item.description;
    return (
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td><button className="btn btn-danger" onClick={this.props.handleDelete}>Delete</button></td>
        <td><button className="btn btn-primary" onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button></td>
      </tr>
    )
  }
});
