import React from "react";

const NewsTable = ({ headlines }) => {
  if (!headlines || headlines.length === 0) return null;

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Headline</th>
        </tr>
      </thead>
      <tbody>
        {headlines.map((headline, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{headline}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NewsTable;
