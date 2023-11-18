import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'
import {
  Box,
  Button,
  FormControlLabel,
  InputBase,
  styled,
  Switch,
  Typography,
} from '@mui/material'
import { ChangeEvent, useState } from 'react'

import styles from '@/styles/Home.module.css'

export default function Home() {
  const [isVisibleTakeOff, setIsVisibleTakeOff] = useState<boolean>(false)
  const [isVisibleLanding, setisVisibleLanding] = useState<boolean>(false)
  const [disable, setDisable] = useState({
    takeoff: false,
    landing: false,
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDisable({
      ...disable,
      [event.target.name]: event.target.checked,
    })
  }

  const StyledInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      position: 'relative',
      backgroundColor: 'transparent',
      border: '1px solid',
      borderColor: '#030092',
      fontSize: 16,
      padding: '0 0.5rem',
      width: 'auto',
    },
  }))

  return (
    <>
      <div className={styles.wrapper}>
        <Box className={styles.box}>
          <div className={styles.border}>
            <div className={styles.request}>
              <Typography className={styles.header}>Request</Typography>
              <div className={styles.border_box}>
                <div className={styles.general_data}>
                  <Typography sx={{ paddingBottom: '0.5rem' }}>
                    General Data
                  </Typography>
                  <div style={{ paddingBottom: '1rem' }}>
                    <Typography sx={{ paddingBottom: '0.2rem' }}>
                      S (wing area):
                    </Typography>
                    <StyledInput placeholder="100m" />
                  </div>
                  <div style={{ paddingBottom: '1rem' }}>
                    <Typography sx={{ paddingBottom: '0.2rem' }}>
                      M (airplane weight):
                    </Typography>
                    <StyledInput placeholder="100m" />
                  </div>
                  <Typography sx={{ paddingBottom: '0.2rem' }}>
                    P (thrust):
                  </Typography>
                  <StyledInput placeholder="100m" />
                </div>
                <div className={styles.take_off}>
                  <div className={styles.header_switch_arrow}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={disable.takeoff}
                          onChange={handleChange}
                          size="small"
                          name="takeoff"
                        />
                      }
                      label="Take off"
                    />
                    {isVisibleTakeOff ? (
                      <ArrowUpwardOutlinedIcon
                        className={styles.arrow}
                        onClick={() => {
                          setIsVisibleTakeOff(false)
                        }}
                      />
                    ) : (
                      <ArrowDownwardOutlinedIcon
                        className={styles.arrow}
                        onClick={() => {
                          setIsVisibleTakeOff(true)
                        }}
                      />
                    )}
                  </div>
                  {isVisibleTakeOff ? (
                    <div>
                      <div style={{ paddingBottom: '1rem' }}>
                        <Typography sx={{ paddingBottom: '0.2rem' }}>
                          Cy take off:
                        </Typography>
                        <StyledInput placeholder="1.033 " />
                      </div>
                      <div style={{ paddingBottom: '1rem' }}>
                        <Typography sx={{ paddingBottom: '0.2rem' }}>
                          Airport(name/IATA/ICAO):
                        </Typography>
                        <StyledInput placeholder="Name" />
                      </div>
                      <Typography sx={{ paddingBottom: '0.2rem' }}>
                        Airport coordinates(lon; lat):
                      </Typography>
                      <StyledInput placeholder="55.755831; 37,617673" />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className={styles.landing}>
                <div className={styles.header_switch_arrow}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={disable.landing}
                        onChange={handleChange}
                        size="small"
                        name="landing"
                      />
                    }
                    label="Landing"
                  />
                  {isVisibleLanding ? (
                    <ArrowUpwardOutlinedIcon
                      className={styles.arrow}
                      onClick={() => {
                        setisVisibleLanding(false)
                        console.log('closed')
                      }}
                    />
                  ) : (
                    <ArrowDownwardOutlinedIcon
                      className={styles.arrow}
                      onClick={() => {
                        setisVisibleLanding(true)
                        console.log('opened')
                      }}
                    />
                  )}
                </div>
                {isVisibleLanding ? (
                  <div>
                    <div style={{ paddingBottom: '1rem' }}>
                      <Typography sx={{ paddingBottom: '0.2rem' }}>
                        Cy take off:
                      </Typography>
                      <StyledInput placeholder="1.033 " />
                    </div>
                    <div
                      style={{
                        paddingBottom: '1rem',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '5.2rem',
                      }}
                    >
                      <div>
                        <Typography sx={{ paddingBottom: '0.2rem' }}>
                          Airport(name/IATA/ICAO):
                        </Typography>
                        <StyledInput placeholder="Name" />
                      </div>
                      <div>
                        <Typography sx={{ paddingBottom: '0.2rem' }}>
                          Airport coordinates(lon; lat):
                        </Typography>
                        <StyledInput placeholder="55.755831; 37,617673" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <Button
                variant="contained"
                color="secondary"
                disabled={!disable.takeoff || !disable.landing}
                sx={{ margin: '2rem 1rem 0 1rem', padding: '0.3rem 2rem' }}
              >
                Send request
              </Button>
            </div>
            <div>
              <Typography className={styles.header}>Response</Typography>
              <div className={styles.response}>
                <div>
                  {/*Колонка с выводом полученных данных, убирай инпуты и делай просто окна с текстом ошибки, так будет проще.*/}
                  <div style={{ paddingBottom: '1rem' }}>
                    <Typography sx={{ paddingBottom: '0.2rem' }}>
                      V land:
                    </Typography>
                    <StyledInput disabled placeholder="100km/h" />
                  </div>
                  <div style={{ paddingBottom: '1rem' }}>
                    <Typography sx={{ paddingBottom: '0.2rem' }}>
                      L land:
                    </Typography>
                    <StyledInput disabled placeholder="100km" />
                  </div>
                  <div style={{ paddingBottom: '1rem' }}>
                    <Typography sx={{ paddingBottom: '0.2rem' }}>
                      V take off:
                    </Typography>
                    <StyledInput disabled placeholder="100km/h" />
                  </div>
                  <Typography sx={{ paddingBottom: '0.2rem' }}>
                    L take off:
                  </Typography>
                  <StyledInput disabled placeholder="100km" />
                </div>
                <div className={styles.errors}>
                  {/*Тут колонка для вывода ошибок, всё тоже самое, что и для колонки с данными.*/}
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  )
}
