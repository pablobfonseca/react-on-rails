var NewItem = React.createClass({
  handleClick() {
    var name        = this.refs.name.value;
    var description = this.refs.description.value;
    $.ajax({
      url: '/api/v1/items',
      method: 'POST',
      data: { item: { name: name, description: description } },
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
  },
  render() {
    return (
      <div>
        <h1>New Item</h1>
        <input ref='name' placeholder='Enter the item name' />
        <input ref='description' placeholder='Enter the item description' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
