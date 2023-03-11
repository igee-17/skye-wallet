import styled from "styled-components";

const Wrapper = styled.section`
  .stat-items {
    display: grid;
    row-gap: 2rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 1rem;
    }
  }
  .transactions {
    margin-top: 30px;
    .center {
      box-shadow: var(--shadow-2);
      border-radius: 10px;

      .header {
        /* border: 2px solid blue; */
        background: white;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 10px;
        font-size: 12px;
        text-transform: uppercase;
        /* border-radius: 10px; */
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-shadow: var(--shadow-1);

        p {
          padding: 10px 2px;
          margin: 0;
          /* color: var(--primary-700); */
          color: rgb(100, 122, 203);
          font-weight: 700;
          letter-spacing: 1px;
        }
      }

      .item {
        border-top: 1px solid var(--grey-100);
        border-radius: 0;

        p {
          color: var(--textColor);
          font-weight: 400;
          letter-spacing: 0px;
          font-size: 10px;
          text-transform: none;

          span {
            width: 100%;
            /* border: 2px solid red; */
            display: flex;
            /* align-items: center; */
            justify-content: center;
            font-size: 20px;
          }
          .red {
            color: var(--red-100);
          }
          .green {
            color: var(--green-100);
          }
        }
      }
    }

    @media (min-width: 992px) {
      .header {
        font-size: 15px;

        p {
          padding: 15px 5px;
        }
      }

      .item {
        p {
          font-size: 13px;
        }
      }
    }
    @media (min-width: 1120px) {
    }
  }
`;
export default Wrapper;
