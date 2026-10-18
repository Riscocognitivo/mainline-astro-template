import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "mainline-astro-template";
import { ChevronLeft, ChevronRight } from "lucide-react";

// PaginationPrevious/PaginationNext trazem "Previous"/"Next" fixos em inglês;
// aqui o mesmo visual é montado com PaginationLink e rótulos em português.
const Anterior = () => (
  <PaginationLink href="#" size="default" aria-label="Página anterior" className="gap-1 px-2.5">
    <ChevronLeft />
    <span>Anterior</span>
  </PaginationLink>
);
const Proxima = () => (
  <PaginationLink href="#" size="default" aria-label="Próxima página" className="gap-1 px-2.5">
    <span>Próxima</span>
    <ChevronRight />
  </PaginationLink>
);

export const Default = () => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <Anterior />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <Proxima />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export const Compact = () => (
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <Anterior />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isActive>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <Proxima />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);
