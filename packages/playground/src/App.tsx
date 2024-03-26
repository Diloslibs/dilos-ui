import "@dilos/libs/dist/index.css"

function App() {
  return (
    <>
      <table className="d-table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>25</td>
            <td>London</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Doe</td>
            <td>22</td>
            <td>Paris</td>
          </tr>
          <tr>
            <td>3</td>
            <td>James Doe</td>
            <td>30</td>
            <td>New York</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
