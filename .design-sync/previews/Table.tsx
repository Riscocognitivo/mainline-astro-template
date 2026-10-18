import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "mainline-astro-template";

const artigos = [
  { titulo: "Memória de trabalho no dia a dia", tema: "Funções executivas", leitura: "6 min" },
  { titulo: "Por que a atenção falha à tarde", tema: "Atenção", leitura: "8 min" },
  { titulo: "O córtex pré-frontal e as decisões", tema: "Neurociência", leitura: "10 min" },
  { titulo: "Sinais de sobrecarga cognitiva", tema: "Risco cognitivo", leitura: "5 min" },
];

export const Articles = () => (
  <Table>
    <TableCaption>Artigos mais lidos do blog neste mês.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Título</TableHead>
        <TableHead>Tema</TableHead>
        <TableHead style={{ textAlign: "right" }}>Leitura</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {artigos.map((a) => (
        <TableRow key={a.titulo}>
          <TableCell className="font-medium">{a.titulo}</TableCell>
          <TableCell>{a.tema}</TableCell>
          <TableCell style={{ textAlign: "right" }}>{a.leitura}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const WithFooter = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Domínio</TableHead>
        <TableHead style={{ textAlign: "right" }}>Pontuação</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Atenção sustentada</TableCell>
        <TableCell style={{ textAlign: "right" }}>14</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Memória de trabalho</TableCell>
        <TableCell style={{ textAlign: "right" }}>11</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Controle inibitório</TableCell>
        <TableCell style={{ textAlign: "right" }}>9</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell>Total</TableCell>
        <TableCell style={{ textAlign: "right" }}>34</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);
