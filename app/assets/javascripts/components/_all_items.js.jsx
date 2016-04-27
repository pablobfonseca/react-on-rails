var AllItems = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },
  onUpdate(item) {
    this.props.onUpdate(item);
  },
  render() {
    var items = this.props.items.map((item) => {
      return (
        <Item item={item}
              handleDelete={this.handleDelete.bind(this, item.id)}
              handleUpdate={this.onUpdate} />
      )
    });

    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    )
  }
});
