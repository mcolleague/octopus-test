import s from './Table.module.scss'

type TableProps = {
  headers?: string[]
  data: [string, string | number][]
}

const toHeaderData = (header: string, i: number) => ({
  uniqueId: `header${i}`,
  value: header,
})

const toBodyData = ([key, val]: [string, string | number], i: number) => ({
  uniqueId: `row${i}`,
  values: [
    // Only works for 2 columns for now!
    { uniqueId: `row${i}-cell0`, value: key },
    { uniqueId: `row${i}-cell1`, value: val },
  ],
})

const Table = ({ headers = [], data }: TableProps) => {
  const headerData = headers.map(toHeaderData)
  const bodyData = data.map(toBodyData)

  return (
    <table className={s._}>
      {headers.length && (
        <thead>
          <tr>
            {headerData.map((header) => (
              <th key={header.uniqueId}>{header.value}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {bodyData.map((row) => (
          <tr key={row.uniqueId}>
            {row.values.map((cell) => (
              <td key={cell.uniqueId}>{cell.value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
