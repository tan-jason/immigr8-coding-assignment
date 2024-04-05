import "./tablequestionstyles.css";

const TableQuestion = ({ question, headers, numRows, handleSubmit }) => {
  return (
    <div className="table_question_container" style={{ display: "block" }}>
      <label>{question}</label>
      <form className="table_form" onSubmit={(e) => handleSubmit(e)}>
        <table style={{ marginTop: "30px" }}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: numRows }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: headers.length }).map((__, colIndex) => (
                  <td key={colIndex}>
                    <input type="text" />
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
