import { resolveByLocale } from './locale';
import type { AILanguageCode } from './prompts';

export interface PromptExamples {
  readonly steps: readonly string[];
  readonly screenSteps: readonly string[];
  readonly titles: readonly string[];
  readonly descriptions: readonly string[];
}

const EXAMPLES: Record<AILanguageCode, PromptExamples> = {
  en: {
    steps: [
      'Click the Submit button',
      'Enter email address in the Email field',
      'Select "Admin" from the Role dropdown',
      'Navigate to the Settings page',
    ],
    screenSteps: [
      '"Click "Downloads" in File Explorer"',
      '"Select "Dark" from the Theme list"',
      '"Enter "Quarterly report" as the file name"',
      '"Press Ctrl+S to save the document"',
    ],
    titles: [
      'Review web-app Pull Requests',
      'Configure Slack Notification Preferences',
      'Submit Expense Report in Workday',
      'Create Repository in GitHub Organization',
    ],
    descriptions: [
      "Reset a locked-out user's password from the Okta admin panel. For IT support staff.",
      'Configure which Slack channels send desktop notifications, and set a do-not-disturb schedule.',
    ],
  },
  es: {
    steps: [
      'Hacer clic en el botón Submit',
      'Introducir la dirección de correo en el campo Email',
      'Seleccionar "Admin" en el desplegable Role',
      'Ir a la página Settings',
    ],
    screenSteps: [
      'Hacer clic en "Downloads" en el panel de navegación',
      'Seleccionar "Dark" en la lista Theme',
      'Escribir "Quarterly report" como nombre de archivo',
      'Pulsar Ctrl+S para guardar el documento',
    ],
    titles: [
      'Revisar los Pull Requests de web-app',
      'Configurar las notificaciones de Slack',
      'Enviar un informe de gastos en Workday',
      'Crear un repositorio en una organización de GitHub',
    ],
    descriptions: [
      'Restablecer la contraseña de un usuario bloqueado desde el panel de administración de Okta. Para el personal de soporte de TI.',
      'Configurar qué canales de Slack envían notificaciones de escritorio y establecer un horario de no molestar.',
    ],
  },
  fr: {
    steps: [
      'Cliquer sur le bouton Submit',
      "Saisir l'adresse e-mail dans le champ Email",
      'Sélectionner "Admin" dans la liste déroulante Role',
      'Aller à la page Settings',
    ],
    screenSteps: [
      'Cliquer sur "Downloads" dans le volet de navigation',
      'Sélectionner "Dark" dans la liste Theme',
      'Saisir "Quarterly report" comme nom de fichier',
      'Appuyer sur Ctrl+S pour enregistrer le document',
    ],
    titles: [
      'Examiner les Pull Requests de web-app',
      'Configurer les notifications Slack',
      'Soumettre une note de frais dans Workday',
      'Créer un dépôt dans une organisation GitHub',
    ],
    descriptions: [
      "Réinitialiser le mot de passe d'un utilisateur bloqué depuis le panneau d'administration Okta. Pour le support informatique.",
      'Configurer les canaux Slack qui envoient des notifications sur le bureau et définir une plage Ne pas déranger.',
    ],
  },
  de: {
    steps: [
      'Auf die Schaltfläche Submit klicken',
      'E-Mail-Adresse in das Feld Email eingeben',
      'In der Dropdown-Liste Role "Admin" auswählen',
      'Zur Seite Settings navigieren',
    ],
    screenSteps: [
      'Im Navigationsbereich auf "Downloads" klicken',
      'In der Liste Theme "Dark" auswählen',
      '"Quarterly report" als Dateinamen eingeben',
      'Strg+S drücken, um das Dokument zu speichern',
    ],
    titles: [
      'Pull Requests von web-app prüfen',
      'Slack-Benachrichtigungen konfigurieren',
      'Spesenabrechnung in Workday einreichen',
      'Repository in GitHub-Organisation erstellen',
    ],
    descriptions: [
      'Das Passwort eines gesperrten Benutzers im Okta-Adminbereich zurücksetzen. Für den IT-Support.',
      'Festlegen, welche Slack-Kanäle Desktop-Benachrichtigungen senden, und einen Bitte-nicht-stören-Zeitplan einrichten.',
    ],
  },
  'pt-BR': {
    steps: [
      'Clicar no botão Submit',
      'Digitar o endereço de e-mail no campo Email',
      'Selecionar "Admin" na lista Role',
      'Ir para a página Settings',
    ],
    screenSteps: [
      'Clicar em "Downloads" no painel de navegação',
      'Selecionar "Dark" na lista Theme',
      'Digitar "Quarterly report" como nome do arquivo',
      'Pressionar Ctrl+S para salvar o documento',
    ],
    titles: [
      'Revisar os Pull Requests do web-app',
      'Configurar as notificações do Slack',
      'Enviar relatório de despesas no Workday',
      'Criar repositório em organização do GitHub',
    ],
    descriptions: [
      'Redefinir a senha de um usuário bloqueado no painel de administração do Okta. Para a equipe de suporte de TI.',
      'Configurar quais canais do Slack enviam notificações na área de trabalho e definir um horário de não perturbar.',
    ],
  },
  'zh-CN': {
    steps: [
      '点击 Submit 按钮',
      '在 Email 字段中输入邮箱地址',
      '在 Role 下拉菜单中选择 "Admin" 选项',
      '进入 Settings 页面',
    ],
    screenSteps: [
      '在导航窗格中点击 "Downloads"',
      '在 Theme 列表中选择 "Dark"',
      '输入 "Quarterly report" 作为文件名',
      '按 Ctrl+S 保存文档',
    ],
    titles: [
      '审查 web-app 的 Pull Request',
      '配置 Slack 通知偏好',
      '在 Workday 中提交报销单',
      '在 GitHub 组织中创建仓库',
    ],
    descriptions: [
      '在 Okta 管理面板中重置被锁定用户的密码。面向 IT 支持人员。',
      '配置哪些 Slack 频道发送桌面通知，并设置免打扰时间。',
    ],
  },
  ru: {
    steps: [
      'Нажать кнопку Submit',
      'Ввести адрес электронной почты в поле Email',
      'Выбрать "Admin" в раскрывающемся списке Role',
      'Перейти на страницу Settings',
    ],
    screenSteps: [
      'Нажать "Downloads" в области навигации',
      'Выбрать "Dark" в списке Theme',
      'Ввести "Quarterly report" в качестве имени файла',
      'Нажать Ctrl+S, чтобы сохранить документ',
    ],
    titles: [
      'Проверка Pull Request в web-app',
      'Настройка уведомлений Slack',
      'Отправка отчёта о расходах в Workday',
      'Создание репозитория в организации GitHub',
    ],
    descriptions: [
      'Сброс пароля заблокированного пользователя в панели администратора Okta. Для сотрудников ИТ-поддержки.',
      'Выбор каналов Slack, которые отправляют уведомления на рабочий стол, и настройка расписания режима «Не беспокоить».',
    ],
  },
  tr: {
    steps: [
      'Submit düğmesine tıklayın',
      'Email alanına e-posta adresini yazın',
      'Role açılır listesinden "Admin" seçeneğini seçin',
      'Settings sayfasına gidin',
    ],
    screenSteps: [
      'Gezinti bölmesinde "Downloads" öğesine tıklayın',
      'Theme listesinden "Dark" seçeneğini seçin',
      'Dosya adı olarak "Quarterly report" girin',
      'Belgeyi kaydetmek için Ctrl+S tuşlarına basın',
    ],
    titles: [
      "web-app'teki Pull Request'leri inceleme",
      'Slack bildirimlerini yapılandırma',
      "Workday'de masraf raporu gönderme",
      'GitHub organizasyonunda depo oluşturma',
    ],
    descriptions: [
      'Okta yönetim panelinde kilitlenmiş bir kullanıcının parolasını sıfırlama. BT destek ekibi için.',
      'Masaüstü bildirimi gönderecek Slack kanallarını seçme ve bir Rahatsız Etmeyin zamanlaması ayarlama.',
    ],
  },
};

export function resolveExamples(locale: string): PromptExamples {
  return resolveByLocale(EXAMPLES, locale) ?? EXAMPLES.en;
}

export function formatExamples(lines: readonly string[]): string {
  return lines.map((line) => `- ${line}`).join('\n');
}
