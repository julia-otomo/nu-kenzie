import image from "../../assets/emptylist1.svg";
import image2 from "../../assets/emptylist2.svg";
import "../EmptyList/index.css";

export function EmptyList() {
  return (
    <>
      <h2 className="empty-list__title">
        Você ainda não possui nenhum lançamento
      </h2>
      <ul className="empty__list">
        <li>
          <img src={image} />
          <img src={image2} />
        </li>

        <li>
          <img src={image} />
          <img src={image2} />
        </li>

        <li>
          <img src={image} />
          <img src={image2} />
        </li>
      </ul>
    </>
  );
}
