"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import stylesButtonExpansivel from "./ButtonLinkExpansivel.module.css";

export default function MenuNovo() {

  const [menuReduzido, setMenuReduzido] = useState(false);

  let menuConfig = [
    { id: 1, botaoNome: "Início", botaoIcone: "/menuIcons/home.svg", botaoIconeAlt: "Início", href: "/inicio" },
    { id: 2, botaoNome: "Motoristas", botaoIcone: "/menuIcons/motoristas.svg", botaoIconeAlt: "Motoristas", href: "/motoristas" },
    { id: 3, botaoNome: "Veículos", botaoIcone: "/menuIcons/veiculos.svg", botaoIconeAlt: "Veículos", href: "/veiculos" },
    { id: 4, botaoNome: "Reservas", botaoIcone: "/menuIcons/reservas.svg", botaoIconeAlt: "Reservas", href: "/reservas" },
    { id: 5, botaoNome: "Abastecimentos", botaoIcone: "/menuIcons/abastecimentos.svg", botaoIconeAlt: "Abastecimentos", href: "/abastecimentos" },
    { id: 6, botaoNome: "Deslocamentos", botaoIcone: "/menuIcons/deslocamentos.svg", botaoIconeAlt: "Deslocamentos", href: "/deslocamentos" },
    { id: 7, botaoNome: "Manutenções", botaoIcone: "/menuIcons/manutencoes.svg", botaoIconeAlt: "Manutenções", href: "/manutencoes" },
    { id: 8, botaoNome: "Sinistros", botaoIcone: "/menuIcons/sinistros.svg", botaoIconeAlt: "Sinistros", href: "/sinistros" },
    { id: 8, botaoNome: "Teste", botaoIcone: "/menuIcons/sinistros.svg", botaoIconeAlt: "Sinistros", href: "/sinistros", expansivel: true, botaoLinks: [
      { id: 1, name: "Oi", href: "#", icone: "", alt: ""}
    ]},
  ]

  return (
    <>
      <nav className={`${styles.menuContainerPrincipal} ${menuReduzido ? styles.menuReduzido : styles.menuNaoReduzido}`}>

        <div className={`${styles.containerProjetoLogo} ${menuReduzido && styles.containerProjetoLogoReduzido}`}>
          <img className={styles.projetoLogo} src="/menuIcons/cidadesLogo.svg" alt="Logo cidades inteligentes" />
          <div style={{ display: menuReduzido ? "none" : "flex" }} className={styles.containerTituloLogo}>
            <p className={styles.tituloPrimario}>Cidades Inteligentes</p>
            <p className={styles.tituloSecundario}>Gerenciamento de Frotas</p>
          </div>
        </div>

        <div className={`${styles.containerUsuarioLogado} ${menuReduzido ? styles.containerUsuarioReduzido : styles.containerUsuarioNaoReduzido}`}>
          <div className={styles.containerImageNome}>
            <img className={styles.usuarioImage} src={"/menuIcons/user.png"} alt="Usuário logado" />
            <p style={{ display: menuReduzido ? "none" : "flex" }} className={styles.usuarioNome}>Mateus de Moraes</p>
          </div>
          <img className={styles.notificationIcon} src="/menuIcons/notifications.svg" alt="Notificações" />
        </div>

        <div className={styles.containerArrow}
          onClick={() => {
            if (menuReduzido) {
              setMenuReduzido(false);
            } else {
              setMenuReduzido(true);
            }
          }}>
          <img className={`${styles.menuIconAbrir} ${menuReduzido ? styles.menuIconAbrirReduzido : styles.menuIconAbrirNaoReduzido}`} src="/menuIcons/double-arrow-left.svg" alt="Arrow Right" />
          <p style={{ display: menuReduzido ? "none" : "flex" }} className={styles.menuIconAbrirText}>Fechar menu</p>
        </div>

        <ul className={styles.containerList}>

          {menuConfig && menuConfig.map((config) => {
            if (config.expansivel) {
              return (
                <li key={config.id}>
                  <ButtonLinkExpansivel setMenuReduzido={setMenuReduzido} menuReduzido={menuReduzido} botaoNome={config.botaoNome} botaoIcone={config.botaoIcone} botaoIconeAlt={config.botaoIconeAlt} botaoLinks={config.botaoLinks} />
                </li>
              )
            } else {
              return (
                <li key={config.id} className={styles.buttonLink}>
                  <Link className={styles.link} href={config.href}>
                    <div className={`${styles.containerIconeTexto} ${menuReduzido && styles.containerIconeTextoReduzido}`}>
                      <img src={config.botaoIcone} alt={config.botaoIconeAlt} />
                      <p style={{ display: menuReduzido ? "none" : "flex" }} className={styles.buttonLinkTexto}>{config.botaoNome}</p>
                    </div>
                  </Link>
                </li>
              )
            }
          })}

          <li className={styles.buttonLink}>
            <Link className={styles.link} href={""}>
              <div className={`${styles.containerIconeTexto} ${menuReduzido && styles.containerIconeTextoReduzido}`}>
                <img src={"/menuIcons/logout.svg"} alt={"Logout"} />
                <p style={{ display: menuReduzido ? "none" : "flex" }} className={styles.buttonLinkTexto}>{"Sair"}</p>
              </div>
            </Link>
          </li>

        </ul>

      </nav>
    </>
  )
}

function ButtonLinkExpansivel({ botaoNome, botaoIcone, botaoIconeAlt, botaoLinks, menuReduzido, setMenuReduzido }) {

  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    if (menuReduzido && ativo) {
      setAtivo(false);
    }
  }, [menuReduzido])

  return (
    <>
      <div className={stylesButtonExpansivel.buttonLinkExpansivel}
        style={{ backgroundColor: ativo ? "var(--menuColorPrimaryDark)" : "var(--menuColorPrimary)" }}
        onClick={() => {
          if (menuReduzido) {
            setMenuReduzido(false)
          }

          if (ativo) setAtivo(false)
          if (!ativo) setAtivo(true)
        }}>
        <div className={`${stylesButtonExpansivel.containerIconeTextoExpansivel} ${menuReduzido && stylesButtonExpansivel.containerIconeTextoExpansivelReduzido}`}>
          <div className={stylesButtonExpansivel.containerIconeTexto}>
            <img src={botaoIcone} alt={botaoIconeAlt} />
            <p style={{ display: menuReduzido ? "none" : "flex"}} className={stylesButtonExpansivel.buttonLinkTexto}>{botaoNome}</p>
          </div>
          <img style={{ display: menuReduzido ? "none" : "flex"}} className={stylesButtonExpansivel.iconExpandir} src={ativo ? "/menuIcons/minus.svg" : "/menuIcons/plus.svg"} alt={ativo ? "Fechar" : "Abrir"} />
        </div>
      </div>

      <ul className={`${stylesButtonExpansivel.containerExpansivel} ${ativo ? stylesButtonExpansivel.containerExpansivelFechar : stylesButtonExpansivel.containerExpansivelAbrir}`}>
        {botaoLinks && botaoLinks.map((link) => (
          <li key={link.id}>
            <Link className={stylesButtonExpansivel.linkIconeTexto} href={link.href}>
              {botaoIcone && botaoIconeAlt && (<img src={link.icone} alt={link.alt} />)}
              <p className={stylesButtonExpansivel.linkTexto}>{link.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
