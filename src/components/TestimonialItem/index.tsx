import {
  TestimonialAuthorStyle,
  TestimonialFooterStyle,
  TestimonialMessageStyle,
} from './styles'

export interface TestimonialItemProps {
  id?: string
  author: string
  message: string
}

export const TestimonialItem = ({ author, message }: TestimonialItemProps) => {
  return (
    <>
      <blockquote className={TestimonialMessageStyle}>
        <p>{message}</p>
        <footer className={TestimonialFooterStyle}>
          - <cite className={TestimonialAuthorStyle}>{author}</cite>
        </footer>
      </blockquote>
    </>
  )
}
