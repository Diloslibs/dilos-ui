function App() {
  return (
    <div className="my-0 mx-auto min-h-full max-w-screen-md py-16">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Table Default</h1>
          <p>Table with default style.</p>

          <div className="bg-white p-4 border rounded-md">
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
          </div>

        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Table Striped</h1>
          <p>Table with zebra style.</p>

          <div className="bg-white p-4 border rounded-md">
            <table className="d-table striped-x">
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
          </div>

          <div className="bg-white p-4 border rounded-md">
            <table className="d-table striped-y">
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
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Table Hoverable</h1>

          <p>Table with hoverable.</p>

          <div className="bg-white p-4 border rounded-md">
            <table className="d-table hoverable">
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
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Table Compact</h1>

          <p>Table with compact style.</p>

          <div className="bg-white p-4 border rounded-md">
            <table className="d-table compact">
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
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Table Responsive</h1>
          <p>Table with responsive style.</p>

          <div className="bg-white p-4 border rounded-md">
            <div className="d-table-responsive">
              <table className="d-table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">City</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Nationality</th>
                    <th scope="col">Desc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>25</td>
                    <td>London</td>
                    <td>1234 Street, London</td>
                    <td>1234567890</td>
                    <td>British</td>
                    <td>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jane Doe</td>
                    <td>22</td>
                    <td>Paris</td>
                    <td>4321 Street, Paris</td>
                    <td>0987654321</td>
                    <td>French</td>
                    <td>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>James Doe</td>
                    <td>30</td>
                    <td>New York</td>
                    <td>5678 Street, New York</td>
                    <td>6789012345</td>
                    <td>American</td>
                    <td>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Table Caption</h1>

          <p>Table with caption.</p>

          <div className="bg-white p-4 border rounded-md">
            <table className="d-table">
              <caption className="py-1 text-start text-sm text-gray-600">List of users</caption>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
