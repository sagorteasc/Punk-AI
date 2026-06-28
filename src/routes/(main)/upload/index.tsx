import { createFileRoute } from '@tanstack/react-router'
import UploadPage from './-component/Page'

export const Route = createFileRoute('/(main)/upload/')({
  component: UploadPage,
})
