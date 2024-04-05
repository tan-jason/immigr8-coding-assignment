import "./tablequestionstyles.css";

const TableQuestion = ({
  question,
  headers,
  numRows,
  handleTableInputChange,
  fields,
}) => {
  return (
    <div className="table_question_container">
      <label>{question}</label>
      <form className="table_form">
        <table className="table_question">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: numRows }).map((__, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: headers.length }).map((__, colIndex) => (
                  <td key={colIndex}>
                    <input
                      type="text"
                      onChange={(e) =>
                        handleTableInputChange(
                          rowIndex,
                          fields[colIndex],
                          e.target.value
                        )
                      }
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default TableQuestion;
