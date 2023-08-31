function Email() {
  return (
    <div className="email">
      <div className="email__wrapper">
        <h1>New Reservation from JOHN</h1>
        <p>Details:</p>
        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Number of Person</th>
            <th>Date of Reservation</th>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>johnossai20</td>
              <td>2 Persons</td>
              <td>3.50</td>
            </tr>
          </tbody>
        </table>
        <a href="mailto:johnossai20">Send Mail</a>
      </div>
    </div>
  );
}

export default Email;
