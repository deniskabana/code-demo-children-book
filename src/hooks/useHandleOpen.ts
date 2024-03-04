import { useCallback, useState } from 'react'

/**
 * ### useOpenHandler
 * A hook to handle open/close state with build-in state,
 * open/close handlers, a setter and a factory function for a setter.
 */
export const useOpenHandler = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const setOpen = useCallback((open: boolean) => setIsOpen(open), [])
  const generateSetter = useCallback((open: boolean) => () => setIsOpen(open), [])

  return { generateSetter, handleClose, handleOpen, isOpen, setOpen }
}
