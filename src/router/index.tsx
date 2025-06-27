import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { Conocenos, HomePage, Beneficios, Noticias, OfertaEducativa, Noticia } from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'conocenos',
        element: <Conocenos />
      },
      {
        path: 'oferta-educativa',
        element: <OfertaEducativa />
      },
      {
        path: 'Beneficios',
        element: <Beneficios />
      },
      {
        path: 'noticias',
        element: <Noticias />,
      },
      {
        path: 'noticias/:id',
        element: <Noticia />
      }
    ]
  }
])