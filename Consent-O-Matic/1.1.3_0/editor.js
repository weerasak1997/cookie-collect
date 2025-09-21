(() => {
  "use strict";
  var e = {
      213: (e, t, n) => {
        n.d(t, { A: () => a });
        const r = {
          EXTENSION_NAME: {
            en: "Consent-O-Matic",
            da: "Consent-O-Matic",
            de: "Consent-O-Matic",
            pt: "Consent-O-Matic",
            fr: "Consent-O-Matic",
          },
          EXTENSION_SUBTITLE: {
            en: "Your Choice - Applied Everywhere",
            da: "Dit valg - Anvendt overalt",
            de: "Ihre Wahl - Überall angewendet",
            pt: "Sua Escolha - Aplicadada em todos os lugares",
            fr: "Votre choix - Appliqué Partout",
          },
          YOUR_CHOICE: {
            en: "Your Choice",
            da: "Dit valg",
            de: "Ihre Wahl",
            pt: "Sua Escolha",
            fr: "Votre choix",
          },
          RULE_LIST: {
            en: "Rule Lists",
            da: "Regler",
            de: "Regellisten",
            pt: "Lista de Regras",
            fr: "Listes de règles",
          },
          ABOUT: {
            en: "About",
            da: "Info",
            de: "Information",
            pt: "Sobre",
            fr: "À Propos",
          },
          DEBUG: { en: "Dev", da: "Dev", de: "Dev", pt: "Dev", fr: "Dev" },
          HIDE_OR_PIP_DESCRIPTION: {
            en: "How to display popups while they are being filled out",
            da: "Hvordan popups skal vises imens de udfyldes",
            de: "Wie man Popups anzeigt, während sie ausgefüllt werden",
            fr: "Comment afficher les popups pendant qu'ils sont entrain d'être remplis",
          },
          HIDE_OR_PIP_HIDE_TITLE: {
            en: "Hide",
            da: "Skjul",
            de: "Ausblenden",
            pt: "Ocultar",
            fr: "Cacher",
          },
          HIDE_OR_PIP_HIDE_LABEL: {
            en: "Hide the popup entirely while answering it",
            da: "Skjul popup'en fuldstændigt imens den besvares",
            de: "Verbirgt das popup, während es beantwortet wird",
            fr: "Cacher complètement la popup pendant la réponse",
          },
          HIDE_OR_PIP_PIP_TITLE: {
            en: "Minimize",
            da: "Minimér",
            de: "Minimieren",
            pt: "Minimizar",
            fr: "Minimiser",
          },
          HIDE_OR_PIP_PIP_LABEL: {
            en: "Show the popup in a small overlay in the corner",
            da: "Vis popup'en i en lille overlejring i hjørnet",
            de: "Das Popup in einem kleinen Overlay in der Ecke anzeigen",
            pt: "Mostrar o popup numa pequena sobreposição no canto",
            fr: "Afficher le popup dans une petite superposition dans un coin",
          },
          DISPLAY: {
            en: "Display",
            da: "Visning",
            de: "Anzeige",
            pt: "Apresentação",
            fr: "Affichage",
          },
          DISPLAY_DESCRIPTION: {
            en: "Configure the appearance and behaviour of Consent-O-Matic",
            da: "Konfigurer Consent-O-Matic's udseende og opførsel",
            de: "Konfiguration des Aussehens und Verhaltens von Consent-O-Matic",
            pt: "Configure a aparência e o comportamento do Consent-O-Matic",
            fr: "Configurez l'apparence et le comportement de Consent-O-Matic",
          },
          CHOICE_DESCRIPTION: {
            en: "Configure what categories of tracking you would like to allow. Consent-O-Matic then fills out consent popups as best as possible based on your preferences. All tracking is rejected by default.",
            da: "Konfigurer hvilke tracking-kategorier du gerne vil tillade. Så vil Consent-O-Matic udfylde samtykke-popups så godt den kan baseret på dine valg. Som standard bliver alt tracking afvist.",
            de: "Legen Sie fest, welche Kategorien von Tracking Sie zulassen möchten. Consent-O-Matic füllt dann, basierend auf Ihren Voreinstellungen, die Zustimmungs-Popups so gut wie möglich aus. Standardmäßig wird jegliches Tracking abgelehnt.",
            pt: "Configure quais categorias de rastreamento você gostaria de permitir. O Consent-O-Matic preenche os pop-ups de consentimento da melhor forma possível com base em suas preferências. Todos os rastreamentos são rejeitados por padrão.",
            fr: "Configurez les catégories de suivi que vous souhaitez autoriser. Consent-O-Matic remplit ensuite les popups de consentement de la meilleure façon possible en fonction de vos préférences. Tout suivi est rejeté par défaut.",
          },
          RULES_DESCRIPTION: {
            en: "Consent-O-Matic comes with a set of rules that tell it how to understand each kind of GDPR consent popup. You can add more sources of rules here - or even create your own list and share it with others!",
            da: "Sammen med Consent-O-Matic følger et sæt af regler der beskriver hvordan hver enkelt slags GDPR-samtykke-popup skal behandles. Du kan tilføje flere regel-kilder her - eller oprette din egen liste og dele den med andre!",
            de: "Consent-O-Matic wird mit einer Reihe von Regeln geliefert, die ihm sagen, wie es jede Art von GDPR-Einwilligungs-Popup verstehen soll. Sie können hier weitere Quellen für Regeln hinzufügen - oder sogar Ihre eigene Liste erstellen und sie mit anderen teilen!",
            pt: "O Consent-O-Matic vem com um conjunto de regras de como entender cada tipo de pop-up de consentimento do GDPR. Você pode adicionar mais regras aqui - ou até mesmo criar sua própria lista e compartilhá-la com outras pessoas!",
            fr: "Consent-O-Matic est livré avec un ensemble de règles qui lui indiquent comment comprendre chaque type de popup de consentement GDPR. Vous pouvez ajouter plus de sources de règles ici - ou même créer votre propre liste et la partager avec d'autres!",
          },
          ADD_LIST: {
            en: "Add List",
            da: "Tilføj liste",
            de: "Liste hinzufügen",
            pt: "Adicionar Lista",
            fr: "Ajouter liste",
          },
          RULES_UPDATE_DESCRIPTION: {
            en: "All the rule lists are updated automatically every 22-48 hours or you can",
            da: "Alle listerne med regler opdateres automatisk engang hver 22-48 time, eller du kan",
            de: "Alle Regellisten werden automatisch alle 22 bis 48 Stunden aktualisiert oder Sie können",
            pt: "Todas as listas de regras são atualizadas automaticamente a cada 22-48 horas ou você pode",
            fr: "Toutes les listes de règles sont mises à jour automatiquement toutes les 22-48 heures ou vous pouvez",
          },
          UPDATE_RULES_NOW: {
            en: "Update Rules Now",
            da: "Opdater regler nu",
            de: "Die Regeln jetzt aktualisieren",
            pt: "Atualizar Regras Agora",
            fr: "Mettre à jour les règles maintenant",
          },
          RULE_GENERATOR: {
            en: "Rule List Generator",
            da: "Regel liste generator",
            de: "Regellistengenerator",
            pt: "Gerador de Lista de Regras",
            fr: "Générateur de Liste de Règles",
          },
          RULE_GENERATOR_DESCRIPTION: {
            en: "As an alternative to writing JSON rules by hand it is also possible to create rules using this drag-n-drop editor:",
            da: "Som alternativ til at skrive JSON-reglerne i hånden, er det også muligt at lave regler med denne drag-n-drop editor:",
            de: "Statt JSON-Regeln manuell zu schreiben, können Sie alternativ Regeln mithilfe des Drag-and-drop-Editors erstellen:",
            pt: "Como alternativa a escrever regras JSON manualmente, também é possível criá-las usando este editor de arrastar e soltar:",
            fr: "En tant qu'alternative à la rédaction manuelle de règles JSON, il est également possible de créer des règles à l'aide de cet éditeur de glisser-déposer :",
          },
          OPEN_RULE_GENERATOR: {
            en: "Open Rule Editor",
            da: "Redigér Regler",
            de: "Regeleditor öffnen",
            pt: "Abrir Editor de Regras",
            fr: "Ouvrir l'Éditeur de Règles",
          },
          CLEAR: {
            en: "Clear",
            da: "Ryd",
            de: "Löschen",
            pt: "Limpar",
            fr: "Effacer",
          },
          ABOUT_DESCRIPTION: {
            en: "Here you can see how many times a popup has been filled out and just how many clicks Consent-O-Matic has saved you.",
            da: "Her kan du se hvor mange gange der er blevet udfyldt en popup for dig, og hvor mange klik Consent-O-Matic har sparet dig.",
            de: "Hier können Sie sehen, wie häufig ein Popup ausgefüllt wurde und wie viele Klicks dank Consent-O-Matic gespart wurden.",
            pt: "Aqui você pode ver quantas vezes um pop-up foi preenchido e quantos cliques o Consent-O-Matic economizou para você.",
            fr: "Ici, vous pouvez voir combien de fois un popup a été remplie et combien de clics Consent-O-Matic vous a économisés.",
          },
          CLICKS_SAVED: {
            en: "clicks saved",
            da: "klik sparet",
            de: "gesparte Klicks",
            pt: "cliques economizados",
            fr: "clics économisés",
          },
          CLICK_DELAY_DESCRIPTION: {
            en: "Wait a short time between performing each action or mouse gesture",
            da: "Vent en kort periode i mellem udførslen af hver handling eller muse gesture",
            de: "Eine kurze Zeit zwischen den einzelnen Aktionen oder Mausgesten warten",
            pt: "Aguarde um pouco entre a execução de cada ação ou movimento do mouse",
            fr: "Attendez un court laps de temps entre chaque action ou geste de la souris",
          },
          SKIP_SUBMIT_DESCRIPTION: {
            en: "Perform actions normally but do not submit the consent",
            da: "Udfør handlinger normalt, men lad være med at indsende samtykket",
            de: "Aktionen normal ausführen, aber die Zustimmung nicht abschicken",
            pt: "Execute as ações normalmente, mas não envie o consentimento",
            fr: "Effectuer des actions normalement mais ne soumettez pas le consentement",
          },
          PAINT_MATCHERS_DESCRIPTION: {
            en: "Visual feedback while matching consent choices",
            da: "Visuel feedback mens samtykkevalg matches",
            de: "Visuelles Feedback beim Abgleich von Einwilligungsentscheidungen",
            pt: "Feedback visual ao combinar opções de consentimento",
            fr: "Retour visuel pendant la correspondance des choix de consentement",
          },
          DEBUG_CLICKS_DESCRIPTION: {
            en: "Debug clicks to the log",
            da: "Debug klik til loggen",
            de: "Klicks im Debug-Log anzeigen",
            pt: "Depurar cliques no log",
            fr: "Déboguer les clics dans le journal",
          },
          ALWAYS_FORCE_UPDATE_DESCRIPTION: {
            en: "Always force a reload of the rules on each page load",
            da: "Tving genlæsning af reglerne ved hver side hentning",
            de: "Erzwinge ein Neuladen der Regeln bei jedem Laden einer Seite",
            pt: "Sempre force o recarregamento das regras em cada carregamento de página",
            fr: "Forcer toujours le rechargement des règles à chaque chargement de page",
          },
          SKIP_HIDE_DESCRIPTION: {
            en: "Skips the HIDE_CMP method, to better see what's going on behind the scenes.",
            da: "Spring HIDE_CMP metoden over, for bedre at se hvad der foregår bag kulisserne.",
            de: "Überspringt die HIDE_CMP-Methode, um besser sehen zu können, was hinter den Kulissen vor sich geht.",
            pt: "Ignora o método HIDE_CMP, para ver melhor o que está acontecendo nos bastidores.",
            fr: "Saute la méthode HIDE_CMP, pour mieux voir ce qui se passe en coulisses.",
          },
          EXTRA_DEBUG_DESCRIPTION: {
            en: "Enables extra debug logging",
            da: "Aktiver ekstra debug logning",
            de: "Aktiviert zusätzliches Debug-Logging",
            pt: "Habilita log adicional de depuração",
            fr: "Active l'enregistrement de débogage supplémentaire",
          },
          RULES_DEBUG_DESCRIPTION: {
            en: "Enables debug logging of rule engine",
            da: "Aktiver debug logning af udførsel af regler",
          },
          INFORMATION_NAME: {
            en: "Information Storage and Access",
            da: "Opbevaring og adgang til information",
            de: "Informationsspeicherung und -zugriff",
            pt: "Armazenamento e Acesso à Informação",
            fr: "Stockage et accès à l'information",
          },
          INFORMATION_DESCRIPTION: {
            en: "Storage of information or access to information that is already stored on your device - such as advertising identifiers, device identifiers, cookies, and similar technologies.",
            da: "Lagring af information eller adgang til information, der allerede er gemt på din enhed - såsom reklame-id'er, enhedsidentifikatorer, cookies og lignende teknologier.",
            de: "Speicherung von Informationen oder Zugriff auf Informationen, die bereits auf Ihrem Gerät gespeichert sind - wie Werbekennungen, Gerätekennungen, Cookies und ähnliche Technologien.",
            pt: "Armazenamento de informações ou acesso à informações que já estão armazenadas em seu dispositivo - como identificadores publicitários, identificadores de dispositivo, cookies e tecnologias semelhantes.",
            fr: "Stockage d'informations ou accès à des informations déjà stockées sur votre appareil - telles que les identifiants publicitaires, les identifiants de périphérique, les cookies et des technologies similaires.",
          },
          PREFERENCES_NAME: {
            en: "Preferences and Functionality",
            da: "Præferencer og funktionalitet",
            de: "Präferenzen und Funktionalitäten",
            pt: "Preferências e Funcionalidade",
            fr: "Préférences et fonctionnalités",
          },
          PREFERENCES_DESCRIPTION: {
            en: "Allow sites to remember choices you make (such as your user name, language or the region you are located in) and provide enhanced, more personal features. For instance, these cookies can be used to remember your login details, changes you have made to text size, fonts and other parts of web pages that you can customize. They may also be used to provide services you have asked for such as watching a video or commenting on a blog. The information in these cookies is not used to track your browsing activity on other websites.",
            da: "Tillad websteder at huske valg, du laver (f.eks. dit brugernavn, sprog eller den region du er placeret i) og giver forbedrede, mere personlige funktioner. For eksempel kan disse cookies bruges til at huske dine loginoplysninger, ændringer, du har lavet til tekststørrelse, skrifttyper og andre dele af websider, som du kan tilpasse. De kan også bruges til at levere tjenester, du har bedt om, f.eks. at se en video eller kommentere på en blog. Oplysningerne i disse cookies bruges ikke til at spore din browsingaktivitet på andre hjemmesider.",
            de: "Erlauben Sie es den Websites, sich an die von Ihnen getroffene Wahl zu erinnern (z. B. an Ihren Benutzernamen, Sprache oder die Region, in der Sie sich befinden) und verbesserte, persönlichere Funktionen bereitzustellen. Diese Cookies können zum Beispiel verwendet werden, um Ihre Anmeldedaten, Änderungen an der Textgröße, Schriftarten und anderen Teile der Webseiten, die Sie anpassen können, zu speichern. Sie können auch dazu verwendet werden, um Dienste, die Sie angefordert haben, bereitzustellen, wie z. B. das Ansehen eines Videos oder das Kommentieren in einem Blog. Die Informationen in diesen Cookies werden nicht dazu verwendet, um Ihre Surfaktivitäten auf anderen Websites zu verfolgen.",
            pt: "Permita que os sites lembrem as escolhas que você faz (como seu nome de usuário, idioma ou região em que você está localizado) e forneçam recursos aprimorados e mais personalizados. Por exemplo, esses cookies podem ser usados para lembrar seus detalhes de login, alterações feitas no tamanho do texto, fontes e outros atributos de páginas da web que você pode personalizar. Eles também podem ser usados para fornecer serviços que você solicitou, como assistir a um vídeo ou comentar em um blog. As informações nesses cookies não são usadas para rastrear sua atividade de navegação em outros sites.",
            fr: "Permettez aux sites de se souvenir des choix que vous faites (comme votre nom d'utilisateur, la langue ou la région dans laquelle vous vous trouvez) et de fournir des fonctionnalités améliorées et plus personnelles. Par exemple, ces cookies peuvent être utilisés pour mémoriser vos informations de connexion, les modifications que vous avez apportées à la taille du texte, aux polices et à d'autres parties des pages Web que vous pouvez personnaliser. Ils peuvent également être utilisés pour fournir des services que vous avez demandés, tels que regarder une vidéo ou commenter un blog. Les informations contenues dans ces cookies ne sont pas utilisées pour suivre votre activité de navigation sur d'autres sites Web.",
          },
          PERFORMANCE_NAME: {
            en: "Performance and Analytics",
            da: "Ydelse og analyse",
            de: "Leistung und Analyse",
            pt: "Desempenho e Analytics",
            fr: "Performance et analyses",
          },
          PERFORMANCE_DESCRIPTION: {
            en: "The collection of information, and combination with previously collected information, to measure, understand, and report, on your usage of the services. This allows websites to count visits and traffic sources so they can measure and improve the performance of the site. It helps them know which pages are the most and least popular, see how visitors move around the site, and where visitors come from.",
            da: "Indsamling af oplysninger og kombination med tidligere indsamlede oplysninger, til at måle, forstå og rapporterer på din brug af tjenesterne. Dette gør det muligt for websteder at tælle besøg og trafikkilder, så de kan måle og forbedre ydeevnen på webstedet. Det hjælper dem med at vide, hvilke sider der er mest og mindst populære, se hvordan besøgende bevæger sig rundt på webstedet, og hvor besøgende kommer fra.",
            de: "Die Sammlung von Informationen und die Kombination mit zuvor gesammelten Informationen, um Ihre Nutzung der Dienste zu messen, zu verstehen und darüber zu berichten. Auf diese Weise können Websites Besuche und Quellen zählen, damit sie die Leistung der Website messen und verbessern können. Auf diese Weise erfahren sie, welche Seiten am beliebtesten und am unbeliebtesten sind, wie sich die Besucher auf der Website bewegen und woher sie kommen.",
            pt: "Coleta de informações e combinação com informações coletadas anteriormente para medir, entender e relatar o seu uso dos serviços. Isso permite que os sites contem visitas e origens de tráfego para que possam medir e melhorar o desempenho do site. Isso os ajuda a saber quais páginas são as mais e menos populares, ver como os visitantes navegam pelo site e de onde vêm os visitantes.",
            fr: "Collecte d'informations et combinaison avec des informations précédemment collectées, pour mesurer, comprendre et rapporter votre utilisation des services. Cela permet aux sites web de compter les visites et les sources de trafic afin qu'ils puissent mesurer et améliorer la performance du site. Cela les aide à savoir quelles pages sont les plus populaires et les moins populaires, à voir comment les visiteurs se déplacent sur le site et d'où viennent les visiteurs.",
          },
          CONTENT_NAME: {
            en: "Content selection, delivery, and reporting",
            da: "Indholdsvalg, levering og rapportering",
            de: "Auswahl, Bereitstellung und Auswertung von Inhalten",
            pt: "Seleção de conteúdo, entrega e relatórios",
            fr: "Sélection, livraison et rapport de contenu",
          },
          CONTENT_DESCRIPTION: {
            en: "Collection of information, and combination with previously collected information, to select and deliver content for you, and to measure the delivery and effectiveness of such content. This includes using previously collected information about your interests to select content, processing data about what <b>content</b> was shown, how often or how long it was shown, when and where it was shown, and whether you took any action related to the content, including for example clicking on content. The data will be used to personalise content on the website itself, but also in other contexts such as other websites, apps, browsers, and devices.",
            da: "Indsamling af oplysninger og kombination med tidligere indsamlede oplysninger, for at vælge og levere indhold til dig og for at måle levering og effektivitet af sådant indhold. Dette inkluderer tidligere indsamlet information om dine interesser for at vælge indhold, behandle data om, hvad <b>indhold</b> der blev vist, hvor ofte eller hvor længe det blev vist, hvornår og hvor det blev vist, og om du tog nogen handling relateret til indholdet, herunder for eksempel at klikke på indhold. Dataene vil blive brugt til at personliggøre indhold på selve hjemmesiden, men også i andre sammenhænge som andre hjemmesider, apps, browsere og enheder.",
            de: "Sammlung von Informationen und Kombination mit zuvor gesammelten Informationen, um Inhalte für Sie auszuwählen und bereitzustellen und um die Bereitstellung und Effektivität dieser Inhalte zu messen. Dies beinhaltet die Verwendung von zuvor gesammelten Informationen über Ihre Interessen zur Auswahl von Inhalten, der Verarbeitung von Daten darüber, welche <b>Inhalte</b> gezeigt wurden, wie häufig oder wie lange diese gezeigt wurden, wann und wo sie gezeigt wurden und ob Sie irgendeine Aktion im Zusammenhang mit den Inhalten durchgeführt haben, z. B. das Anklicken von Inhalten. Die Daten werden dazu verwendet, Inhalte auf der Website selbst, aber auch in anderen Kontexten wie anderen Websites, Apps, Browsern und Geräten zu personalisieren.",
            pt: "Coleta de informações e combinação com informações coletadas anteriormente para selecionar e fornecer conteúdo para você e para medir a entrega e a eficácia de tal conteúdo. Isso inclui o uso de informações coletadas anteriormente sobre seus interesses para selecionar conteúdo, processar dados sobre qual <b>conteúdo</b> foi exibido, com que frequência ou por quanto tempo foi exibido, quando e onde foi exibido e se você realizou alguma ação relacionados ao conteúdo, incluindo, por exemplo, clicar no conteúdo. Os dados serão usados para personalizar o conteúdo do próprio site, mas também em outros contextos, como outros sites, aplicativos, navegadores e dispositivos.",
            fr: "Collecte d'informations et combinaison avec des informations collectées précédemment, afin de sélectionner et de livrer du contenu pour vous, ainsi que de mesurer la livraison et l'efficacité de ce contenu. Cela inclut l'utilisation d'informations précédemment collectées sur vos centres d'intérêt pour sélectionner du contenu, le traitement des données sur le contenu qui a été affiché, à quelle fréquence ou pendant combien de temps il a été affiché, quand et où il a été affiché, et si vous avez pris des mesures liées au contenu, telles que cliquer sur le contenu, par exemple. Les données seront utilisées pour personnaliser le contenu sur le site web lui-même, mais également dans d'autres contextes tels que d'autres sites web, applications, navigateurs et appareils.",
          },
          AD_NAME: {
            en: "Ad selection, delivery, and reporting",
            da: "Annoncevalg, levering og rapportering",
            de: "Anzeigenauswahl, -zustellung  und -berichterstattung",
            pt: "Seleção, exibição e relatórios de anúncios",
            fr: "Sélection, livraison et rapport publicitaire",
          },
          AD_DESCRIPTION: {
            en: "Collection of information, and combination with previously collected information, to select and deliver advertisements, and to measure the delivery and effectiveness of such advertisements. This includes using previously collected information about your interests to select ads, processing data about what <b>advertisements</b> were shown, how often they were shown, when and where they were shown, and whether you took any action related to the advertisement, including for example clicking an ad or making a purchase. The data will be used to personalise advertising on the website itself, but also in other contexts such as other websites, apps, browsers, and devices.<br><br>Also includes:<br>Google",
            da: "Indsamling af oplysninger og kombination med tidligere indsamlet information for at vælge og levere reklamer og for at måle levering og effektivitet af sådanne annoncer. Dette omfatter ved hjælp af tidligere indsamlede oplysninger om dine interesser for at vælge annoncer, behandlingsdata om, hvad <b>reklamer</b> der blev vist, hvor ofte de blev vist, hvornår og hvor de blev vist, og om du tog nogen handling relateret til annoncen, herunder for eksempel at klikke på en annonce eller foretage et køb. Dataene vil blive brugt til at personliggøre reklamer på selve hjemmesiden, men også i andre sammenhænge som andre hjemmesider, apps, browsere og enheder.<br><br>Inkluderer:<br> Google",
            de: "Sammlung von Informationen und Kombination mit zuvor gesammelten Informationen, um Werbung für Sie auszuwählen und bereitzustellen und um die Bereitstellung und Effektivität solcher Werbung zu messen. Dies beinhaltet die Verwendung von zuvor erfassten Informationen über Ihre Interessen zur Auswahl von Werbungen, der Verarbeitung von Daten darüber, welche <b>Werbungen</b> gezeigt wurden, wie häufig diese gezeigt wurden, wann und wo sie gezeigt wurden und ob Sie irgendeine Aktion im Zusammenhang mit den Werbungen durchgeführt haben, z. B. auf eine Anzeige klicken oder einen Kauf tätigen. Die Daten werden dazu verwendet, Werbung auf der Website selbst, aber auch in anderen Kontexten wie anderen Websites, Apps, Browsern und Geräten zu personalisieren.<br><br>Beinhaltet auch:<br>Google",
            pt: "Coleta de informações e combinação com informações coletadas anteriormente para selecionar e entregar anúncios e medir a entrega e eficácia de tais anúncios. Isso inclui o uso de informações coletadas anteriormente sobre seus interesses para selecionar anúncios, processar dados sobre quais <b>anúncios</b> foram exibidos, com que frequência foram exibidos, quando e onde foram exibidos e se você realizou alguma ação relacionada ao anúncio, incluindo, por exemplo, clicar em um anúncio ou fazer uma compra. Os dados serão usados para personalizar a publicidade no próprio site, mas também em outros contextos, como outros sites, aplicativos, navegadores e dispositivos.<br><br>Também inclui:<br>Google",
            fr: "Collecte d'informations et combinaison avec des informations collectées précédemment, afin de sélectionner et de diffuser des publicités, ainsi que de mesurer la livraison et l'efficacité de ces publicités. Cela inclut l'utilisation d'informations précédemment collectées sur vos centres d'intérêt pour sélectionner des publicités, le traitement des données sur les publicités qui ont été diffusées, à quelle fréquence elles ont été diffusées, quand et où elles ont été diffusées, et si vous avez pris des mesures liées à la publicité, telles que cliquer sur une publicité ou effectuer un achat. Les données seront utilisées pour personnaliser la publicité sur le site web lui-même, mais également dans d'autres contextes tels que d'autres sites web, applications, navigateurs et appareils.<br><br>Comprend également :<br>Google",
          },
          OTHER_NAME: {
            en: "Other Purposes",
            da: "Andre formål",
            de: "Andere Zwecke",
            pt: "Outras Finalidades",
            fr: "Autres fins",
          },
          OTHER_DESCRIPTION: {
            en: "Unclassified data collection for which the purpose is not clearly described by the website or where the data collection and processing does not fit any other category",
            da: "Uklassificeret dataindsamling, for hvilket formålet ikke er tydeligt beskrevet af hjemmesiden, eller hvor dataindsamling og -behandlingen ikke passer til nogen anden kategori",
            de: "Nicht klassifizierte Datenerhebung, deren Zweck auf der Website nicht eindeutig beschrieben ist oder deren Erhebung und Verarbeitung in keine andere Kategorie fällt",
            pt: "Coleta de dados não classificados para as quais a finalidade não é claramente descrita pelo site ou onde a coleta e o processamento de dados não se enquadram em nenhuma outra categoria",
            fr: "Collecte de données non classifiées pour lesquelles la finalité n'est pas clairement décrite par le site web, ou lorsque la collecte et le traitement des données ne correspondent à aucune autre catégorie.",
          },
          AUTOFILL_NOT_WORKING: {
            en: "GDPR autofill didn't work?",
            da: "Virkede autoudfyldningen ikke?",
            de: "GDPR-Autofill hat nicht funktioniert?",
            pt: "O preenchimento automático do GDPR não funcionou?",
            fr: "Le remplissage automatique du RGPD n'a pas fonctionné ?",
          },
          LET_US_KNOW: {
            en: "Let us know!",
            da: "Fortæl os!",
            de: "Lassen Sie es uns wissen!",
            pt: "Nos informe!",
            fr: "Faites-le nous savoir !",
          },
          KEEP_RUNNING: {
            en: "Keep running on this site?",
            da: "Fortsæt med at køre på denne side?",
            de: "Weiter auf dieser Website ausführen?",
            pt: "Continuar executando neste site?",
            fr: "Continuer l'exécution sur ce site ?",
          },
          MORE_ADDON_SETTINGS: {
            en: "More Add-on Settings",
            da: "Flere addon indstillinger",
            de: "Weitere Add-on-Einstellungen",
            pt: "Mais configurações do Add-on",
            fr: "Paramètres de l'extension",
          },
          PERMISSIONS_DESCRIPTION: {
            en: "In order to function this extension asks for the following permissions",
            da: "For at fungere korrekt har denne udviddelse brug for adgang til følgende",
            de: "Um zu funktionieren, benötigt diese Erweiterung die folgenden Berechtigungen",
            pt: "Para funcionar, esta extensão pede as seguintes permissões",
            fr: "Pour fonctionner, cette extension demande les autorisations suivantes",
          },
          PERMISSIONS_READ: {
            en: "Access to read all pages",
            da: "Adgang til at læse alle sider",
            de: "Zugang zum Lesen aller Seiten",
            pt: "Acesso para ler todas as páginas",
            fr: "Accès à la lecture de toutes les pages",
          },
          PERMISSIONS_READ_DETAIL: {
            en: "We search each page you visit for consent-related popups that we know how to handle",
            da: "Vi gennemsøger alle sider du besøger for at finde popups som vi kan finde ud af at håndtere",
            de: "Wir durchsuchen jede Seite, die Sie besuchen, nach zustimmungsrelevanten Popups",
            pt: "Procuramos em cada página que visita popups relacionados com o consentimento que sabemos como tratar",
            fr: "Nous recherchons sur chaque page que vous visitez la bannière de consentement liées au consentement que nous savons gérer",
          },
          PERMISSIONS_TABS: {
            en: "Information about tab URLs",
            da: "Information om fanebladets URL",
            de: "Informationen über Tab URLs",
            pt: "Informações sobre URLs de separadores",
            fr: "informations sur les URL des onglets",
          },
          PERMISSIONS_TABS_DETAIL: {
            en: "You can turn the extension on/off on a page-by-page basis by clicking the icon. To check if it is enabled it needs to know the address",
            da: "Du kan slå udviddelsen til/fra side for side ved at klikke på ikonet. For at se om den er slået til har den brug for at læse adressen",
            de: "Sie können die Erweiterung für jede Seite einzeln ein- und ausschalten, indem Sie auf das Icon klicken. Um zu überprüfen, ob sie aktiviert ist, muss die Adresse bekannt sein",
            pt: "Pode ativar/desativar a extensão numa base de página a página, clicando no ícone. Para verificar se está activada, é necessário conhecer o endereço",
            fr: "Vous pouvez activer/désactiver l'extension page par page en cliquant sur l'icône. Pour vérifier si l'extension est activée, il faut connaître l'adresse suivante",
          },
          PERMISSIONS_STORAGE: {
            en: "Storage",
            da: "Opbevaring af data",
            de: "Lagerung",
            pt: "Armazenamento",
            fr: "stockage",
          },
          PERMISSIONS_STORAGE_DETAIL: {
            en: "Your preferences and settings are stored directly in your browser",
            da: "Dine valg og indstillinger gemmes direkte i din browser",
            de: "Ihre Präferenzen und Einstellungen werden direkt in Ihrem Browser gespeichert",
            pt: "As suas preferências e definições são armazenadas diretamente no seu browser",
            fr: "Vos préférences et vos paramètres sont stockés directement dans votre navigateur",
          },
          PERMISSIONS_NONE: {
            en: "Without these permissions it will simply do nothing.",
            da: "Uden adgang vil udviddelsen ikke kunne gøre noget overhovedet.",
            de: "Ohne diese Berechtigung wird das Tool nicht funktionieren",
            pt: "Sem estas permissões, não fará nada.",
            fr: "Sans ces autorisations, il ne fera rien.",
          },
          PERMISSIONS_GRANT: {
            en: "Grant Permissions",
            da: "Giv Adgang",
            de: "Gib Zugang",
            pt: "Conceder autorizações",
            fr: "Accorder des autorisations",
          },
          PERMISSIONS_FAIL: {
            en: "Some browsers do not allow us to popup the permission request. You have to manually allow 'Access to read all pages' through the settings",
            da: "Nogle browsere tillader ikke at vi viser en popup og spørger om adgang. Du skal manuelt tillade 'Adgang til at læse alle sider' igennem indstillingerne",
            de: "Einige Browser erlauben es uns nicht, die Berechtigungsanfrage zu öffnen. Sie müssen manuell erlauben",
            pt: "Alguns navegadores não permitem que apareça o pedido de autorização. Tem de autorizar manualmente o 'Acesso para ler todas as páginas' através das definições",
            fr: "Certains navigateurs ne nous permettent pas d'afficher la demande d'autorisation. Vous devez autoriser manuellement 'Accès à la lecture de toutes les pages' dans les paramètres.",
          },
          EDITOR_HEADER: {
            en: "GDPR Consent Rules Editor",
            da: "GDPR samtykke regel-editor",
            de: "Editor für die GDPR-Zustimmungsregeln",
            pt: "Editor de regras de consentimento GDPR",
            fr: "Éditeur de règles de consentement RGPD",
          },
          MENU: { en: "Menu", da: "Menu", de: "Menü", pt: "Menu", fr: "Menu" },
          BACK: {
            en: "Back",
            da: "Tilbage",
            de: "Zurück",
            pt: "Voltar",
            fr: "Retour",
          },
          SAVE_CUSTOM_RULE: {
            en: "Save Custom Rule",
            da: "Gem brugerdefineret regel",
            de: "Benutzerdefinierte Regel speichern",
            pt: "Salvar regra customizada",
            fr: "Enregistrer la règle personnalisée",
          },
          EXPORT_JSON: {
            en: "Export JSON",
            da: "Eksportér JSON",
            de: "JSON exportieren",
            pt: "Exportar JSON",
            fr: "Exporter le JSON",
          },
          COLLAPSE_ALL: {
            en: "Collapse All",
            da: "Skjul alle",
            de: "Alle ausblenden",
            pt: "Recolher Todos",
            fr: "Réduire tout",
          },
          UNCOLLAPSE_ALL: {
            en: "Uncollapse all",
            da: "Vis alle",
            de: "Alle anzeigen",
            pt: "Expandir Todos",
            fr: "Développer tout",
          },
          DRAGGABLE_ELEMENTS: {
            en: "Draggable Elements",
            da: "Trækbare elementer",
            de: "Verschiebbare Elemente",
            pt: "Elementos Arrastáveis",
            fr: "Éléments déplaçables",
          },
          DETECTOR: {
            en: "Detector",
            da: "Detektor",
            de: "Detektor",
            pt: "Detector",
            pt: "Détecteur",
          },
          CSS_MATCHER: {
            en: "CssMatcher",
            da: "CssSammenligner",
            de: "CssAbgleich",
            pt: "CssMatcher",
            fr: "CssMatcher",
          },
          URL_MATCHER: {
            en: "UrlMatcher",
            da: "UrlSammenligner",
            de: "UrlAbgleich",
            pt: "UrlMatcher",
            fr: "UrlMatcher",
          },
          URL_MATCHER_DESCRIPTION: {
            en: "Matches 'location.origin' against a list of urls",
            da: "Matcher 'location.origin' mod en liste over URL'er",
            de: "Gleicht 'location.origin' mit einer Liste von URLs ab",
            pt: "Corresponde a 'location.origin' a uma lista de URLs",
            fr: "Correspond à 'location.origin' par rapport à une liste d'URLs",
          },
          URL_LABEL: { en: "Url", da: "Url", de: "URLs", pt: "Url", fr: "Url" },
          URL_LABEL_HELP: {
            en: "The urls to test against, if one matches the matcher is true",
            da: "Webadresserne til at teste op imod, hvis en af dem matcher, er sammenligneren sand",
            de: "Die URLs, gegen die getestet werden soll. Wenn einer übereinstimmt, ist der Matcher wahr",
            pt: "Os URLs para testar, se um corresponder, o matcher é verdadeiro",
            fr: "Les URLs à tester, si l'une d'entre elles correspond, le sélecteur est vrai",
          },
          REGEXP_LABEL: {
            en: "RegExp",
            da: "RegExp",
            de: "RegExp",
            pt: "RegExp",
            fr: "RegExp",
          },
          REGEXP_LABEL_HELP: {
            en: "Treats the url as a regular expression.",
            da: "Behandler url'en som et regulært udtryk.",
            de: "Behandelt die URL als regulären Ausdruck.",
            pt: "Trata o URL como uma expressão regular.",
            fr: "Traite l'URL comme une expression régulière.",
          },
          CHECKBOX_MATCHER: {
            en: "CheckboxMatcher",
            da: "CheckboksSammenligner",
            de: "CheckboxAbgleich",
            pt: "CheckboxMatcher",
            fr: "CheckboxMatcher",
          },
          CLICK_ACTION: {
            en: "ClickAction",
            da: "KlikHandling",
            de: "KlickAktion",
            pt: "ClickAction",
            fr: "ClickAction",
          },
          MULTICLICK_ACTION: {
            en: "MultiClickAction",
            da: "MultiKlikHandling",
            de: "MultiKlickAktion",
            pt: "MultiClickAction",
            fr: "MultiClickAction",
          },
          CONSENT_ACTION: {
            en: "ConsentAction",
            da: "SamtykkeHandling",
            de: "ZustimmungAktion",
            pt: "ConsentAction",
            fr: "ConsentAction",
          },
          LIST_ACTION: {
            en: "ListAction",
            da: "ListeHandling",
            de: "ListenAktion",
            pt: "ListAction",
            fr: "ListAction",
          },
          WAIT_CSS_ACTION: {
            en: "WaitCssAction",
            da: "VentCssHandling",
            de: "WarteCssAktion",
            pt: "WaitCssAction",
            fr: "WaitCssAction",
          },
          IF_CSS_ACTION: {
            en: "IfCssAction",
            da: "IfCssHandling",
            de: "IfCssAktion",
            pt: "IfCssAction",
            fr: "IfCssAction",
          },
          FOR_EACH_ACTION: {
            en: "ForEachAction",
            da: "ForEachHandling",
            de: "BeiJederAktion",
            pt: "ForEachAction",
            fr: "ForEachAction",
          },
          SLIDE_ACTION: {
            en: "SlideAction",
            da: "SlideHandling",
            de: "SchiebeAktion",
            pt: "SlideAction",
            fr: "SlideAction",
          },
          CLOSE_ACTION: {
            en: "CloseAction",
            da: "LukHandling",
            de: "SchliessAktion",
            pt: "CloseAction",
            fr: "CloseAction",
          },
          HIDE_ACTION: {
            en: "HideAction",
            da: "SkjulHandling",
            de: "AusblendeAktion",
            pt: "HideAction",
            fr: "HideAction",
          },
          WAIT_ACTION: {
            en: "WaitAction",
            da: "VentHandling",
            de: "WarteAktion",
            pt: "WaitAction",
            fr: "WaitAction",
          },
          CONSENT: {
            en: "Consent",
            da: "Samtykke",
            de: "Zustimmung",
            pt: "Consentimento",
            fr: "Consentement",
          },
          CONSENTS: {
            en: "Consents",
            da: "Samtykker",
            de: "Zustimmungen",
            pt: "Consentimentos",
            fr: "Consentements",
          },
          DOM_SELECTOR: {
            en: "DOMSelector",
            da: "DOMVælger",
            de: "DOMWähler",
            pt: "DOMSelector",
            fr: "DOMSelector",
          },
          TRASH: {
            en: "Trash",
            da: "Papirkurv",
            de: "Papierkorb",
            pt: "Lixeira",
            fr: "Corbeille",
          },
          LOAD_RULES: {
            en: "Load Rules",
            da: "Indlæs regler",
            de: "Regeln laden",
            pt: "Carregar Regras",
            fr: "Charger les règles",
          },
          FROM_PLUGIN_SOURCE: {
            en: "From Plugin Sources",
            da: "Fra Addon-kilderne",
            de: "Aus Plugin-Quellen",
            pt: "De Fontes de Plug-ins",
            fr: "Depuis les sources de plugin",
          },
          LOAD: {
            en: "Load",
            da: "Indlæs",
            de: "Laden",
            pt: "Carregar",
            fr: "Charger",
          },
          FROM_CUSTOM_RULES: {
            en: "From Your Custom Rules",
            da: "Fra dine brugerdefinerede regler",
            de: "Von Ihren benutzerdefinierten Regeln",
            pt: "De suas regras personalizadas",
            fr: "À partir de vos règles personnalisées",
          },
          DELETE: {
            en: "Delete",
            da: "Slet",
            de: "Löschen",
            pt: "Excluir",
            fr: "Supprimer",
          },
          FROM_PASTED_JSON: {
            en: "From Pasted JSON",
            da: "Fra indsat JSON",
            de: "Aus JSON einfügen",
            pt: "Do JSON Colado",
            fr: "Depuis JSON collé",
          },
          CREATE_FROM_SCRATCH: {
            en: "... or Create a New Rule From Scratch:",
            da: "... eller opret en ny regel fra bunden:",
            de: "... oder eine neue Regel von Grund auf erstellen:",
            pt: "... ou Crie uma Nova Regra do Zero:",
            fr: "... ou Créez une nouvelle règle à partir de zéro :",
          },
          CREATE_NEW_RULE: {
            en: "Create New Rule",
            da: "Opret ny regel",
            de: "Neue Regel erstellen",
            pt: "Criar Nova Regra",
            fr: "Créer une nouvelle règle",
          },
          SELECT: {
            en: "Select",
            da: "Vælg",
            de: "Auswählen",
            pt: "Selecionar",
            fr: "Sélectionner",
          },
          CONSENT_MANAGEMENT_PROVIDER_POPUP: {
            en: "Consent Management Popup Provider Settings",
            da: "Indstillinger for samtykke popup-udbyder",
            de: "Popup-Anbietereinstellungen für die Zustimmungsverwaltung",
            pt: "Configurações do fornecedor de Consent Management Popup",
            fr: "Paramètres du fournisseur de fenêtre contextuelle de gestion du consentement",
          },
          NAME_OF_CMP: {
            en: "Name of CMP",
            da: "Navn på CMP",
            de: "Name der CMP",
            pt: "Nome do CMP",
            fr: "Nom du CMP",
          },
          NAME_OF_CMP_HELP: {
            en: "This is the name that will be displayed to the user when the popup is detected",
            da: "Dette er navnet som vil blive vist til brugeren når denne udbyder detekteres",
            de: "Der Name, der dem Benutzer angezeigt wird, wenn das Popup erkannt wird",
            pt: "Este é o nome que será exibido ao usuário quando o pop-up for detectado",
            fr: "Il s'agit du nom qui sera affiché à l'utilisateur lorsque la fenêtre contextuelle est détectée",
          },
          DRAG_HINT: {
            en: "Hint: Dragging while holding CTRL will copy the dragged subtree instead of moving it.",
            da: "Hint: Træk imens CTRL holdes nede, kopierer det trækkede subtræ istedet for at flytte det",
            de: "Tipp: Wenn Sie bei gedrückter STRG-Taste ziehen, wird der gewählte Teil des Baumdiagramms kopiert, anstatt ihn zu verschieben.",
            pt: "Dica: Arrastar mantendo a tecla CTRL pressionada irá copiará a subárvore arrastada ao invés de movê-la.",
            fr: "Astuce : Faites glisser en maintenant la touche CTRL enfoncée pour copier la sous-arborescence déplacée au lieu de la déplacer.",
          },
          DETECTORS: {
            en: "Detectors:",
            da: "Detektorer:",
            de: "Detektoren:",
            pt: "Detectores:",
            fr: "Détecteurs:",
          },
          DETECTORS_HELP: {
            en: "Detectors are used to determine when a consent popup of this type has appeared on the screen. There can often be multiple detectors for the same popup if different variants exist (bottom bar, middle popup etc)",
            da: "Detektorer bruges til at afgøre, hvornår en samtykke-popup af denne type er dukket op på skærmen. Der kan ofte være flere detektorer for den samme popup, hvis der findes forskellige varianter (nederste bjælke, midterste popup osv.)",
            de: "Detektoren werden verwendet, um festzustellen, wann ein Popup-Fenster dieser Art auf dem Bildschirm erscheint. Es kann oft mehrere Detektoren für dasselbe Popup geben, wenn verschiedene Varianten existieren (unterer Balken, mittleres Popup usw.)",
            pt: "Detectores são usados para determinar quando um pop-up de consentimento desse tipo apareceu na tela. Muitas vezes, pode haver vários detectores para o mesmo pop-up se existirem diferentes variantes (barra inferior, pop-up do meio, etc.)",
            fr: "Les détecteurs sont utilisés pour déterminer quand une fenêtre contextuelle de consentement de ce type apparaît à l'écran. Il peut souvent y avoir plusieurs détecteurs pour la même fenêtre contextuelle si différentes variantes existent (barre inférieure, fenêtre contextuelle du milieu, etc.)",
          },
          METHODS: {
            en: "Methods:",
            da: "Metoder:",
            de: "Methoden:",
            pt: "Métodos:",
            fr: "Méthodes:",
          },
          METHODS_HELP: {
            en: "Methods are executed when a popup has been detected by a detector. They serve different purposes such as opening and saving the consent configuration dialog.",
            da: "Metoder udføres, når en popup er blevet detekteret af en detektor. De tjener forskellige formål, såsom at åbne og gemme dialogboksen for samtykkekonfiguration.",
            de: "Methoden werden ausgeführt, wenn ein Popup von einem Detektor erkannt wurde. Sie dienen verschiedenen Zwecken, z. B. Öffnen und Speichern des Konfigurationsdialogs für die Zustimmung.",
            pt: "Métodos executados quando um pop-up é identificado por um detector. Eles servem a propósitos diferentes, como abrir e salvar a caixa de diálogo de configuração de consentimento.",
            fr: "Les méthodes sont exécutées lorsqu'une fenêtre contextuelle est détectée par un détecteur. Elles servent à différents objectifs, tels que l'ouverture et l'enregistrement de la boîte de dialogue de configuration du consentement.",
          },
          PRESENT_MATCHER: {
            en: "presentMatcher",
            da: "tilstedeMatcher",
            de: "VorhandenVergleicher",
            pt: "presentMatcher",
            fr: "presentMatcher",
          },
          PRESENT_MATCHER_HELP: {
            en: "This matcher determines whether a CMP popup is present on the page",
            da: "Denne matcher afgør, om der er en CMP-popup på siden",
            de: "Dieser Matcher bestimmt, ob ein CMP-Popup auf der Seite vorhanden ist",
            pt: "Este 'matcher' determina se um pop-up de CMP existe na página",
            fr: "Ce comparateur détermine si une fenêtre contextuelle CMP est présente sur la page",
          },
          SHOWING_MATCHER: {
            en: "showingMatcher",
            da: "visesMatcher",
            de: "AnzeigenMatcher",
            pt: "showingMatcher",
            fr: "showingMatcher",
          },
          SHOWING_MATCHER_HELP: {
            en: "This matcher determines if a CMP popup is currently showing",
            da: "Denne matcher afgør, om en CMP-popup i øjeblikket vises",
            de: "Dieser Vergleicher ermittelt, ob ein CMP-Popup derzeit angezeigt wird",
            pt: "Este 'matcher' determina se um pop-up de CMP está sendo exibido no momento",
            fr: "Ce comparateur détermine si une fenêtre contextuelle CMP est actuellement affichée",
          },
          TARGET: {
            en: "target",
            da: "mål",
            de: "Ziel",
            pt: "alvo",
            fr: "cible",
          },
          TARGET_HELP: {
            en: "The target of the selection",
            da: "Målet for udvælgelsen",
            de: "Das Ziel der Auswahl",
            pt: "O alvo da seleção",
            fr: "La cible de la sélection",
          },
          PARENT: {
            en: "parent",
            da: "forælder",
            de: "Elternteil",
            pt: "pai",
            fr: "parent",
          },
          PARENT_HELP: {
            en: "An optional parent to search for before starting the search for the target from there",
            da: "En valgfri forælder at søge efter, før du søgningen efter målet startes derfra",
            de: "Ein optionales Elternteil, nach dem gesucht wird, bevor die Suche nach dem Ziel von dort aus beginnt",
            pt: "Pai opcional prévio de busca, antes de iniciar a pesquisa do alvo",
            fr: "Un parent facultatif à rechercher avant de commencer la recherche de la cible à partir de là",
          },
          SELECTOR: {
            en: "selector",
            da: "vælger",
            de: "Wähler",
            pt: "seletor",
            fr: "sélecteur",
          },
          SELECTOR_HELP: {
            en: "CSS selector that points to a DOM node",
            da: "CSS-vælger, der peger på en DOM-node",
            de: "CSS-Selektor, der auf einen DOM-Knoten zeigt",
            pt: "Seletor CSS que aponta para um nó DOM",
            fr: "Sélecteur CSS pointant vers un nœud DOM",
          },
          TEXT_FILTER: {
            en: "textFilter",
            da: "tekstFilter",
            de: "TextFilter",
            pt: "textFilter",
            fr: "textFilter",
          },
          TEXT_FILTER_HELP: {
            en: "A text filter applied to the found DOM nodes based on their content",
            da: "Et tekstfilter anvendt på de fundne DOM-noder baseret på deres indhold",
            de: "Ein Textfilter, der auf die gefundenen DOM-Knoten angewendet wird, basierend auf ihrem Inhalt",
            pt: "Filtro de texto aplicado aos nós DOM encontrados com base em seu conteúdo",
            fr: "Un filtre texte appliqué aux nœuds DOM trouvés en fonction de leur contenu",
          },
          IFRAME_FILTER: {
            en: "iframeFilter",
            da: "iframeFilter",
            de: "IframeFilter",
            pt: "iframeFilter",
            fr: "iframeFilter",
          },
          IFRAME_FILTER_HELP: {
            en: "Only trigger if inside an iframe",
            da: "Match kun hvis inde i en iframe",
            de: "Nur auslösen, wenn innerhalb eines iframe",
            pt: "Só acionar se estiver dentro de um iframe",
            fr: "Déclencher uniquement s'il est à l'intérieur d'un iframe",
          },
          DISPLAY_FILTER: {
            en: "displayFilter",
            da: "displayFilter",
            de: "DisplayFilter",
            pt: "displayFilter",
            fr: "displayFilter",
          },
          DISPLAY_FILTER_HELP: {
            en: "Only trigger if the DOM node has 'display' set to not 'none'",
            da: "Match kun hvis DOM-noden har 'display' sat til noget andet end 'none'",
            de: "Wird nur ausgelöst, wenn der DOM-Knoten 'display' nicht auf 'none' gesetzt ist.",
            pt: "Acionar apenas se o nó DOM tiver 'exibir' definido como não 'nenhum'",
            fr: "Déclencher uniquement si le nœud DOM a 'display' défini sur autre chose que 'none'",
          },
          CHILD_FILTER: {
            en: "ChildFilter",
            da: "BarnFilter",
            de: "KindFilter",
            pt: "ChildFilter",
          },
          CHILD_FILTER_HELP: {
            en: "Only trigger if child matching this DOM node selector is found",
            da: "Match kun, hvis der findes et barn, der matcher denne DOM-nodevælger",
            de: "Nur auslösen, wenn ein Kind gefunden wird, das diesem DOM-Knoten-Selektor entspricht",
            pt: "Acionar apenas se o filho correspondente a este seletor de nó DOM for encontrado",
            fr: "Déclencher uniquement si un enfant correspondant à ce sélecteur de nœud DOM est trouvé",
          },
          ACTIONS: {
            en: "actions",
            da: "handlinger",
            de: "Aktionen",
            pt: "ações",
            fr: "actions",
          },
          ACTIONS_HELP: {
            en: "Each of these actions will be performed in order",
            da: "Hver af disse handlinger vil blive udført i rækkefølge",
            de: "Jede dieser Aktionen wird der Reihe nach durchgeführt",
            pt: "Cada uma dessas ações será executada em ordem",
            fr: "Chacune de ces actions sera exécutée dans l'ordre",
          },
          SELECTOR_HELP_LIST: {
            en: "CSS selector that points to a list of DOM nodes",
            da: "CSS-vælger, der peger på en liste over DOM-noder",
            de: "CSS-Selektor, der auf eine Liste von DOM-Knoten verweist",
            pt: "Seletor CSS que aponta para uma lista de nós DOM",
            fr: "Sélecteur CSS pointant vers une liste de nœuds DOM",
          },
          ACTION: {
            en: "action",
            da: "handling",
            de: "Aktion",
            pt: "ação",
            fr: "action",
          },
          ACTION_HELP: {
            en: "The action to perform for each of the targets found by the selector",
            da: "Den handling, der skal udføres for hvert af målene fundet af vælgeren",
            de: "Die Aktion, die für jedes der vom Selektor gefundenen Ziele durchgeführt werden soll",
            pt: "A ação a ser executada para cada um dos destinos encontrados pelo seletor",
            fr: "L'action à effectuer pour chacune des cibles trouvées par le sélecteur",
          },
          IF_TRUE_ACTION: {
            en: "trueAction",
            da: "sandHandling",
            de: "wahrAktion",
            pt: "trueAction",
            fr: "trueAction",
          },
          IF_TRUE_ACTION_HELP: {
            en: "The action to execute if true",
            da: "Handlingen, der skal udføres, hvis sand",
            de: "Die Aktion, die ausgeführt werden soll, wenn wahr",
            pt: "A ação a ser executada se for verdadeira",
            fr: "L'action à effectuer si vrai",
          },
          IF_FALSE_ACTION: {
            en: "falseAction",
            da: "falskHandling",
            de: "falschAktion",
            pt: "falseAction",
            fr: "falseAction",
          },
          IF_FALSE_ACTION_HELP: {
            en: "The action to execute if false",
            da: "Handlingen, der skal udføres, hvis falsk",
            de: "Die Aktion, die ausgeführt werden soll, wenn falsch",
            pt: "A ação a ser executada se for falsa",
            fr: "L'action à effectuer si faux",
          },
          SELECTOR_CLICK_HELP: {
            en: "CSS selector that points to the DOM node that should be clicked",
            da: "CSS-vælger, der peger på den DOM-node, der skal klikkes på",
            de: "CSS-Selektor, der auf den DOM-Knoten zeigt, der angeklickt werden soll",
            pt: "Seletor CSS que aponta para o nó DOM que deve ser clicado",
            fr: "Sélecteur CSS pointant vers le nœud DOM qui doit être cliqué",
          },
          OPEN_IN_TAB: {
            en: "openInTab",
            da: "åbenIFane",
            de: "öffnenInTab",
            pt: "openInTab",
            fr: "openInTab",
          },
          OPEN_IN_TAB_HELP: {
            en: "If what is clicked is a link then optionally check this box to open it in a new tab",
            da: "Hvis det, der klikkes på, er et link, så marker valgfrit dette felt for at åbne det i en ny fane",
            de: "Wenn es sich bei dem angeklickten Element um einen Link handelt, können Sie dieses Kästchen ankreuzen, um ihn in einem neuen Tab zu öffnen.",
            pt: "Se o que for clicado for um link, você pode marcar opcionalmente esta caixa para abri-lo em uma nova aba",
            fr: "Si ce qui est cliqué est un lien, cochez éventuellement cette case pour l'ouvrir dans un nouvel onglet",
          },
          SELECTOR_HIDE_HELP: {
            en: "CSS selector that points to the DOM node that should be hidden",
            da: "CSS-vælger, der peger på den DOM-node, der skal skjules",
            de: "CSS-Selektor, der auf den DOM-Knoten zeigt, der ausgeblendet werden soll",
            pt: "Seletor CSS que aponta para o nó DOM que deve ser ocultado",
            fr: "Sélecteur CSS pointant vers le nœud DOM qui doit être masqué",
          },
          DOM_NODE_SELECTOR: {
            en: "DOM node selector",
            da: "DOM-nodevælger",
            de: "DOM-Knoten-Wähler",
            pt: "Seletor de nó DOM",
            fr: "Sélecteur de nœud DOM",
          },
          TARGET_SLIDE_HELP: {
            en: "The target to perform a slide gesture on",
            da: "Målet der skal udføres en slidebevægelse på",
            de: "Das Ziel, auf dem eine Schiebegeste ausgeführt werden soll",
            pt: "O alvo para executar um gesto de deslizamento",
            fr: "La cible pour effectuer un geste de glissement",
          },
          DRAG_TARGET: {
            en: "dragTarget",
            da: "trækMål",
            de: "DragZiel",
            pt: "dragTarget",
            fr: "dragTarget",
          },
          DRAG_TARGET_HELP: {
            en: "The DOM node to drag the slider to, x or y wise depending on axis.",
            da: "DOM-noden, som slideren skal trækkes til, x eller y afhængigt af aksen.",
            de: "Der DOM-Knoten, auf den der Schieberegler gezogen werden soll, je nach Achse in x- oder y-Richtung.",
            pt: "O nó DOM para o qual arrastar o controle deslizante, x ou y, dependendo do eixo.",
            fr: "Le nœud DOM vers lequel faire glisser le curseur, horizontalement (x) ou verticalement (y) en fonction de l'axe.",
          },
          AXIS: { en: "Axis", da: "Akse", de: "Achse", pt: "Eixo", fr: "Axe" },
          AXIS_HELP: {
            en: "Direction of the slide",
            da: "Retningen for slidebevægelsen",
            de: "Richtung des Schiebereglers",
            pt: "Direção do deslizamento",
            fr: "Direction du glissement",
          },
          X: { en: "X", da: "X", de: "X", pt: "X", fr: "X" },
          Y: { en: "Y", da: "Y", de: "Y", pt: "Y", fr: "Y" },
          WAIT_FOR: {
            en: "waitFor",
            da: "ventPå",
            de: "WarteAuf",
            pt: "waitFor",
            fr: "waitFor",
          },
          WAIT_FOR_HELP: {
            en: "The thing to wait for",
            da: "Det der skal ventes på",
            de: "Die Sache, auf die gewartet werden soll",
            pt: "A coisa a esperar",
            fr: "La chose à attendre",
          },
          RETRIES: {
            en: "retries",
            da: "forsøg",
            de: "Wiederholungen",
            pt: "novas tentativas",
            fr: "tentatives",
          },
          RETRIES_HELP: {
            en: "How many times to repeat the search",
            da: "Hvor mange gange søgningen skal gentages",
            de: "Wie oft die Suche wiederholt wird",
            pt: "Quantas vezes se deve repetir a pesquisa",
            fr: "Combien de fois répéter la recherche",
          },
          WAIT_TIME: {
            en: "waitTime",
            da: "venteTid",
            de: "Wartezeit",
            pt: "waitTime",
            fr: "tempsAttente",
          },
          WAIT_TIME_HELP: {
            en: "How long to wait after each search",
            da: "Hvor lang tid der skal gå efter hver søgning",
            de: "Wie lange gewartet werden soll nach jeder Suche",
            pt: "Quanto tempo esperar após cada pesquisa",
            fr: "Combien de temps attendre après chaque recherche",
          },
          NEGATED: {
            en: "negated",
            da: "negeret",
            de: "verneint",
            pt: "negado",
            fr: "négatif",
          },
          NEGATED_HELP: {
            en: "If enabled, waits until selected DOM node no longer exists",
            da: "Hvis aktiveret, venter, indtil valgte DOM-node ikke længere eksisterer",
            de: "Falls aktiviert, wird gewartet, bis der ausgewählte DOM-Knoten nicht mehr existiert.",
            pt: "Se ativado, espera até que o nó DOM selecionado não exista mais",
            fr: "Si activé, attend que le nœud DOM sélectionné n'existe plus",
          },
          ACTION_WAIT_TIME_HELP: {
            en: "The amount of time to wait before continuing with the next action.",
            da: "Den tid, der skal ventes, før der fortsættes med den næste handling.",
            de: "Die Zeitspanne, die gewartet werden soll, bevor mit der nächsten Aktion fortgefahren wird.",
            pt: "A quantidade de tempo a esperar antes de avançar para a próxima ação.",
            fr: "La durée à attendre avant de passer à l'action suivante.",
          },
          TYPE: { en: "type", da: "type", de: "Art", pt: "tipo", fr: "type" },
          TYPE_HELP: {
            en: "The type of consent that this block handles",
            da: "Typen af samtykke denne block skal håndtere",
            de: "Die Art der Zustimmung, die diese Blockierung verarbeitet",
            pt: "O tipo de consentimento que este bloco trata",
            fr: "Le type de consentement traité par ce bloc",
          },
          TYPE_A_OPTION: {
            en: "A - Preferences and Functionality",
            da: "A - Præferencer og funktionalitet",
            de: "A - Präferenzen und Funktionalität",
            pt: "A - Preferências e Funcionalidade",
            fr: "A - Préférences et fonctionnalités",
          },
          TYPE_B_OPTION: {
            en: "B - Performance and Analytics",
            da: "B - Ydelse og analyse",
            de: "B - Leistung und Analyse",
            pt: "B - Desempenho e Análise",
            fr: "B - Performance et Analytics",
          },
          TYPE_D_OPTION: {
            en: "D - Information Storage and Access",
            da: "D - Opbevaring og adgang til information",
            de: "D - Informationsspeicherung und -zugriff",
            pt: "D - Armazenamento e Acesso à Informação",
            fr: "D - Stockage et accès à l'information",
          },
          TYPE_E_OPTION: {
            en: "E - Content selection, delivery, and reporting",
            da: "E - Indholdsvalg, levering og rapportering",
            de: "E - Auswahl, Bereitstellung und Berichterstattung von Inhalten",
            pt: "E - Seleção de conteúdo, entrega e relatórios",
            fr: "E - Sélection de contenu, livraison et rapports",
          },
          TYPE_F_OPTION: {
            en: "F - Ad selection, delivery, and reporting",
            da: "F - Annoncevalg, levering og rapportering",
            de: "F - Anzeigenauswahl, -zustellung  und -berichterstattung",
            pt: "F - Seleção, entrega e relatórios de anúncios",
            fr: "F - Sélection, livraison et rapports publicitaires",
          },
          TYPE_X_OPTION: {
            en: "X - Other Purposes",
            da: "X - Andre formål",
            de: "X - Andere Zwecke",
            pt: "X - Outras Finalidades",
            fr: "X - Autres finalités",
          },
          CONSENT_MATCHER: {
            en: "matcher",
            da: "matcher",
            de: "Vergleicher",
            pt: "matcher",
            fr: "matcher",
          },
          CONSENT_MATCHER_HELP: {
            en: "If this matcher triggers a match, it means the consent is currently given",
            da: "Hvis denne matcher udløser et match, betyder det at samtykket i øjeblikket er givet",
            de: "Wenn dieser Abgleich eine Übereinstimmung auslöst, bedeutet dies, dass die Zustimmung derzeit gegeben ist",
            pt: "Se este 'matcher' acionar uma correspondência, significa que o consentimento foi dado no momento",
            fr: "Si ce correspondant déclenche une correspondance, cela signifie que le consentement est actuellement donné",
          },
          TOGGLE_ACTION: {
            en: "toggleAction",
            da: "tilFraHandling",
            de: "UmschaltAktion",
            pt: "toggleAction",
            fr: "actionBasculer",
          },
          TOGGLE_ACTION_HELP: {
            en: "Use this action if the consent is given with a toggle state",
            da: "Brug denne handling, hvis samtykket er givet med en til/fra-tilstand",
            de: "Verwenden Sie diese Aktion, wenn die Zustimmung mit einem Umschaltzustand erteilt wird",
            pt: "Use esta ação se o consentimento for dado com um estado de alternância",
            fr: "Utilisez cette action si le consentement est donné avec un état basculant",
          },
          CONSENT_TRUE_ACTION_HELP: {
            en: "Use this action to set consent to true, non toggle style",
            da: "Brug denne handling til at indstille samtykke til sandt, ikke til/fra-tilstand",
            de: "Verwenden Sie diese Aktion, um die Zustimmung auf wahr zu setzen, ohne Umschaltstil",
            pt: "Use esta ação para definir o consentimento como verdadeiro, sem alternância de estilo",
            fr: "Utilisez cette action pour définir le consentement à vrai, non style basculant",
          },
          CONSENT_FALSE_ACTION_HELP: {
            en: "Use this action to set consent to false, non toggle style",
            da: "Brug denne handling til at indstille samtykke til falsk, ikke til/fra-tilstand",
            de: "Verwenden Sie diese Aktion, um die Zustimmung auf falsch zu setzen, ohne Umschaltstil",
            pt: "Use esta ação para definir o consentimento como falso, sem alternância de estilo",
            fr: "Utilisez cette action pour définir le consentement à faux, non style basculant",
          },
          DEBUG_TRANSLATION_DESCRIPTION: {
            en: "When translation is missing, dont default to english, but instead show debug token.",
            da: "Brug ikke som standard engelsk, hvis en oversættelse mangler.",
            de: "Wenn die Übersetzung fehlt, nicht standardmäßig Englisch, sondern Debug-Token anzeigen.",
            pt: "Quando não houver tradução, não use inglês como padrão, mas mostre o token de debugging.",
            fr: "Lorsque la traduction est manquante, ne pas utiliser l'anglais par défaut, mais afficher plutôt le jeton de débogage.",
          },
          HIDE_CMP: {
            en: "HIDE_CMP",
            da: "SKJUL_CMP",
            de: "AUSBLENDE_CMP",
            pt: "HIDE_CMP",
            fr: "HIDE_CMP",
          },
          OPEN_OPTIONS: {
            en: "OPEN_OPTIONS",
            da: "ÅBEN_INDSTILLINGER",
            de: "ÖFFNE_EINSTELLUNGEN",
            pt: "OPEN_OPTIONS",
            fr: "OPEN_OPTIONS",
          },
          DO_CONSENT: {
            en: "DO_CONSENT",
            da: "UDFØR_SAMTYKKE",
            de: "AUSFÜHRE_ZUSTIMMUNG",
            pt: "DO_CONSENT",
            fr: "DO_CONSENT",
          },
          SAVE_CONSENT: {
            en: "SAVE_CONSENT",
            da: "GEM_SAMTYKKE",
            de: "SPEICHERE_ZUSTIMMUNG",
            pt: "SAVE_CONSENT",
            fr: "SAVE_CONSENT",
          },
          MY_CMP: {
            en: "myCmp",
            da: "minCmp",
            de: "meinCmp",
            pt: "myCmp",
            fr: "myCmp",
          },
          OPTIONS_TITLE: {
            en: "Consent-O-Matic Options",
            da: "Consent-O-Matic indstillinger",
            de: "Consent-O-Matic Einstellungen",
            pt: "Opções do Consent-O-Matic",
            fr: "Options de Consent-O-Matic",
          },
          ARE_YOU_SURE: {
            en: "Are you sure?",
            da: "Er du sikker?",
            de: "Sind Sie sicher?",
            pt: "Tem certeza?",
            fr: "Êtes-vous sûr ?",
          },
          UNHANDLED_EXPLAINER: {
            en: "The site will be added to our list of sites to review",
            da: "Siden bliver tilføjet til vores liste af sider der skal gennemgåes",
            de: "Die Website wird in unsere Liste der zu überprüfenden Websites aufgenommen",
            pt: "O site é adicionado à nossa lista de sites para revisão",
            fr: "Le site sera ajouté à notre liste de sites à examiner",
          },
          CANCEL: {
            en: "Cancel",
            da: "Afbryd",
            de: "Abbrechen",
            pt: "Cancelar",
            fr: "Annuler",
          },
          SEND: {
            en: "Submit",
            da: "Indsend",
            de: "Einsenden",
            pt: "Enviar",
            fr: "Envoyer",
          },
          THANKS: {
            en: "Thank you!",
            da: "Mange tak!",
            de: "Vielen Dank!",
            pt: "Obrigada!",
            fr: "Merci !",
          },
          "NO-CONFIRM": {
            en: "Don't ask next time",
            da: "Spørg ikke næste gang",
            de: "Nächstes Mal nicht fragen",
            pt: "Não perguntar na próxima vez",
            fr: "Ne pas demander la prochaine fois",
          },
          SKIP_SUBMIT_CONFIRMATION: {
            en: "Avoid having to confirm each time when sending reports about badly handled websites using the addon popup",
            da: "Undgå at skulle bekræfte hver gang når der sendes rapport omkring dårligt håndterede websites via addon popuppen",
            de: "Nicht jedes Mal bestätigen, wenn Sie Berichte über schlecht gehandhabte Websites über das Addon-Popup senden.",
            pt: "Evite ter que confirmar toda vez que enviar relatórios sobre sites mal administrados usando o pop-up do complemento",
            fr: "Évitez de devoir confirmer à chaque fois lors de l'envoi de rapports sur des sites mal gérés à l'aide de la fenêtre contextuelle de l'extension",
          },
          UTILITY: {
            en: "UTILITY",
            da: "UTILITY",
            de: "DIENSTPROGRAMM",
            pt: "UTILITY",
            fr: "UTILITAIRE",
          },
          CMP: {
            en: "Consent Management Provider",
            da: "Samtykke-popup-udbyder",
            de: "Einwilligungsverwaltungsanbieter",
            pt: "Consent Management Provider",
            fr: "Fournisseur de gestion du consentement",
          },
          POPUPS_FILLED: {
            en: "Popups Filled",
            da: "Udfyldte Popups",
            pt: "Pop-ups preenchidos",
            de: "Popups gefüllt",
            fr: "Popups remplis",
          },
          CLICKS_MADE: {
            en: "Clicks Made",
            da: "Antal Klik",
            pt: "Cliques Feitos",
            de: "Klicks gemacht",
            fr: "Clics effectués",
          },
          HIDE_INSTEAD_OF_PIP_DESCRIPTION: {
            en: "Hide instead of using Picture In Picture",
            da: "Skjul istedet for at bruge billed i billed",
            de: "Ausblenden statt Bild-in-Bild verwenden",
            pt: "Ocultar em vez de usar Picture In Picture",
            fr: "Cacher au lieu d'utiliser le Picture In Picture",
          },
          IF_ALLOW_ALL_ACTION: {
            en: "IfAllowAllAction",
            da: "IfAllowAllHandling",
            de: "IfAllowAllAktion",
            pt: "IfAllowAllAction",
            fr: "IfAllowAllAction",
          },
          IF_ALLOW_NONE_ACTION: {
            en: "IfAllowNoneAction",
            da: "IfAllowNoneHandling",
            de: "IfAllowNoneAktion",
            pt: "IfAllowNoneAction",
            fr: "IfAllowNoneAction",
          },
          DETECTOR_DESCRIPTION: {
            en: "Used to detect the presence of a CMP",
            da: "Bruges til at detektere tilstedeværelsen af en CMP",
            de: "Wird verwendet, um das Vorhandensein eines CMP zu erkennen",
            pt: "Usado para detectar a presença de um CMP",
            fr: "Utilisé pour détecter la présence d'un CMP",
          },
          CSS_MATCHER_DESCRIPTION: {
            en: "Matches if the css selector is found",
            da: "Matcher, hvis css-vælgeren er fundet",
            de: "Stimmt überein, wenn der CSS-Selektor gefunden wird",
            pt: "Corresponde se o seletor css for encontrado",
            fr: "Correspond si le sélecteur CSS est trouvé",
          },
          CHECKBOX_MATCHER_DESCRIPTION: {
            en: "Matches if the checkbox is found, and checked",
            da: "Matcher, hvis afkrydsningsfeltet er fundet og markeret",
            de: "Stimmt überein, wenn das Kontrollkästchen gefunden und aktiviert wird",
            pt: "Corresponde se a caixa de seleção for encontrada e marcada",
            fr: "Correspond si la case à cocher est trouvée et cochée",
          },
          CLICK_ACTION_DESCRIPTION: {
            en: "Clicks the element found by the css selector",
            da: "Klik på elementet fundet af css-vælgeren",
            de: "Klickt auf das vom CSS-Selektor gefundene Element",
            pt: "Clica no elemento encontrado pelo seletor css",
            fr: "Clique sur l'élément trouvé par le sélecteur CSS",
          },
          MULTICLICK_ACTION_DESCRIPTION: {
            en: "Clicks all elements found by the css selector at once",
            da: "Klik på alle elementerne fundet af css-vælgeren på én gang",
            de: "Klickt alle vom CSS-Selektor gefundenen Elemente auf einmal an",
            fr: "Clique sur tous les éléments trouvés par le sélecteur CSS en une fois",
          },
          CONSENT_ACTION_DESCRIPTION: {
            en: "Handles consent based on users choice",
            da: "Håndterer samtykke baseret på brugernes valg",
            de: "Verarbeitet die Zustimmung basierend auf der Wahl des Benutzers",
            pt: "Lida com o consentimento com base na escolha dos usuários",
            fr: "Traite le consentement en fonction du choix des utilisateurs",
          },
          LIST_ACTION_DESCRIPTION: {
            en: "Allows multiple actions to be run after each other",
            da: "Tillader, at flere handlinger køres efter hinanden",
            de: "Ermöglicht die Ausführung mehrerer Aktionen nacheinander",
            pt: "Permite que várias ações sejam executadas uma após a outra",
            fr: "Permet l'exécution de plusieurs actions l'une après l'autre",
          },
          WAIT_CSS_ACTION_DESCRIPTION: {
            en: "Waits until a css selector is found",
            da: "Venter indtil en css-vælger er fundet",
            de: "Wartet, bis ein CSS-Selektor gefunden wird",
            pt: "Aguarda até que um seletor css seja encontrado",
            fr: "Attend qu'un sélecteur CSS soit trouvé",
          },
          IF_CSS_ACTION_DESCRIPTION: {
            en: "True if the css selector can be found, false otherwise",
            da: "Sandt, hvis css-vælgeren kan findes, ellers falsk",
            de: "Wahr, wenn der CSS-Selektor gefunden werden kann, andernfalls falsch",
            pt: "Verdadeiro se o seletor css puder ser encontrado, falso caso contrário",
            fr: "Vrai si le sélecteur CSS peut être trouvé, sinon faux",
          },
          IF_ALLOW_ALL_ACTION_DESCRIPTION: {
            en: "True, if the user has all consents allowed, false otherwise",
            da: "Sandt, hvis brugeren har alle samtykker tilladt, falsk ellers",
            de: "Wahr, wenn der Benutzer alle Einwilligungen erlaubt hat, andernfalls falsch",
            pt: "Verdadeiro, se o usuário tiver todos os consentimentos permitidos, falso caso contrário",
            fr: "Vrai si l'utilisateur a tous les consentements autorisés, sinon faux",
          },
          IF_ALLOW_NONE_ACTION_DESCRIPTION: {
            en: "True, if the user has all consents rejected, false otherwise",
            da: "Sandt, hvis brugeren har alle samtykker afvist, falsk ellers",
            de: "Wahr, wenn der Benutzer alle Einwilligungen abgelehnt hat, andernfalls falsch",
            pt: "Verdadeiro, se o usuário tiver todos os consentimentos rejeitados, falso caso contrário",
            fr: "Vrai si l'utilisateur a tous les consentements rejetés, sinon faux",
          },
          FOR_EACH_ACTION_DESCRIPTION: {
            en: "Runs an action for each selected element",
            da: "Kører en handling for hvert valgte element",
            de: "Führt eine Aktion für jedes ausgewählte Element aus",
            pt: "Executa uma ação para cada elemento selecionado",
            fr: "Exécute une action pour chaque élément sélectionné",
          },
          SLIDE_ACTION_DESCRIPTION: {
            en: "Simulates interacting with a slider",
            da: "Simulerer interaktion med en slider",
            de: "Simuliert die Interaktion mit einem Schieberegler",
            pt: "Simula a interação com um controle deslizante",
            fr: "Simule l'interaction avec un curseur",
          },
          CLOSE_ACTION_DESCRIPTION: {
            en: "Closes the current window/tab",
            da: "Lukker det aktuelle vindue/faneblad",
            de: "Schließt das aktuelle Fenster/Tab",
            pt: "Fecha a janela/guia atual",
            fr: "Ferme la fenêtre/onglet actuel",
          },
          HIDE_ACTION_DESCRIPTION: {
            en: "Hides the element found with the given css selector.",
            da: "Skjuler elementet fundet med den givne css-vælger.",
            de: "Blendet das Element aus, das mit dem angegebenen CSS-Selektor gefunden wurde.",
            pt: "Oculta o elemento encontrado com o seletor css fornecido.",
            fr: "Masque l'élément trouvé avec le sélecteur CSS donné.",
          },
          WAIT_ACTION_DESCRIPTION: {
            en: "Waits a given amount of time before continuing",
            da: "Venter et givet stykke tid, før der fortsættes",
            de: "Wartet eine bestimmte Zeit, bevor fortgefahren wird",
            pt: "Aguarda um determinado período de tempo antes de continuar",
            fr: "Attend un certain laps de temps avant de continuer",
          },
          CONSENT_DESCRIPTION: {
            en: "Used to handle consent, inside a ConsentAction",
            da: "Bruges til at håndtere samtykke inde i en ConsentHandling",
            de: "Wird verwendet, um die Zustimmung innerhalb einer ConsentAction zu verarbeiten",
            pt: "Usado para lidar com o consentimento, dentro de um ConsentAction",
            fr: "Utilisé pour gérer le consentement, à l'intérieur d'une ConsentAction",
          },
          DOM_SELECTOR_DESCRIPTION: {
            en: "A css selector, with filters",
            da: "En css-vælger med filtre",
            de: "Ein CSS-Selektor mit Filtern",
            pt: "Um seletor css, com filtros",
            fr: "Un sélecteur CSS, avec des filtres",
          },
          HIDE_FROM_DETECTION: {
            en: "Hide from detection",
            da: "Skul fra at blive opdaget",
            de: "Vor Entdeckung verstecken",
            pt: "Ocultar da detecção",
            fr: "Cacher de la détection",
          },
          HIDE_FROM_DETECTION_HELP: {
            en: "Make sure this element and its children, is never detected by Consent-O-Matic",
            da: "Sørg for, at dette element og dets børn aldrig bliver opdaget af Consent-O-Matic",
            de: "Stellen Sie sicher, dass dieses Element und seine untergeordneten Elemente niemals von Consent-O-Matic erkannt werden",
            pt: "Certifique-se de que este elemento e seus filhos nunca sejam detectados pelo Consent-O-Matic",
            fr: "Assurez-vous que cet élément et ses enfants ne sont jamais détectés par Consent-O-Matic",
          },
          FORCE_HIDE: {
            en: "Force hide",
            da: "Tving skjul",
            de: "Ausblenden erzwingen",
            pt: "Forçar ocultação",
            fr: "Forcer la dissimulation",
          },
          FORCE_HIDE_HELP: {
            en: "Force hiding this element, instead of using picture in picture",
            da: "Tving at dette element bliver skjult i stedet for at bruge billede i billede",
            de: "Erzwingen Sie das Ausblenden dieses Elements, anstatt Bild-in-Bild zu verwenden",
            pt: "Forçar a ocultação deste elemento, em vez de usar imagem em imagem",
            fr: "Forcer la dissimulation de cet élément, au lieu d'utiliser l'image dans l'image",
          },
          NEGATED_CHECKBOX_HELP: {
            en: "If checked, the checkbox count as checked when not checked, and vice versa",
            da: "Hvis markeret, tæller afkrydsningsfeltet som markeret, når det ikke er markeret, og omvendt",
            de: "Wenn es aktiviert ist, zählt das Kontrollkästchen als aktiviert, wenn es nicht aktiviert ist, und umgekehrt",
            pt: "Se marcada, a caixa de seleção conta como marcada quando não marcada e vice-versa",
            fr: "Si cochée, la case à cocher est considérée comme cochée lorsqu'elle n'est pas cochée, et vice versa",
          },
          RUN_ROOTED_ACTION: {
            en: "RunRootedAction",
            da: "RunRootedAction",
            de: "RunRootedAction",
            pt: "RunRootedAction",
            fr: "RunRootedAction",
          },
          RUN_ROOTED_ACTION_DESCRIPTION: {
            en: "Run an action rooted at the selected dom element. Ignores any current root set, and sets old root afterwards.",
            de: "Führt eine Aktion aus, die auf dem ausgewählten DOM-Element wurzelt. Ignoriert jeden aktuellen Root und setzt anschließend den alten Root.",
            da: "Kør en handling forankret på det valgte dom-element. Ignorerer evt. gammel root og sætter gammel den igen bagefter.",
            fr: "Exécute une action enracinée à l'élément DOM sélectionné. Ignore toute racine actuelle définie et rétablit l'ancienne racine par la suite.",
          },
          RUN_METHOD_ACTION: {
            en: "RunMethodAction",
            da: "RunMethodAction",
            de: "RunMethodAction",
            pt: "RunMethodAction",
            fr: "RunMethodAction",
          },
          RUN_METHOD_ACTION_DESCRIPTION: {
            en: "Runs a custom method.",
            de: "Benutzerdefinierte Methode durchführen.",
            da: "Kører en custom metode",
            fr: "Exécute une méthode personnalisée.",
          },
          ADD_METHOD: {
            en: "Add method",
            de: "Methode hinzufügen",
            da: "Tilføj metode",
            fr: "Ajouter une méthode",
          },
          ADD_METHOD_PROMPT: {
            en: "Name of new method:",
            de: "Name der neuen Methode:",
            da: "Navnet på den nye metode:",
            fr: "Nom de la nouvelle méthode :",
          },
          IGNORE_OLD_ROOT: {
            en: "Ignore old root",
            de: "Alten Root ignorieren",
            da: "Ignorer gammel root",
            fr: "Ignorer l'ancien root",
          },
          IGNORE_OLD_ROOT_HELP: {
            en: "Ignores any root set, and restarts from document",
            de: "Ignoriert jeden gesetzten Root und beginnt wieder beim Document",
            da: "Ignorerer hvis der var sat en gammel root, og starter fra document",
            fr: "Ignore tout root défini et redémarre depuis le document",
          },
          METHOD: { en: "Method", de: "Methode", da: "Metode", fr: "Méthode" },
          METHOD_HELP: {
            en: "The method to run",
            de: "Die durchzuführende Methode",
            da: "Metoden der skal køres",
            fr: "La méthode à exécuter",
          },
          NEGATED_URL_HELP: {
            en: "When enabled, this matcher matches, if none of the URL's match",
            de: "Wenn aktiviert, wird der Abgleich durchgeführt, wenn keine der URLs übereinstimmt",
            da: "Hvis aktiveret, matcher denne matcher, kun hvis ingen af webadresserne matcher",
            fr: "Lorsqu'activé, ce correspondant correspond si aucune des URL ne correspond",
          },
          ONOFF_MATCHER: {
            en: "OnOff Matcher",
            de: "OnOff Matcher",
            da: "OnOff Matcher",
            pt: "OnOff Matcher",
            fr: "Matcher OnOff",
          },
          ONOFF_MATCHER_DESCRIPTION: {
            en: "Uses 2 css queries to check if something is on or off",
            fr: "Utilise 2 requêtes CSS pour vérifier si quelque chose est activé ou désactivé",
          },
          ONOFF_MATCHER_TRUE: { en: "On", fr: "On" },
          ONOFF_MATCHER_FALSE: { en: "Off", fr: "Off" },
          ONOFF_MATCHER_TRUE_HELP: {
            en: "The css query used to check if this is on",
            fr: "La requête CSS utilisée pour vérifier si c'est activé",
          },
          ONOFF_MATCHER_FALSE_HELP: {
            en: "The css query used to check if this is off",
            fr: "La requête CSS utilisée pour vérifier si c'est désactivé",
          },
          CHILD_FILTER_NEGATE: {
            en: "Negate child filter",
            fr: "Nier le filtre enfant",
          },
          CHILD_FILTER_NEGATE_HELP: {
            en: "A negated child filter, filters this selector if a child is found",
            fr: "Un filtre enfant nié filtre ce sélecteur s'il y a un enfant",
          },
        };
        class a {
          static getString(e, t) {
            let n = navigator.language.substring(0, 2);
            null == n && (n = "en");
            let o = "[" + e + "-" + n + "]";
            if (null != r[e]) {
              const t = r[e];
              null != t[n]
                ? (o = t[n])
                : (console.warn(
                    "Missing translation [" + n + "] for key: ",
                    e,
                    t
                  ),
                  a.debugTranslations || (null != t.en && (o = t.en)));
            } else
              a.debugTranslations &&
                console.log(
                  "%c Unknown translation key:",
                  "background: red; color: white;",
                  e
                );
            if (null != t && Array.isArray(t))
              for (let e = 1; e < t.length + 1; e++) {
                let n = t[e];
                o = o.replace("%" + e + "%", n);
              }
            return o;
          }
          static doLanguage(e) {
            null == e && (e = document);
            let t = navigator.language.substring(0, 2);
            null == t && (t = "en"), (document.querySelector("html").lang = t);
            const n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
            let r = /\[\[(\S+)\]\]/g;
            for (; n.nextNode(); ) {
              let e = n.currentNode.nodeValue.matchAll(r);
              for (let t of e) {
                let e = a.getString(t[1], []);
                n.currentNode.nodeValue = n.currentNode.nodeValue.replace(
                  t[0],
                  e
                );
              }
            }
          }
          static doAttributes(e) {
            let t = /\[\[(\S+)\]\]/g;
            e.querySelectorAll("*").forEach((e) => {
              Array.from(e.attributes).forEach((e) => {
                let n = e.value.matchAll(t);
                for (let t of n) {
                  let n = a.getString(t[1], []);
                  e.value = e.value.replace(t[0], n);
                }
              });
            });
          }
        }
      },
      978: (e, t, n) => {
        var r = n(940),
          a = n(552),
          o = n(698),
          i = n(770),
          s = n(213);
        let d = null,
          l = null,
          u = null,
          c = !1,
          p = !1,
          m = [];
        function g() {
          chrome.runtime.sendMessage("GetRuleList", (e) => {
            let t = Object.assign({}, ...e);
            delete t.$schema,
              (d = t),
              f(t, document.querySelector("#knownRules"));
          }),
            chrome.runtime.sendMessage("GetCustomRuleList", (e) => {
              delete e.$schema,
                (l = e),
                f(e, document.querySelector("#customRules"));
            });
        }
        function f(e, t, n = !1) {
          (t.innerHTML = ""),
            Object.keys(e).forEach((e) => {
              let n = document.createElement("option");
              (n.textContent = e), t.appendChild(n);
            });
        }
        function h(e, t) {
          null == e.methods.find((e) => "HIDE_CMP" === e.name) &&
            e.methods.push({ name: "HIDE_CMP", action: null }),
            null == e.methods.find((e) => "UTILITY" === e.name) &&
              e.methods.push({ name: "UTILITY", action: null }),
            null == e.methods.find((e) => "OPEN_OPTIONS" === e.name) &&
              e.methods.push({ name: "OPEN_OPTIONS", action: null }),
            null == e.methods.find((e) => "DO_CONSENT" === e.name) &&
              e.methods.push({ name: "DO_CONSENT", action: null }),
            null == e.methods.find((e) => "SAVE_CONSENT" === e.name) &&
              e.methods.push({ name: "SAVE_CONSENT", action: null }),
            a.S.parseCmp(e)
              .then((e) => {
                v(e, t);
              })
              .catch((e) => {
                console.error(e);
              });
        }
        function v(e, t) {
          (m = []),
            (document.querySelector(".step3 .rules").innerHTML = ""),
            (document.querySelector(".step3 .cmpName input").value = t);
          let n = document.querySelector(".step3 .save");
          (n = (0, r.ID)(n)),
            n.addEventListener("click", async () => {
              S(e);
            }),
            document.addEventListener("keydown", (t) => {
              p && "s" === t.key && (t.preventDefault(), S(e));
            });
          let a = document.querySelector(".step3 .export");
          (a = (0, r.ID)(a)),
            a.addEventListener("click", async () => {
              S(e, !0);
            }),
            document.querySelector(".step3 .rules").append(e),
            (0, r.UP)("step3"),
            E();
        }
        async function S(e, t = !1) {
          let n = await i.Q.parseDom(e),
            a = {
              $schema:
                "https://raw.githubusercontent.com/cavi-au/Consent-O-Matic/master/rules.schema.json",
            };
          a[document.querySelector(".step3 .cmpName input").value] = n;
          let o = JSON.stringify(a, null, 4);
          if (t) {
            (document.querySelector(".step4 pre").innerHTML = ""),
              (document.querySelector(".step4 pre").innerText = o),
              (0, r.UP)("step4");
            const e = window.getSelection(),
              t = document.createRange();
            t.selectNodeContents(document.querySelector(".step4 pre")),
              e.removeAllRanges(),
              e.addRange(t),
              document.execCommand("copy");
          } else chrome.runtime.sendMessage("AddCustomRule|" + o);
        }
        document.addEventListener("keydown", (e) => {
          "Control" === e.key && (p = !0);
        }),
          document.addEventListener("blur", (e) => {
            e.target.closest &&
              null != e.target.closest("ul.list") &&
              e.target.matches("input") &&
              0 === e.target.value.trim().length &&
              e.target.remove();
          }),
          document.addEventListener("keyup", (e) => {
            if (("Control" === e.key && (p = !1), "z" === e.key && p)) {
              e.preventDefault();
              let t = m.pop();
              null != t &&
                (null != t.parent
                  ? t.parent.insertBefore(t.element, t.nextSibling)
                  : t.element.parentNode.removeChild(t.element));
            }
            if ("Enter" === e.key) {
              let t = e.target.closest("ul.list");
              if (null != t) {
                let e = document.createElement("li"),
                  n = document.createElement("input");
                n.setAttribute("size", 30),
                  e.appendChild(n),
                  t.appendChild(e),
                  n.focus();
              }
            }
          }),
          document
            .querySelector(".loadButton")
            .addEventListener("click", () => {
              let e = document.querySelector("#knownRules").value;
              (c = !0), h(d[e], e);
            }),
          document
            .querySelector(".loadCustomButton")
            .addEventListener("click", () => {
              let e = document.querySelector("#customRules").value;
              (c = !0), h(l[e], e);
            }),
          document
            .querySelector(".deleteCustomButton")
            .addEventListener("click", () => {
              let e = document.querySelector("#customRules").value;
              chrome.runtime.sendMessage("DeleteCustomRule|" + e, () => {
                g();
              });
            }),
          document
            .querySelector(".loadTextButton")
            .addEventListener("click", () => {
              try {
                let e = document.querySelector("#inputArea").value,
                  t = JSON.parse(e);
                delete t.$schema,
                  (u = t),
                  f(t, document.querySelector("#cmpSelector")),
                  1 ===
                  document
                    .querySelector("#cmpSelector")
                    .querySelectorAll("option").length
                    ? ((c = !0), document.querySelector("#selectCmp").click())
                    : ((c = !1), (0, r.UP)("step2"));
              } catch (e) {
                console.log("Unable to load from jsonString:", e);
              }
            }),
          g(),
          document.querySelector(".newButton").addEventListener("click", () => {
            (c = !0),
              (0, r.PM)("cmp")
                .then(async (e) => {
                  let t = await (0, r.PM)("method");
                  (t.querySelector("[data-bind='name']").textContent =
                    s.A.getString("HIDE_CMP")),
                    t
                      .querySelector("[data-bind='name']")
                      .setAttribute("data-bind-method-name", "HIDE_CMP");
                  let n = await (0, r.PM)("method");
                  (n.querySelector("[data-bind='name']").textContent =
                    s.A.getString("OPEN_OPTIONS")),
                    n
                      .querySelector("[data-bind='name']")
                      .setAttribute("data-bind-method-name", "OPEN_OPTIONS");
                  let a = await (0, r.PM)("method");
                  (a.querySelector("[data-bind='name']").textContent =
                    s.A.getString("DO_CONSENT")),
                    a
                      .querySelector("[data-bind='name']")
                      .setAttribute("data-bind-method-name", "DO_CONSENT");
                  let o = await (0, r.PM)("method");
                  (o.querySelector("[data-bind='name']").textContent =
                    s.A.getString("SAVE_CONSENT")),
                    o
                      .querySelector("[data-bind='name']")
                      .setAttribute("data-bind-method-name", "SAVE_CONSENT");
                  let i = await (0, r.PM)("method");
                  (i.querySelector("[data-bind='name']").textContent =
                    s.A.getString("UTILITY")),
                    i
                      .querySelector("[data-bind='name']")
                      .setAttribute("data-bind-method-name", "UTILITY"),
                    e.querySelector("[data-plug='method']").appendChild(t),
                    e.querySelector("[data-plug='method']").appendChild(n),
                    e.querySelector("[data-plug='method']").appendChild(a),
                    e.querySelector("[data-plug='method']").appendChild(o),
                    e.querySelector("[data-plug='method']").appendChild(i),
                    v(e, s.A.getString("MY_CMP"));
                })
                .catch((e) => {
                  console.error(e);
                });
          }),
          document.querySelector("#selectCmp").addEventListener("click", () => {
            let e = document.querySelector("#cmpSelector").value;
            h(u[e], e);
          }),
          document
            .querySelector(".step2 .back")
            .addEventListener("click", () => {
              (0, r.UP)("step1"), g();
            }),
          document
            .querySelector(".step3 .back")
            .addEventListener("click", () => {
              confirm(
                "You sure you want to go back? (Unsaved changes will be lost)"
              ) && (c ? ((0, r.UP)("step1"), g()) : (0, r.UP)("step2"));
            }),
          document
            .querySelector(".step4 .back")
            .addEventListener("click", () => {
              (0, r.UP)("step3");
            }),
          document
            .querySelector(".step3 .collapse")
            .addEventListener("click", (e) => {
              Array.from(
                document.querySelectorAll(".step3 .rules [data-fold-name]")
              ).forEach((e) => {
                e.classList.add("toggled");
              });
            }),
          document
            .querySelector(".step3 .uncollapse")
            .addEventListener("click", () => {
              Array.from(
                document.querySelectorAll(".step3 .rules [data-fold-name]")
              ).forEach((e) => {
                e.classList.remove("toggled");
              });
            }),
          (0, r.UP)("step1");
        let b = [];
        function E() {
          b.forEach((e) => {
            e.destroy();
          }),
            (b = []),
            A("action"),
            A("domSelector"),
            A("detector"),
            A("consent"),
            A("matcher");
        }
        function A(e) {
          document
            .querySelectorAll(".step3 .rules [data-type='" + e + "']")
            .forEach((t) => {
              b.push(
                new o.J(t, {
                  dropSelector: "[data-plug='" + e + "'], .trashcan",
                  cloneClass: "draggable-clone",
                  onDrop: (t, n, r) => {
                    C(t, n, r, e);
                  },
                })
              );
            }),
            document
              .querySelectorAll(".step3 .toolbox [data-type='" + e + "']")
              .forEach((t) => {
                b.push(
                  new o.J(t, {
                    dropSelector: "[data-plug='" + e + "']",
                    cloneClass: "draggable-clone",
                    onDrop: async (t, n, a) => {
                      let o = e;
                      t.hasAttribute("data-variant") &&
                        (o = e + "_" + t.getAttribute("data-variant"));
                      let i = await (0, r.PM)(o);
                      for (let e of Array.from(
                        i.querySelectorAll(
                          "[data-plug='domSelector']:empty:not([data-bind='childFilter'])"
                        )
                      )) {
                        let t = await (0, r.PM)("domSelector");
                        e.appendChild(t);
                      }
                      for (let e of Array.from(
                        i.querySelectorAll(
                          "[data-plug='domSelectorChild']:empty"
                        )
                      )) {
                        let t = await (0, r.PM)("domSelectorChild");
                        e.appendChild(t);
                      }
                      for (let e of Array.from(
                        i.querySelectorAll("[data-plug='consent']:empty")
                      )) {
                        let t = await (0, r.PM)("consent");
                        e.appendChild(t);
                      }
                      C(i, n, a, e);
                    },
                  })
                );
              });
        }
        async function C(e, t, n, r) {
          function a(e) {
            e.stopImmediatePropagation();
          }
          document.addEventListener("click", a, { capture: !0, once: !0 }),
            setTimeout(() => {
              try {
                document.removeEventListener("click", a, {
                  capture: !0,
                  once: !0,
                });
              } catch (e) {
                console.warn(e);
              }
            }, 0);
          let o = n;
          if (o !== t)
            for (; null != o && !o.matches("[data-type='" + r + "']"); )
              o = o.parentNode;
          if (
            (o === t && (o = null),
            null == o || o.matches("[data-type='" + r + "']") || (o = null),
            t.matches(".trashcan"))
          )
            m.push({
              parent: e.parentNode,
              nextSibling: e.nextSibling,
              element: e,
            }),
              e.parentNode,
              e.parentNode.removeChild(e);
          else if (t.matches(":empty, [data-multiple='true']")) {
            if (p) {
              let t = e.cloneNode(!0),
                n = Array.from(t.querySelectorAll("select")),
                r = Array.from(e.querySelectorAll("select"));
              if (n.length !== r.length)
                console.log("Something weird is happening!");
              else for (let e = 0; e < n.length; e++) n[e].value = r[e].value;
              e = t;
            }
            if (
              (m.push({
                parent: e.parentNode,
                nextSibling: e.nextSibling,
                element: e,
              }),
              t.matches("[data-multiple='true']") && null != o)
            ) {
              let t = o.parentNode,
                n = -1,
                r = -1,
                a = 0;
              for (let i of Array.from(t.children))
                o == i && (n = a), e == i && (r = a), a++;
              -1 == r
                ? t.insertBefore(e, o)
                : r < n
                ? t.insertBefore(e, o.nextSibling)
                : t.insertBefore(e, o);
            } else t.appendChild(e);
            E();
          }
        }
        function k() {
          document.querySelectorAll("div[data-fold-name]").forEach((e) => {
            let t = "",
              n = e.querySelectorAll("[data-type='consent']");
            if (1 === n.length) {
              let e = n[0].querySelector("[data-bind='type'] select");
              t =
                " - " + e.querySelector("[value='" + e.value + "'").textContent;
            }
            e.setAttribute("data-fold-extra-name", t);
          });
        }
        document.addEventListener("click", function (e) {
          e.target.matches("[data-fold-name]") &&
            e.target.classList.toggle("toggled");
        }),
          new MutationObserver((e) => {
            k();
          }).observe(document.body, { childList: !0, subtree: !0 }),
          document.addEventListener("input", () => {
            k();
          }),
          document
            .querySelector("button.addmethod")
            .addEventListener("click", async () => {
              let e = s.A.getString("ADD_METHOD_PROMPT"),
                t = window.prompt(e);
              if (null != t) {
                t = t.toUpperCase();
                let e = await a.S.loadTemplate("method", {
                  name: t,
                  custom: !0,
                });
                document
                  .querySelector("[data-type='cmp'] > [data-plug='method']")
                  .appendChild(e);
              }
            }),
          window.addEventListener("DOMContentLoaded", () => {
            s.A.doLanguage();
          });
      },
      770: (e, t, n) => {
        n.d(t, { Q: () => r });
        class r {
          static async parseDom(e) {
            if (null != e) {
              let t = {},
                n = e.getAttribute("data-variant"),
                a = e.querySelectorAll(":scope > [data-plug]"),
                o = e.querySelectorAll(":scope > [data-bind]:not([data-plug])");
              null != n && (t.type = n);
              for (let e of a) await r.parsePlug(e, t);
              for (let e of o) await r.parseValue(e, t);
              return t;
            }
            return null;
          }
          static async parsePlug(e, t) {
            let n,
              a = e.getAttribute("data-plug"),
              o = e.getAttribute("data-bind");
            if (e.getAttribute("data-multiple")) {
              n = [];
              for (let t of Array.from(
                e.querySelectorAll(":scope > [data-type='" + a + "']")
              ))
                n.push(await r.parseDom(t));
            } else {
              let t = e.querySelector(":scope > [data-type='" + a + "']");
              n = await r.parseDom(t);
            }
            var i;
            null != (i = n) &&
              (i instanceof Array
                ? 0 !== i.length
                : 0 !== Object.keys(i).length) &&
              (null != o ? (t[o] = n) : Object.assign(t, n));
          }
          static async parseValue(e, t) {
            if (null != e) {
              let n,
                r = e.getAttribute("data-bind");
              if (null != e.querySelector("ul.list"))
                console.log("LIST!"),
                  (n = ""),
                  e.querySelectorAll("ul.list input").forEach((e) => {
                    let t = e.value.trim();
                    t.length > 0 && (n = n + "|" + t);
                  });
              else if (null != e.querySelector("input")) {
                let t = e.querySelector("input");
                "checkbox" === t.getAttribute("type")
                  ? (n = t.checked)
                  : ((n = t.value.trim()),
                    "number" === t.getAttribute("type") && (n = +n));
              } else
                null != e.querySelector("select")
                  ? (n = e.querySelector("select").value)
                  : (console.log(e),
                    (n = e.getAttribute("data-bind-method-name")
                      ? e.getAttribute("data-bind-method-name")
                      : e.textContent));
              null != n &&
                "" !== n &&
                !1 !== n &&
                ("string" == typeof n &&
                  -1 !== n.indexOf("|") &&
                  (n = n
                    .split("|")
                    .map((e) => e.trim())
                    .filter((e) => e.length > 0)),
                (t[r] = n));
            }
          }
        }
      },
      698: (e, t, n) => {
        n.d(t, { J: () => r });
        class r {
          constructor(e, t) {
            this.html = e;
            let n = {
              activeClass: "droppable-active",
              hoverClass: "droppable-hover",
              cloneClass: null,
              preventDefaultEvents: ["move"],
              cloneParent: document.body,
              centerClone: !0,
              dragMinDistance: 0,
            };
            this.options = Object.assign({}, n, t);
            let r = this;
            (this.mouseDownListener = (e) => {
              0 === e.button &&
                e.target.matches(":not(input)") &&
                e.target.matches(":not(select)") &&
                ((r.startX = e.pageX),
                (r.startY = e.pageY),
                (r.mouseDown = !0),
                e.stopPropagation(),
                e.preventDefault());
            }),
              this.html.addEventListener("mousedown", this.mouseDownListener),
              (this.mouseMoveListener = (e) => {
                r.mouseDown &&
                  (r.dragging
                    ? r.drag(e)
                    : Math.sqrt(
                        Math.pow(r.startX - e.pageX, 2) +
                          Math.pow(r.startY - e.pageY, 2)
                      ) > r.minDragDistance &&
                      ((r.dragging = !0), r.dragStart(e), r.drag(e)));
              }),
              document.addEventListener("mousemove", this.mouseMoveListener),
              (this.mouseUpListener = (e) => {
                0 === e.button && (r.mouseDown = !1),
                  r.dragging && 0 === e.button && r.dragStop(e);
              }),
              document.addEventListener("mouseup", this.mouseUpListener),
              (this.clone = null),
              (this.droppables = null),
              (this.currentDroppable = null),
              (this.currentHoverElement = null),
              (this.dragging = !1),
              (this.mouseDown = !1),
              (this.minDragDistance = 10),
              (this.startX = -1),
              (this.startY = -1),
              (this.lastScrollX = window.scrollX),
              (this.lastScrollY = window.scrollY),
              (this.scrollListener = (e) => {
                let t = window.scrollX - r.lastScrollX,
                  n = window.scrollY - r.lastScrollY;
                null != r.clone && r.updateClonePos(r.lastX + t, r.lastY + n),
                  (r.lastScrollX = window.scrollX),
                  (r.lastScrollY = window.scrollY);
              }),
              window.addEventListener("scroll", this.scrollListener);
          }
          destroy() {
            document.removeEventListener("mousemove", this.mouseMoveListener),
              document.removeEventListener("mouseup", this.mouseUpListener),
              window.removeEventListener("scroll", this.scrollListener),
              this.html.removeEventListener(
                "mousedown",
                this.mouseDownListener
              );
          }
          dragStart(e) {
            let t = this;
            (this.dragging = !0),
              "function" == typeof this.options.onStart &&
                this.options.onStart(),
              (this.html.style.pointerEvents = "none"),
              (this.droppables = Array.from(
                document.querySelectorAll(this.options.dropSelector)
              ).filter(
                (e) =>
                  e !== t.html &&
                  !(function (e, t) {
                    for (var n = t.parentNode; null != n; ) {
                      if (n == e) return !0;
                      n = n.parentNode;
                    }
                    return !1;
                  })(t.html, e)
              )),
              null != this.options.clone
                ? (this.clone = this.options.clone)
                : (this.clone = this.html.cloneNode(!0)),
              null != this.options.cloneClass &&
                this.clone.classList.add(this.options.cloneClass),
              (this.clone.style.position = "absolute"),
              (this.clone.style.pointerEvents = "none"),
              (this.clone.style.zIndex = 2e3),
              null != this.options.opacity &&
                (this.clone.style.opacity = this.options.opacity),
              this.options.cloneParent.appendChild(this.clone);
            let n = this.clone.getBoundingClientRect();
            (this.offset = { x: 0, y: 0 }),
              this.options.centerClone &&
                ((this.offset.x -= -n.width / 2),
                (this.offset.y -= -n.height / 2)),
              this.droppables.forEach((e) => {
                e.classList.add(this.options.activeClass);
              });
          }
          updateClonePos(e, t) {
            (this.lastX = e),
              (this.lastY = t),
              (this.clone.style.transform =
                "translate3d(" + e + "px, " + t + "px, 0px)");
          }
          drag(e) {
            if (!this.dragging) return;
            let t = e.pageX - this.offset.x,
              n = e.pageY - this.offset.y;
            this.updateClonePos(t, n);
            let r = document.elementFromPoint(e.clientX, e.clientY);
            if (((this.currentHoverElement = r), null != r)) {
              let e = r;
              e.matches("." + this.options.activeClass) ||
                (e = e.closest("." + this.options.activeClass)),
                null != e
                  ? (null !== this.currentDroppable &&
                      this.currentDroppable === e) ||
                    (null !== this.currentDroppable &&
                      this.currentDroppable.classList.remove(
                        this.options.hoverClass
                      ),
                    e.classList.add(this.options.hoverClass),
                    (this.currentDroppable = e))
                  : null !== this.currentDroppable &&
                    (this.currentDroppable.classList.remove(
                      this.options.hoverClass
                    ),
                    (this.currentDroppable = null));
            }
          }
          dragStop(e) {
            let t = this,
              n = this.currentDroppable;
            this.droppables.forEach((e) => {
              e.classList.remove(this.options.activeClass),
                e.classList.remove(this.options.hoverClass);
            }),
              (this.html.style.pointerEvents = ""),
              null !== n &&
                "function" == typeof this.options.onDrop &&
                this.options.onDrop(this.html, n, this.currentHoverElement),
              this.clone.parentNode.removeChild(this.clone),
              (this.clone = null),
              (this.droppables = null),
              (this.currentDroppable = null),
              (this.currentHoverElement = null),
              setTimeout(() => {
                t.dragging = !1;
              }, 0),
              "function" == typeof this.options.onStop && this.options.onStop();
          }
        }
      },
      552: (e, t, n) => {
        n.d(t, { S: () => o });
        var r = n(213),
          a = n(940);
        class o {
          static async parseCmp(e) {
            return await o.loadTemplate("cmp", e);
          }
          static async loadTemplate(e, t) {
            let n = await (0, a.PM)(e),
              r = Array.from(n.querySelectorAll("[data-plug]")),
              i = Array.from(
                n.querySelectorAll("[data-bind]:not([data-plug])")
              );
            for (let e of r) {
              let n = e.getAttribute("data-plug"),
                r = e.getAttribute("data-bind");
              await o.loadPlug(e, n, r, t);
            }
            for (let e of i) {
              let n = e.getAttribute("data-bind");
              await o.loadBind(e, n, t);
            }
            return n;
          }
          static async loadBind(e, t, n) {
            let a = n[t];
            if (null != a)
              if (e.querySelector("ul")) {
                function o(t) {
                  let n = document.createElement("li"),
                    r = document.createElement("input");
                  r.setAttribute("size", 30),
                    (r.value = t.trim()),
                    e.querySelector("ul").append(n),
                    n.appendChild(r);
                }
                (e.querySelector("ul").innerHTML = ""),
                  Array.isArray(a)
                    ? a.forEach((e) => {
                        o(e);
                      })
                    : o(a);
              } else if (e.querySelector("input")) {
                let i = e.querySelector("input");
                "checkbox" === i.getAttribute("type")
                  ? (i.checked = a)
                  : Array.isArray(a)
                  ? (i.value = a.join("|"))
                  : (i.value = a);
              } else
                e.querySelector("select")
                  ? (e.querySelector("select").value = a)
                  : e.parentNode.matches("[data-type='method']")
                  ? (e.setAttribute("data-bind-method-name", a),
                    !0 !== n.custom
                      ? (e.textContent = r.A.getString(a))
                      : (e.classList.add("customMethod"), (e.textContent = a)))
                  : (e.textContent = a);
          }
          static async loadPlug(e, t, n, r) {
            let a = r;
            if ((null != n && (a = r[n]), null != a)) {
              a instanceof Array || (a = [a]);
              for (let n of a) {
                let r = t;
                null != n.type &&
                  "domSelector" !== r &&
                  "consent" !== r &&
                  (r += "_" + n.type);
                let a = await o.loadTemplate(r, n);
                e.appendChild(a);
              }
            } else if ("domSelectorChild" === t) {
              let t = await o.loadTemplate("domSelectorChild", {});
              e.appendChild(t);
            }
          }
        }
      },
      940: (e, t, n) => {
        n.d(t, { ID: () => a, PM: () => o, UP: () => i });
        var r = n(213);
        function a(e) {
          let t = e.cloneNode(!0);
          return e.parentNode.replaceChild(t, e), t;
        }
        async function o(e) {
          let t = await fetch("./templates.html"),
            n = await t.text(),
            a = new DOMParser().parseFromString(n, "text/html"),
            o = document.importNode(a.querySelector("#" + e).content, !0),
            i = document.createDocumentFragment(),
            s = 0;
          return (
            Array.from(o.children).forEach((e) => {
              i.appendChild(e), s++;
            }),
            s > 1 && console.error("More than 1 child!"),
            r.A.doAttributes(i),
            r.A.doLanguage(i),
            i.children[0]
          );
        }
        function i(e) {
          document.querySelector("body").setAttribute("data-view", e);
        }
      },
      905: (e, t, n) => {
        e.exports = n.p + "editor.html";
      },
      857: (e, t, n) => {
        e.exports = n.p + "templates.html";
      },
      309: (e, t, n) => {
        e.exports = n.p + "main.css";
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.d = (e, t) => {
    for (var r in t)
      n.o(t, r) &&
        !n.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.p = ""),
    n(940),
    n(552),
    n(698),
    n(770),
    n(978),
    n(309),
    n(857),
    n(905);
})();
