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
      <div className="row">
        <div className="col-md-6">
          <h1>New Item</h1>
          <form className="form-inline">
            <div className="form-group">
              <input ref='name' className="form-control" placeholder='Enter the item name' />
            </div>
            <div className="form-group">
              <input ref='description' className="form-control" placeholder='Enter the item description' />
            </div>
            <button className="btn btn-success" style={{marginLeft: 5 + 'px'}} onClick={this.handleClick}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
});
