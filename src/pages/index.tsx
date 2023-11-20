import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'
import {
  Alert,
  Box,
  Button,
  FormControlLabel,
  Snackbar,
  styled,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import React, { ChangeEvent, useState } from 'react'

import styles from '@/styles/Home.module.css'

export default function Home() {
  const [open, setOpen] = useState(false)
  const [isVisibleTakeOff, setIsVisibleTakeOff] = useState<boolean>(true)
  const [isVisibleLanding, setisVisibleLanding] = useState<boolean>(true)
  const [switchState, setSwitchState] = useState({
    takeoff: false,
    landing: false,
  })

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSwitchState({
      ...switchState,
      [event.target.name]: event.target.checked,
    })
  }

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const StyledInput = styled(TextField)({
    '& .MuiOutlinedInput-input': {
      padding: '0.4rem',
    },
    '& input:valid + fieldset': {
      borderColor: '#030092',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderColor: '#030092',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:invalid:hover + fieldset': {
      borderColor: '#030092',
      borderWidth: 2,
    },
    '& input:invalid:focus + fieldset': {
      borderColor: '#030092',
      borderWidth: 2,
    },
  })

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
                    <StyledInput
                      className={styles.input}
                      required
                      type="number"
                      placeholder="100m"
                    />
                  </div>
                  <div style={{ paddingBottom: '1rem' }}>
                    <Typography sx={{ paddingBottom: '0.2rem' }}>
                      M (airplane weight):
                    </Typography>
                    <StyledInput required type="number" placeholder="100m" />
                  </div>
                  <div>
                    <Typography sx={{ paddingBottom: '0.2rem' }}>
                      P (thrust):
                    </Typography>
                    <StyledInput required type="number" placeholder="100m" />
                  </div>
                </div>
                <div className={styles.take_off}>
                  <div className={styles.header_switch_arrow}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={switchState.takeoff}
                          onChange={handleSwitchChange}
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
                        <StyledInput
                          required
                          type="number"
                          placeholder="1.033 "
                        />
                      </div>
                      <div style={{ paddingBottom: '1rem' }}>
                        <Typography sx={{ paddingBottom: '0.2rem' }}>
                          Airport(name/IATA/ICAO):
                        </Typography>
                        <StyledInput required placeholder="Name" />
                      </div>
                      <Typography sx={{ paddingBottom: '0.2rem' }}>
                        Airport coordinates(lon; lat):
                      </Typography>
                      <StyledInput
                        required
                        placeholder="55.755831; 37,617673"
                      />
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
                        checked={switchState.landing}
                        onChange={handleSwitchChange}
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
                      }}
                    />
                  ) : (
                    <ArrowDownwardOutlinedIcon
                      className={styles.arrow}
                      onClick={() => {
                        setisVisibleLanding(true)
                      }}
                    />
                  )}
                </div>
                {isVisibleLanding ? (
                  <div>
                    <div style={{ paddingBottom: '1rem' }}>
                      <Typography sx={{ paddingBottom: '0.2rem' }}>
                        Cy land:
                      </Typography>
                      <StyledInput
                        required
                        type="number"
                        placeholder="1.033 "
                      />
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
                        <StyledInput required placeholder="Name" />
                      </div>
                      <div>
                        <Typography sx={{ paddingBottom: '0.2rem' }}>
                          Airport coordinates(lon; lat):
                        </Typography>
                        <StyledInput
                          required
                          placeholder="55.755831; 37,617673"
                        />
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
                disabled={!switchState.takeoff || !switchState.landing}
                sx={{ margin: '2rem 1rem 0 1rem', padding: '0.3rem 2rem' }}
                onClick={handleClick}
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
      <>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Successfully!
          </Alert>
        </Snackbar>
      </>
    </>
  )
}
