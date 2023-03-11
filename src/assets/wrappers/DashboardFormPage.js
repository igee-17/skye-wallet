import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 90%;
  margin: 2rem auto;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: 2px 4px 15px var(--form-shadow);

  transition: all 0.4s ease-out 0s;
  :hover {
    box-shadow: 2px 1.5px 8px var(--form-shadow);
  }
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }

  /* new */
  .payment-ids {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    /* flex-direction: column; */
    align-items: center;

    h3 {
      display: flex;
      font-size: 25px;
      align-items: center;
      margin: 0;
    }

    p {
      display: flex;
      /* font-size: 20px; */
      height: 35px;

      align-items: center;
      gap: 20px;
      justify-content: space-between;
      margin: 0;
      box-shadow: var(--shadow-1);
      padding: 0px 10px;
      letter-spacing: 1px;

      span {
        cursor: pointer;
        color: var(--red-dark);
        height: fit-content;
        padding: 0;
        /* font-size: 20px; */
        display: flex;
        align-items: center;

        :hover {
          color: var(--grey-500);
          transition: var(--transition);
        }
      }
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    margin: 2rem 3.5rem;
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .payment-ids {
      grid-template-columns: auto 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .payment-ids {
      grid-template-columns: auto 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
