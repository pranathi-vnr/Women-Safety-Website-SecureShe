import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import Footer from './footer';
import Header1 from './Header1';
function Home() {
  return (
    <div>
    <Header1 />

      {/* Hero Section */}
      <div className="bg-light text-center py-5">
        <div className="container">
          <h1 className="text-warning">Your Safety, Our Priority</h1>
          <p className="text-secondary">
            Stay informed, stay safe. Explore real-time heatmaps, connect with resources, and take charge of your safety anytime, anywhere.
          </p>
          <Link to="/locations" className="btn btn-warning btn-lg mx-2">
            Explore Unsafe Areas
          </Link>
          <Link to="/login" className="btn btn-outline-warning btn-lg mx-2">
            Join Our Community
          </Link>
        </div>
      </div>
     

      {/* Features Section */}
      <div className="py-5">
        <div className="container">
          <h2 className="text-center text-warning mb-4">Features</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQKF2PkMvuackEyyakHwLcC_zfGPg4igi2Q&s"
                alt="Heatmaps"
                className="img-fluid mb-3 feature-image"
              />
              <h4>Real-Time Heatmaps</h4>
              <p className="text-secondary">Locate potentially unsafe areas with real-time data and community feedback.</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtgWWtljEYLYDsVNMvWQ2_eRrdBOtX1R8Wg&s"
                alt="Emergency SOS"
                className="img-fluid mb-3 feature-image"
              />
              <h4>Emergency SOS</h4>
              <p className="text-secondary">Quickly alert your trusted contacts with live location sharing.</p>
            </div>
            <div className="col-md-4">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUSEhIVFRUVEhcVFhYVGBgXFRUVFRcXFhUYFRcYHSggGBsmHRUXITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGy0mICUtMC0vLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgMBBQYEBwj/xAA/EAACAQIEAwUGBAUDAgcAAAABAgADEQQSITFBUWEFBiJxkRMygaGxwQdCUtFicoLh8BSywiNDM1NzkqLi8f/EABsBAQADAQEBAQAAAAAAAAAAAAABAgMEBQYH/8QANBEBAAIBAwIDBgQGAgMAAAAAAAECEQMEIRIxBUFREyIyYXGRobHB0UJSgeHw8SMzBhRT/9oADAMBAAIRAxEAPwD7jAQEBAQEBAQEBAQEBAQECuqYFd4CAgZvAtTaBKAgICAgICAgICAgebOCSARcHUcRfUX5QmYmIyzCCAgSVrQLoCBFzYQK/aGAzmAzmA9oYFiteBKAgIEcwgSgICAgQqwKoCAgIF67QMwEBAEwIq4MCUBAQEBAQPNkAJIAuTqeJtoL84TMzMYZhBAQLKacYFkBAqxSZkZblbi113F+I6yJWrPTaJxlWBJVlmAgIFyLaBKBFmtArZ7wIwL1NxAzAQECNTaBTAQEDje/ff2n2bakiiriGF8l7LTU7NUI114KNT0GsmIyra2HBYf8Ycer3enh3XigVkNuQbO1vOx8pbphT2kvrvdLvLR7SoCtRuLHLURrZqbjUqbb7gg8QZWYw0ict1ISQK6pgVwJK9oFqteBmAgICBQ2/wAYFdaqEGZjYDc8up5DrwkTOE1rNpxCpMR4mDWFqgRepKK1up1PpGV5pxEx6Z/GXrprxks1sBAQI1NoFMCuvVCKznZVLHyAuZEzhatZtaIjzWGSqtppAnAw20CiAgIE6RgWwEBAw20CiAgfGPxF/EPEf6l8Pg64p0qRyM6AF3ce/wCOxygHw6WN1OvAXiGdr84h82q1SxZ2Ysx1Z2JLMx3JY6k2vqZdk6/u9+HeJrFHr2o07hip1qsu9so9245m45Tl1N1WvFeZdulsr25txDu+53Z1PsjHFM5FDGqqU8593EUyzLTJ45lZ8p45SN7XjS1faRz3W1tCNKeO0vp01YkChjeBiAgAYFqPAnAj7QQHtBAqMDzVlI8WZzqLIAtjc2/TcDreQ1rMTGMR9ef3SL3zBQdHCEi1xdVOYA7jxAH4xkiuMTPnGfxn9npoUyu7lvMKLf8AtAiFLTE9owtkqkBAjU2gedybaC55E2+cJjGeXlZA2cVAFLU8rANe6G4udB1185Xv3bZmuOjnn081qsQzZFzm4zXe2U2Fha2gsb/GT9FcRNY6uPTh7hJZMwMNsfKBRAQEAIF4MDMBAQOZ7794x2bhWr5c7ZhTpqTYM7Xtc8gAxPlJiMomcQ+O1PxQ7SdaiM9O1Smy+FMrUyykZqbA3BHC95bpZdcuLXQaeXlLqNr3d7KrYmqrU6bOtJ1eoeAVSGIudLkA2Ey1L1rHPm20dK17cR2fb+y+0BXpLVsFD+7Y5gQdiDYXvPKtXE4e5W+Yy5Pv7W9pgsVeoGNGtSIyoUNI+0UWLZjrlccjY32InRt4xqR83JupzpW+T6d3SrVnwOFevf2rYak1S+jFigJLDgefW87HDDZ1DpA8y5sxvbLplte/W/ykLT04jHfzWSVSAgZVbwL4Hkp1Cc11K2awvbxDTUWO37SIWtWIxzn9PknJVIGVECdJFBYj8xufOwX6KITNpmIifL/ayEEDFoGYEam0CmBXVwudXAsCwsTz0sLyJjhpTUmtomfJ6wove2vPjpt9TJZswECqlTIBuxa5JFwBYHZdOUiFrTE9owhJVICAgWUjwgWQEBA5D8TOwXx2CqU6QvVRlrU1/UyXBUdSjOB1IkxPKtozD86k5SVIswuCDcFSOBDag9JqwQOmnX6f/sD7D+FVRWwAUAXWtUV+rEhxf+l0Hwnmbr/sezspidJ1NaiuQotlsugUe5b3SFHIgEeU54nnLpmIxho++hprgaj1aYCl6D1VAF2HtqOcG3vGwtNtD/shjuMeymX0rD1lqIroQysoZSNirC4I6WM73mIubmBGAgYDA3HLf6wnCQF4QuUWgZgeeAgIACBeq2gZgICAgIGLQMwEBAQECFROMCqAgIAGB6BAQECmpvA1fbHYdDFU6qPTW9WmyGoFX2gDC1w1r3GhHlJRMZfnftnuni8JiFw9Wnq9QU6VQaUqpY5VKudBe+x1EvNoiMyz6JmcQ+wd1ewxgcOtHNma5Z22zO29ugAAHQCeTq6ntLdT29DS9nTpe9sEhqitrnC5bhiAV10K3sdzvzlMzjDfqnGGk774CvjKIweGTPUquhbWy06aMGL1DwGZVHM62BsZ0bWvv9Xo4d5b3On1d72J2cMHhaOGDFhRopSzHdsigX6bbTtcD0wEDz16t7qM4PBghIB87WIkTPk0pT+KcY9MwNTKlmBtcqTZSxsosQAOdusYItExEY9Xpw1UMNA39Ssv+4C8Zyras17/AJ5XyVSB54FVSrtlyk3FxfW3G3UbyMrxXznP2Qo5l0I0Lsbk7Lw8yf3+Lsm3TP2h7aYHnJZpwEBAQEBAQEBAQEBAQKqicYEICAgWUjwgWQECurArgV4kXRh/CfW2krf4Z+i+n8cfWHPst55T2YnCCYd2IUVCMxtewJF9Li+hI6yaVmbRGUal4ikzEc4dF2X2YmHUhbszau7m7uRxY/QAADgBPVrWKxiHi2tNpzK+odZKEYCBCrTzDLc6720JHL47RK1bdM5KeGuXzXtnVlsbEWVdrdQfnIwvN4iK49Jz95/R65LIgV1C91ygEXOYkkECxtlFtTe0haOnE5/orkqqXo6gqFBzXJsL24gef7yMLxfjE5+5SpGoLtawqOCpUEMoYqN9joDfzkd15xSePSPyh66VJVFlUKOQAA+Usym0zzKcIVmr4wlm1Ute3hFiBYnnrt0MjK3T7vV/tZJVICBjMOcBmHOBUW1vAmtTnAnAQEBAQKXW0CMBAyptAvgIHNdrd8KFJmpgM7KbHLYLcbi5PDbaY21q1nD1dt4Pra1YvmIifXv9mhxPfeqf/Dpov812P2EyncT5Q9PT8B0o+O0z9OP3aHtTvFi6iFjWfQh8tOyZgjB8nhtfMFy2POVjVtM4mWut4ZoV0LTp15xmPXjl1+BxlOvTWrSYOjC6sNj+x6cJz2rNZxLy62i0Zh4u9OIalg8Q9NijrQfIwNir5SEII2OYiX0vjhXVjNJhqcN3pxdM29qWHJwG89d+XGaRrXjze5fwva346cfRusJ35/8ANo/FD/xb95rXcesPP1fAf/nf7/vH7Oj7I7YpYoE0ybruraMOtuXWbU1Iv2eNutnq7aYjUjv5x2bCXcq2mkCcBAQECo0+sCKm0CYqdIFkBAQEBAwYHko1lcXU3FyPipKn5gyInK16WpOLLJKpAQJ0yYFsBAQEAYFLraBGAgTFUKpLEADck2AHUmExEzOIcj3j74qAaeGNydDU4Lzycz1285z6mvHar3th4PaZi+vGI9PX6uCU6nzB9R+4M5ZfSU7zBUOluenr/a5+EQak8YTEhbHDgnxNbA16i0Kr0rOfcYgEHVcy7NoRvPUrFdSkTaMvz3c0tttxelZxifwnmF1Tt7F4tqdKtXd0NWn4dAp8QtcKBfnrI9nSkTMR5GjqamprUrM596Pzdqx1HxH3+0819/PFoSEhot7Mxj0WWpTbKw16a6kEcR0lotNZzDnto01tLpvHEvp3dztqni1uPC6jxJy6jms7dPUi8Pj99sb7W+J5rPaf8826mjhICAgQZ7QKybwMQEC2mYE4CAgIGDAogICAAgXKtoEoEBU5wJwEBAwReB56pCAliAALknQAcyeEZTETacR3cp2t30RbrQXOf1tcJ8Bu3y+M5768RxV7u18Dvf3tacfKO/8Ab8XJdo9qVsQb1ahbkuyjyUafGc1r2t3e/t9po6Ef8dcfPz+7xyrpQPvDqLfEaj6tJ8mc8XKqAjUkW1uCQRoRw84hN6xaOXn7MZipLEm7aX5AAfW8mzLbzMxMzPm5vvnhrVEqD865T5r/AGb5Ts2ts1mHzP8A5Bo9OtXU9Yx/WP8Abyd18L7TEKeFMFz57L8zf4TTcWxT6uTwbQnV3UT5V5/SHatcsBcWGo01PA8eo4cZ5/k+znqm8R/VKsfCbcjbz4SI7r6nwynaQvC3C4l6TB0Yqy6gj/NR0kxMxOYZ6ulTVrNLxmJfRO7nepMRanUslXb+F/5TwP8ACfnOzT1YtxPd8nv/AAq+3zenNfxj6/u6SbPJYJtArZ4EICAgIEkOsC6AgICBgwKIEHqWIFjqbXAuByvy84TEZiVWFqk2DA5iXO2gAcgXO21tJEL3pEcx24/J7kW0lmlAQKDAhQr3vYEWYrqLXtxHMa7yIla1enHzehWvJVSgefH41KFNqlQ2VRrz5AAcSTItaKxmWujo31rxSkcy+Zd4O8FTFtY+GmD4UB9C3M/IfOcOpqzb6Psdj4dp7WM97ev7NPM3oECdKiz+6rN/KCfpERM9lL6lKfFMR9ZXYvsutTT2r0mRVZfE/hF2OQDxWJPi2Ev0WjnDlneaFrRWtomc+XLysL6GUdsxmHjoMaJyN7pJyt1JvY+stPLmrnSnpns8verDZ8OxA1Qhx8NG+RPpNdvbpu4fG9D2u1mY715/f8Ge7/Z/+npeIWd7M3MfpX4X9SY19Trtx2T4Vs//AFdDNvinmf0j+n5tmi8TufkOQ/z7TGZenWvnPdDE1AoBY2GZdfjf7RVXVtERGfVaDeQ1ickCNKurbMDJxKkXrPES7fur3rOlHEG99EqHe/BXP39ec6NLW8rPn/E/CoiJ1dGPrH6x+32diTOp84QEBAQECSW4wLoCAgIGDAogecUcrDKGN73LOxAHQEm5Jt8/jGMS1m/VWc4+0MoDVCnUKQblWKsCNttwdfLT4O6ZiNOZjz+j2UqeUWBJ8ySfUyWUzmcpwhWKylimYZgASt9QDcAkctDGVumcdWOEDCrEBAVsUtNSzsFVRck6ASJnHMrUpa9orWMzLX9sUlxuDf2RDZkDJbiykMB0NxaUvHXTh2bW9tpuonUjGJxP5PlU4H3CupSDb/QH6gyYnDO+nFp5dD3Jr0qdUpVCEOAELIuj358L7acZto2jOJeV4rt9WdHq05njvjjj6Rw+ivXSkrO5CIqlmJ0VQNSTynX2fKRE2nEczL4t3372tj6wyXFCk16anQsR/wBxhzOwHAeZnNe3U+h2e1jQjM/FPf8AZde85n0cdmHQEWIuDwhExExiVSgr4d14HiNdjz6H/DbuymJrGPJaBc39P3/z7yF8ZnMpSF2r7efwqObX9AR/yl6OXdTxEN5+FuDpYirXoVRmBpK66kFSjEMVI2v7RfQTelYtxLxt5udXQit9Occ8+jb97+6Rw9Jnp1QVJAs+j6nZeDG1zw2lb6UU5y22viltz/xTX3vWO39nN06VgADlA2C/cnfz0mMy9iunMRjt9FoEq0iMPqfdyozYaiXN2KDU7kXOUn4Wnoac+7GXwu/rWu5vFO2f9/i2Uu5FdKnlv4ibtfW2m2gsNtJEQta2ccYWSVSAgTprxgWwEBAQBgU+zMCSJzgSRABYaCEzMzOZShBAibA3trz/AM84FJgICBF0DAggEEWIOxB3vCazNZzBQQIAqgBQLADYAbSMYTa02mbWnMy4Xvr2L7NziKY8Dnxgflc8fI/XzE5dbTx70Pp/B997SvsbzzHb5x/b8nLTne6QI96e3MTXoJSZ7009+27kHwmoeIGnx1Nza23tJmMS8e2w0tLUtq0j+30clA6fAPmpof4QPTT7TK3d6mjOaQ9EhohU29PrJjupqfDKchcgaPt57uo5L9T/AGE0p2cG5n3sNt+G2PXD432jtZf9PUU//FhYcT4JrS0ROZeZvNG+tpxSkZnMfq2/bfbL4uoXOijRU/SOvU8/tMtS82nl6mw2lNtp9Md/Of8APJrpm7nq7MwD4iotNNzueCrxY+UtSs2nEMNzuKbfTnUt5fjPo+sUKQRVRdAqhR5AWE9CIw+Cveb2m0955TkqkBAhSqBr24MV+I0MQmazC1FvCF0BAQEBAQEBAQEBAQMFRAgacCJQwIwECFakrqVYAqwsQdiDImM8LVtalotWcTD5r3k7DbCvcXNJj4G5fwt1+vrOLV0+ifk+z8O8QruaYn4o7x+sNJUPAbn5Dif84kTOHdeZ7R3lOjQaofZU1zGx04bE2ueJ68+ou+csdXUrp1n0j/Pu5bF4Z6TFaiFG5MLenMTWJy4ImJ5ht+xqv/TseDEeuot6mUtHLu294inLYiUdUTlGrtJjupq/DKchcgc12m96rnrb0AH2mtezzNac3lvuwexa3smqmnYaWJ0dl42XkN+spaYTobjTrbpnz81jrxG/yI5HpIiXfavnHdZQUuQqglicoXjmOwjHOIR7SsVm1uMd/k+n92ewRhaetvaNYufoo6D5mdulp9EfN8b4hvp3Wpx8Mdo/VuhTE1eekBAogearckZ1AAYENnN817LYW43ta+t7Sv1bVxEe7M59Mf3GUAjLqczELmsC35vMjXTz5SURme/bEeXk9tBmI8S5Tyvf5xDO0RE8SskoICAgICAgICAgICBRUqEmw0ta97i9mF7aa6X+UhaIjzTo1cwv9jb4EjUdZKJjCyEMEQImmIGh7z95aHZ63qNmcjwUl99up/SvU/PaVteK93Roba+tPu9vV8d7d7y4jGVRUqNYKfAi+4g6DieZO/ynNa3V3fQ7bQrt49zv6oVsfVdAaCqamYBlb9OtytyONpWla59/s6dxrbiaRbbxE2zGYn0dt3PFPx2YGoDZl4gGxv8AE/S0wsw315zFPL9XQ1qKuLOqsOTAEehlcuDOHI94OzKNF19kgpkgk5dt7CynQceEvFpet4fE3rMzLXw9Rrw1f2tQOF9jYZCPev4f/t8pr7nTGO7zs7r214vEezxx6thMnokDoO7PY+HCCsEDVCTdm8RDXPu8FkWtLwN31V1JrPZ0Uq42g74d0qvsWqUCVLA5go1S/wCYAfO2151V0pri0xn5OjR8Q9tS236umZjFbNz3B7rNhaaVMQc9fLa5/KOv8VtL/uZvSkRPVh5273t76caMWzEd7fzT+0f3djNXmkBA88DHswxGmxuOhsRf0J9YTEzHZLD4fKLGx8bMOmZiR9ZEQte/VP8ASI+0YXyVCBWaZzhsxyhSMthYkkWN99LH1kLZjpxjn1WSVSAgICAgICAgIEKlINvzBvx0Ib6iExMwkBaEMwI1KgUFmIAAuSTYADiSdoIjL513s/EpUvSwVnbY1iPAP/TB949Tp5zG2r6PV2/h0z72rx8vN8vxOIeqxeoxd2N2Zjck9TMcvYrWKxisYhVIWSRypBBsRsYImY5hZQxT03FRGKuDfMN7nfz8owi0dXd9C7u98Er2p1rU6mwOyOeh/Keh+ExtTHZx6mjMdnn7wVs9ZrbKAvpv8yZEPY2NOnRj58tdJdiFXYya92er8EpyGhA3ndjFhWamTYN4hfmN/l9JEw8zxHSzEXjy4bvur2ymKxj06YDU6NK5f9VRmAXL0AD68fhr0bfT5zLwt7WaaUZ85dtOx5JAQEBAxaBkCBB3tAj7SA9pAe0gZFSBZAQMNtApzmAzmAzmAzmAzmAzmAzmAzmBy/eDv7hsJdVb21UfkpkWB/jfYeQuekpbUiHZobHV1eZ4j5vl3eLvViccbVXtTvpSTRByvxY9T8pha8y9rQ2uno/DHPq0co6CAgickBA9nZFLNVHS7em3zIkWnhtoVzeHRzJ6RA19LEVWqVVellRfcf8AV+/PpNZrWIiYnl50a+vbU1KXpisdp9WwmT0SAgdd+FvZ3skxFW1vaVgq/wAlNcwt8ajD+mduh2y+Q8ZnGtFPT9XcZjNnkGY84DMecBmPOAzHnAZjzgMx5wK2DFgbjLY3FtSdMpBvpbXhxkea0dPTOY5TkqkBAyBeBcBaBmBhtoFAECL1Au5A8yB9YTETPZ46/bOGT38RRXzqIPvI6oXjS1J7Vn7PDV734Bd8XSP8pLf7QZHXX1axtNef4JeGt+IXZ67VWb+Wm/3AlfaVaR4frz5fjDw1vxPwY92nXb+lF+ryPaw0r4Zqz3mIa3G/ipp/0cNrzqP/AMVGvrInW9IbU8L/AJrfZyHbPezGYu4q1SEP5KfgT4gat8SZnN5l36W00tL4Y59ZaSUdJCGL8v7ScK9WezNoymK+ckhYhBA2/YCe+3kPuftKXdm1rzMtxKOwgRqbHykx3Z6vwSlIaEBA+hdwnLYYj9NVh6hW/wCRnZt/gfI+N1xuc+sR+ro5u8cgICAgICAgIES4uBxIJA6CwP8AuHrCcTjKQEIXItoEoCAgaHvF2BTxqZXZ0Ye69NiCOhGzDofhaVtXqb6GvOlbMRE/V8r7a7gY2gSVT/UJ+qnq1utM+K/QZphbTmHtaW/0b9+J+f7/AOnL1aRQ5XUo36WBVvQ6zN2xOYzE5RgICAgIJnDElGZ8jLz1/wA5RlHT68syFiAgICBv+xFtTvzYn6D7TO/d6G2j3GwlXQQIvsZMd1b81lK0hYhGYRLDmPWMHVHq+j/h5TthmP6qzEdRlUfYzt0I918l43eLbmMeUR+rpyJs8dE04FbrYXOw1PlAxAQEBAQKq1W2mVjf9I/vImV60z5xH1VjDnwtnOYIyAkC/jKG5G1xkEYW645jHGYn7Z/dfhawJtZ723ZSPna0RKtqY54/o9UlQgICBQ41gYgVYnDJVGWoiuOTqGHoYmMpraa8xOGhxncbs+rvh1Q86Ran8lOX5Sk6dfR1U32vX+L78uf7Q/CpDrh8Q69Kqhh5ZlykehlJ0Y8nXTxS38dfs4vt7uji8EC1WldB/wBymc6fHQFf6gJnakw9DR3elq8Vnn0lopR0kIICAgICAgAYInLb9liqyeFgACRqPieB5ylsZdejF5rxPD0PRr/rHD69FjML2pqfzMHC1v1+jMI6oR7K/r+LyY+nURLlzqbe+x/zaWicstXTmsZn81xwFTp6yvUv7CyB7Pf9I35jkZPUidCeOD/QVP0/MfvHUn2NvR9r7li2Bw6ncUh9TOzT+GHyG+jG4vHzbuXcpA82LXckZlytcbflIOt9b8pEr1nyWUUYXva1zYak78ydYROEjTElVE04ESsDEDDC4ghWmDFwLeD2bKQdb3K7330BkYa+04mfPOfzetFsABwFtSSdOZO8lnM5nKUIV4jPl8GXNce9e1ri+3S8iVq9Ofe7fJZJVf/Z"
                alt="Community Reviews"
                className="img-fluid mb-3 feature-image"
              />
              <h4>Community Reviews</h4>
              <p className="text-secondary">Read and share safety tips and reviews about local areas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Tips Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center text-warning mb-4">Violence against women</h2>
          <p className="text-secondary">
          Violence against women (VAW), also known as gender-based violence and sexual and gender-based violence (SGBV) are violent acts primarily or exclusively committed by men or boys against women or girls. Such violence is often considered a form of hate crime, committed against women or girls specifically because they are female, and can take many forms. 
          </p>
          <p className="text-secondary">VAW has a very long history, though the incidents and intensity of such violence have varied over time. Violence against women may arise from a sense of entitlement, superiority, misogyny or similar attitudes in the perpetrator or his violent nature, especially against women. 
          </p>
<p className="text-warning mb-4">Some terrifying stats:</p>
<ul>
    <li className="text-secondary">Across their lifetime, 1 in 3 women experience a form of violence in their lifetime. </li>
    <li className="text-secondary">On average more than three women a day are murdered by their husbands or boyfriends in the United States. </li>
    <li className="text-secondary">One in five women are sexually assaulted in college.</li>
    <li className="text-secondary">A woman who has suffered a strangulation incident is 750% more likely to be killed by the same perpetrator.</li>
    <li className="text-secondary">Four out of every five stalking victims are women.</li>

</ul>
<p className="text-warning mb-4">Safety Tips:</p>
<ul>
    <li className="text-warning mb-4">Have a Plan</li>
    <p className="text-secondary">When you are going out, whether it be alone or with a group of friends, it is best to have a plan in place. Knowing your surroundings, such as who and what is in the immediate area, is one of the most crucial safety tips to remember. Making a habit to pay attention to what is going on around you will help you become more aware of your environment. In addition, as an extra level of precaution, let someone outside of your group know your whereabouts and what you have planned for the day/evening.</p>
    <li className="text-warning mb-4">Ping Your Location </li>
    <p className="text-secondary">Smartphones are not only a great tool for taking photos, sending messages, and sharing news, but they can also be lifesavers. Most smartphones have a great emergency feature that allows users to ping their location to anyone in their contact list. This feature is easy to setup and will draw attention to the user should they find themselves in an unsafe situation. </p>
    <li className="text-warning mb-4">Tools for protection</li>
    <p className="text-secondary">When it comes to selecting a self-defense device, it is important to choose one you feel most comfortable carrying. Items such as pepper spray, a safety whistle, and a mini flashlight, are great options to have on hand when going out. </p>
    <li className="text-warning mb-4">Create Boundaries</li>
    <p className="text-secondary">Regardless if you are out alone or with a group of friends, if you ever feel uncomfortable or unsafe with someone’s attention toward you, do not be afraid to put distance between yourself and the individual. There is nothing rude about protecting yourself in a potentially unsafe situation. At the end of the day, always remember to follow your instinct!</p>
    <li className="text-warning mb-4">Buddy up</li>
    <p className="text-secondary">Do your best to not walk alone. The more the merrier in the terms of safety! </p>
</ul>
        </div>
      </div>

      {/* YouTube Tutorials Section */}
      <div className="py-5">
        <div className="container">
          <h2 className="text-center text-warning mb-4">Safety Tutorials</h2>
          <div className="row text-center">
            <div className="col-md-6">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KVpxP3ZZtAc?si=DKYaEtJI49wC-hoC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <h5 className="mt-3">Self-Defense Basics</h5>
            </div>
            <div className="col-md-6">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0COiMYAM8KA?si=VliaBP2kCpRzlDqS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <h5 className="mt-3">Using Safety Apps</h5>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
