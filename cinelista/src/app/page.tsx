import Image from "next/image";
import styles from "./page.module.css";
import Title from "./components/Title";
import Grid from "./components/Grid";
import {filmes} from "@/lib/filmes";

export default function Home() {
  return (
    <>
    <Title title="Filmes em destaque" />
    <Grid filmes={filmes} />
    
    </>
  );
}
