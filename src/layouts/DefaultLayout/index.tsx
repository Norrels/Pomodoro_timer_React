import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/index'
import { LayoutContainer } from './styles'

// Aqui a gente utiliza o conceito de "Reciclagem"
// é como se a gente repetisse o mesmo elemento em varias paginas
// Mas sem precisar fazer a pagina recarregar por inteiro, somente o elemento que muda
// A ajuda a pagina a fica mais perfomatica

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
