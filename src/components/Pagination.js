import React from 'react'
import { PaginationWrapper, PaginationElement } from '../elements'


export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage}>Retour</PaginationElement>
      <PaginationElement to={nextPage}>Suivant</PaginationElement>
    </PaginationWrapper>
  )
}
