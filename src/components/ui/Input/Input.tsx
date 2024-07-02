import { FC, InputHTMLAttributes } from 'react'
import inputStyles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
}

const Input: FC<InputProps> = ({ disabled = false, ...props }) => (
  <input disabled={disabled} className={inputStyles.input} {...props} />
)

export default Input
