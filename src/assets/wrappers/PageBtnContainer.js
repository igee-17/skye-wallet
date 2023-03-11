import styled from "styled-components";

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 0.3rem;
  .btn-container {
    background: var(--primary-100);
    display: flex;
    gap: 0.2rem;
    border-radius: var(--borderRadius);
  }
  .pageBtn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
    @media (max-width: 600px) {
      width: 30px;
      height: 30px;
      font-size: 1rem;
    }
  }
  .pageBtn:hover {
    background: var(--primary-500);
    color: var(--white);
  }
  .active {
    background: var(--primary-500);
    color: var(--white);
  }
  .prev-btn,
  .next-btn {
    width: 50px;
    height: 40px;
    background: transparent;
    border-color: transparent;
    border-radius: var(--borderRadius);
    color: var(--primary-500);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
    @media (max-width: 600px) {
      width: 40px;
      height: 30px;
      font-size: 1rem;
    }
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--primary-500);
    color: var(--white);
  }
`;
export default Wrapper;
