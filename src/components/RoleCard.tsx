import type { ReactNode } from 'react'

type RoleCardProps = {
  title: string
  children: ReactNode
}

export function RoleCard({ title, children }: RoleCardProps) {
  return (
    <article className="role-card">
      <h3>{title}</h3>
      <div className="role-card__body">{children}</div>
    </article>
  )
}
