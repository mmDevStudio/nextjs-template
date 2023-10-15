import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="prose mx-auto mt-20">
      <h1>Nextjs Template</h1>
      <p>
        Eine Template Repository für Nextjs Projekte mit Tailwindcss und
        Typescript.
      </p>
      <h2 id="tech-stack">Tech-Stack</h2>
      <ol>
        <li>
          <Link href="https://nextjs.org/">Next.js</Link>: React Framework
        </li>
        <li>
          <Link href="https://tailwindcss.com/">Tailwind CSS</Link>: CSS Utility
          Framework
        </li>
        <li>
          <Link href="https://www.typescriptlang.org/">Typescript</Link>: Typed
          JavaScript
        </li>
        <li>
          <Link href="https://eslint.org/">ESLint</Link>: Linter
        </li>
        <li>
          <Link href="https://prettier.io/">Prettier</Link>: Code Formatter
        </li>
        <li>
          <Link href="https://typicode.github.io/husky/">Husky</Link>: Git Hooks
        </li>
        <li>
          <Link href="https://github.com/lint-staged/lint-staged">
            lint-staged
          </Link>
          : Run linters against staged git files
        </li>
        <li>
          <Link href="https://docker.com/">Docker</Link>: Container Platform
        </li>
        <li>
          <Link href="https://code.visualstudio.com/docs/devcontainers/containers">
            VSCode Dev Container
          </Link>
          : Development Environment
        </li>
      </ol>

      <h2 id="setup">Setup</h2>
      <p>
        Um das Projekt zu starten, muss{' '}
        <Link href="https://docker.com/">Docker</Link>,{' '}
        <Link href="https://code.visualstudio.com/">VS Code</Link> und die
        Erweiterung für{' '}
        <Link href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers">
          Dev Container
        </Link>{' '}
        installiert sein. Ist alles installiert, fragt VS Code beim Öffnen des
        Projekts, ob der <Link href="#dev-container">Dev Container</Link>{' '}
        gestartet werden soll. Alternativ kann man den Dev Container auch
        manuell starten, indem man die Command Palette (
        <code>STRG + SHIFT + P</code>) öffnet und nach{' '}
        <code>Remote-Containers: Reopen in Container</code> sucht. Der Dev
        Container ist so konfiguriert, dass er beim Starten automatisch die
        Dependencies installiert. Alles was man jetzt noch machen muss, ist den
        Befehl <code>npm run dev</code> auszuführen. Das Projekt ist dann unter{' '}
        <Link href="http://localhost:3000">localhost:3000</Link> erreichbar.
      </p>

      <h2 id="workflow">Workflow</h2>

      <Image src="/workflow.png" alt="Workflow" width={1000} height={500} />

      <p>
        Zuerst wird das Projekt im{' '}
        <Link href="#dev-container">Dev Container</Link> gestartet. Will man
        Code pushen, wird der Code zuerst von{' '}
        <Link href="#husky-lint-staged">Husky und Lint Staged</Link> überprüft.
        Ist der Code fehlerfrei, wird er zur GitHub Repository gepusht. Dort
        durchläuft der Code die{' '}
        <Link href="#github-actions">GitHub Actions</Link>. Diese erstellen ein
        Docker Image und pushen es zum{' '}
        <Link href="https://hub.docker.com/">Docker Hub</Link>. Von dort aus
        kann das Image auf einen Server deployed und gestartet werden.
      </p>

      <h2 id="dev-container">Dev Container</h2>

      <p>
        Ein Dev Container ist eine Entwicklungsumgebung, die in einem Docker
        Container läuft. Der Container wird mit einem Dockerfile definiert und
        kann mit einer <code>devcontainer.json</code> konfiguriert werden. Das
        Projekt ist so konfiguriert, dass beim Starten bzw. bei Veränderung des
        Inhalts des Containers die Dependencies installiert werden. Außerdem
        werden einige VS Code Erweiterungen installiert. Die Erweiterungen
        können in der <code>devcontainer.json</code> konfiguriert werden.
      </p>

      <h2 id="github-actions">GitHub Actions</h2>

      <p>
        GitHub Actions sind automatisierte Workflows, die auf GitHub ausgeführt
        werden. In diesem Projekt werden sie verwendet, um ein Docker Image zu
        erstellen und es auf den Docker Hub zu pushen. Die Actions werden in der{' '}
        <code>.github/workflows</code> definiert. Die verwendete
        Dockerkonfiguration befindet sich in dem <code>Dockerfile</code>.{' '}
        <b>Achtung:</b> Wenn man diese neu einrichtet, muss man die benötigten
        Umgebungsvariablen <code>DOCKERHUB_USERNAME</code> und{' '}
        <code>DOCKERHUB_TOKEN</code> in den Repository Secrets hinterlegen.
      </p>

      <h2 id="husky-lint-staged">Husky and Lint Staged</h2>

      <p>
        Husky und Lint Staged sind zwei Tools, die zusammenarbeiten, um sicher
        zu stellen, dass nur Code committed wird, der den Linting Regeln
        entspricht. Husky ist ein Tool, das es ermöglicht, Git Hooks zu
        definieren. Lint Staged ist ein Tool, das es ermöglicht, Linting Regeln
        auf die <b>gestageten Dateien</b> anzuwenden.
      </p>

      <h2 id="eslint-prettier">Eslint und Prettier</h2>

      <p>
        Was Eslint und Prettier machen, dürfte klar sein. Eslint verwendet in
        diesem Projekt die Konfiguration von AirBnB mit ein paar extras.
        Prettier benutzt das <code>prettier-plugin-tailwindcss</code>, was
        tailwind klassen sortiert.
      </p>
    </main>
  )
}
