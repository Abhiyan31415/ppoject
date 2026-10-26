import { skills } from "@/lib/data";

export default function SkillsApp() {
  return (
    <div className="doc">
      <table className="info-table">
        <tbody>
          {Object.entries(skills).map(([group, items]) => (
            <tr key={group}>
              <th>{group}</th>
              <td>
                <div className="tags">
                  {items.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
