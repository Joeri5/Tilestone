import type {NextPage} from 'next'
import Layout from "../components/layout";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  div {
    h1 {
      font-size: 2.5rem;
      font-weight: 500;
      margin: 0 0 1.25rem 0;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      p {
        margin: 0;
        font-size: 0.75rem;
        opacity: 0.5;
      }

      div {

        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          div {
            display: flex;
            flex-direction: row;

            .city__wrapper, .type__wrapper {
              display: flex;
              flex-direction: column;
              gap: 0.25rem;

              label {
                font-size: 0.75rem;
                opacity: 0.5;
              }

              select {
                border: none;
                border-bottom: 1px solid black;
                background: none;
                font-size: 0.75rem;
                font-weight: 400;
                border-radius: 0;
                -webkit-appearance: none;
                background: transparent;
                background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /></svg>");
                background-repeat: no-repeat;
                background-position-x: 100%;
                background-position-y: 10px;
                background-size: 15px;
                margin-right: 2rem;
                padding: 0.5rem 0;
                width: 100px;
                color: black;

                :focus {
                  outline: none;
                }
              }
            }
          }

          button {
            width: 100%;
            border: none;
            background-color: black;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.75rem;
            font-weight: 400;
          }
        }
      }
    }
  }

  img {
    width: 100%;
    height: 12.5rem;
    object-fit: cover;
    object-position: center;
    margin: 2rem 0;
  }

  .featured__wrapper {
    p {
      font-size: 0.75rem;
      opacity: 0.5;
      text-align: center;
    }

    .logo__wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      justify-items: center;
      margin: 1rem 0;
      align-items: center;

      .company__logo {
        opacity: 0.5;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: fit-content;
          object-fit: fill;
        }
      }
    }
  }

`;

const SaleWrapper = styled.section`
  div {
    margin-bottom: 1rem;

    h3 {
      font-size: 2.25rem;
      font-weight: 500;
      margin: 0 0 1.25rem 0;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      p {
        margin: 0;
        font-size: 0.75rem;
        opacity: 0.5;
      }

      div {
        a {
          display: flex;
          align-items: end;
          gap: 0.75rem;
          font-weight: 500;

          span {
            svg {
              width: 1rem;
            }
          }
        }
      }
    }
  }

  .image__wrapper {
    .item__wrapper {
      img {
        width: 100%;
      }
    }
  }
`;

const Home: NextPage = () => {
    return (
        <Layout>
            <HeaderWrapper>
                <div>
                    <h1>Discover a place you'll love to live</h1>
                    <div>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Beautiful homes. Incredible
                            locations. <br/> Pricing that makes sense.
                        </p>
                        <div>
                            <form action="">
                                <div>
                                    <div className="city__wrapper">
                                        <label htmlFor="City">City</label>
                                        <select name="City" id="City">
                                            <option value="City">City</option>
                                        </select>
                                    </div>
                                    <div className="type__wrapper">
                                        <label htmlFor="Type">Type</label>
                                        <select name="Type" id="Type">
                                            <option value="Type">Type</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit">
                                    search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <img
                    src="https://static.dezeen.com/uploads/2020/01/semi-semi-house-peter-mcneil-clarissa-nam-comn-architects-toronto-canada_dezeen_hero-a-1704x959.jpg"
                    alt="header image of luxary house"/>
                <div className="featured__wrapper">
                    <p>Featured in</p>
                    <div className="logo__wrapper">
                        <div className="company__logo">
                            <img src="https://media.graphassets.com/P0ImFYvTIKlAcwoqoOjw" alt="forbes logo"/>
                        </div>
                        <div className="company__logo">
                            <img src="https://media.graphassets.com/WeGQGtkTMGq5Pm1jeMHg" alt="cnbc logo"/>
                        </div>
                        <div className="company__logo">
                            <img src="https://media.graphassets.com/xpHHe8c0RWWmWB3E4zti" alt="business insiders logo"/>
                        </div>
                        <div className="company__logo">
                            <img src="https://media.graphassets.com/FOqaFBmeThu1IaBWrF5j" alt="bloomberg logo"/>
                        </div>
                        <div className="company__logo">
                            <img src="https://media.graphassets.com/NeXG1XKlQEueiO1IqRTI" alt="inc logo"/>
                        </div>
                    </div>
                </div>
                <hr style={{margin: "2.5rem 0"}}/>
            </HeaderWrapper>
            <SaleWrapper>
                <div>
                    <h3>New objects
                        in sale</h3>
                    <div>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Take a deep dive and browse home for sale,
                            original neighbourhood photos, resident reviews and local insights to find what is
                            right for you.</p>
                        <div>
                            <a href="#">
                                View All Products
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                                         className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="image__wrapper">
                    <div className="item__wrapper">
                        <img src="https://media.graphassets.com/lTTrMBT3TaOyDmocg3z8" alt=""/>
                    </div>
                </div>
            </SaleWrapper>
        </Layout>
    )
}

export default Home
