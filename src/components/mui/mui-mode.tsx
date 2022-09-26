import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { FC } from 'react'

const MuiMode: FC = () => {
  const theme = useTheme()
  return <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>
}

export default MuiMode
