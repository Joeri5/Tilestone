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
    .items__wrapper {
      display: flex;
      flex-direction: row;
      width: calc(100vw * 0.8);
      overflow-x: scroll;
      scroll-snap-type: x var(--tw-scroll-snap-strictness);
      --tw-scroll-snap-strictness: mandatory;

      .item__wrapper {
        scroll-snap-align: center;

        img {
          width: calc(100vw * 0.8);
          height: 30vh;
          object-fit: cover;
          object-position: center;
        }

        div {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;

          h4 {
            font-size: 1.25rem;
            font-weight: 600;
            margin: 0;
          }

          p {
            font-size: 0.8rem;
            opacity: 0.75;
            margin: 0;
          }

          h5 {
            font-size: 0.8rem;
            font-weight: 500;
            margin: 0;
          }
        }
      }
    }
  }
`;

const ExpertiseWrapper = styled.section`
  div {
    div {
      .text__wrapper {
        display: flex;
        flex-direction: column;

        .available__wrapper {
          display: flex;
          font-size: 1rem;
          align-items: center;
          gap: 1rem;
          font-weight: 500;

          ::before {
            content: "";
            display: block;
            width: 5rem;
            height: 2px;
            background-color: black;
          }
        }

        h3 {
          font-size: 2.25rem;
          text-align: right;
          font-weight: 500;
          margin: 0;

          transform: translateY(-2rem);
        }
      }

      img {
        width: 100%;
        height: 12.5rem;
        object-fit: cover;
        object-position: center;
      }

      .text__under__wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        p {
          font-size: 0.75rem;
          opacity: 0.75;
        }

        .info__wrapper {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          justify-content: space-between;

          .beds__wrapper, .bath__wrapper, .finished__wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            p {
              margin: 0;
            }

            h5 {
              margin: 0;
              font-size: 0.75rem;
              font-weight: 500;
            }
          }
        }

        .description__wrapper {
          display: flex;
          flex-direction: column;
          gap: 1rem;

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
  }
`;

const Home: NextPage = () => {
    return (
        <Layout>
            <HeaderWrapper>
                <div>
                    <h1>Discover a place you&apos;ll love to live</h1>
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
                    src="https://media.graphassets.com/eHvDfRCTNmq8drMcoxsV"
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
                    <div className="items__wrapper">
                        <div className="item__wrapper">
                            <img src="https://media.graphassets.com/lTTrMBT3TaOyDmocg3z8" alt=""/>
                            <div>
                                <h4>Summerhill</h4>
                                <p>218 South 200 East Salt Lake City, Utah 84111</p>
                                <h5>Townhouse</h5>
                            </div>
                        </div>
                        <div className="item__wrapper">
                            <img src="https://media.graphassets.com/ImAKh4ppRZKfBdjOaESX" alt=""/>
                            <div>
                                <h4>HCD House</h4>
                                <p>464 Jordan Parkway, South Jordan, Utah 84095</p>
                                <h5>Mordern house</h5>
                            </div>
                        </div>
                        <div className="item__wrapper">
                            <img src="https://media.graphassets.com/eHvDfRCTNmq8drMcoxsV" alt=""/>
                            <div>
                                <h4>Semislat House</h4>
                                <p>66 South 600 West Salt Lake City, Utah 84101</p>
                                <h5>Modern House</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{margin: "2.5rem 0"}}/>
            </SaleWrapper>
            <ExpertiseWrapper>
                <div>
                    <div>
                        <div className="text__wrapper">
                            <div className="available__wrapper">
                                Available now
                            </div>
                            <h3>Hive <br/> Rose House</h3>
                        </div>
                        <img
                            src="https://media.graphassets.com/we5qGJ87TUewVRniaGxd"
                            alt=""/>
                        <div className="text__under__wrapper">
                            <p>666 Noth 400 West Centerville, Utah 84014</p>
                            <div className="info__wrapper">
                                <div className="beds__wrapper">
                                    <p>beds</p>
                                    <h5>1 - 4</h5>
                                </div>
                                <div className="bath__wrapper">
                                    <p>bath</p>
                                    <h5>1.4 - 3.4</h5>
                                </div>
                                <div className="finished__wrapper">
                                    <p>finished sq sf</p>
                                    <h5>924 - 1620</h5>
                                </div>
                            </div>
                            <div className="description__wrapper">
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Modern architecture in well - established neighborhood offer homeowners a chance to
                                    have the best of both suburban and urban worlds.
                                </p>
                                <a href="#">
                                    See home
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
                </div>
            </ExpertiseWrapper>
        </Layout>
    )
}

export default Home
