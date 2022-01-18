import { createGlobalStyle } from 'styled-components';

import colors from './Colors';

const GlobalStyle = createGlobalStyle`
  :root {
    --portal-global-bg-color: ${(props) => props?.theme && props?.theme?.portal_background_color};
    --portal-secondary-color: ${(props) => props?.theme && props?.theme?.secondary_color};
    --portal-secondary-text-color: ${(props) => props?.theme && props?.theme?.secondary_text_color};
    --portal-text-color: ${(props) => props?.theme && props?.theme?.text_color};
    --portal-icon-color: ${(props) => props?.theme && props?.theme?.icon_color};
    --portal-btn-tab-color: ${(props) => props?.theme && props?.theme?.button_tab_color};
    --portal-btn-tab-default-color: ${(props) => props?.theme && props?.theme?.button_tab_default_color};
    --portal-btn-text-color: ${(props) => props?.theme && props?.theme?.button_text_color};
    --portal-list-bg-color: ${(props) => props?.theme && props?.theme?.list_background_color};
    --portal-pending-meet-color: ${(props) => props?.theme && props?.theme?.pending_meeting_color};
    --portal-approved-meet-color: ${(props) => props?.theme && props?.theme?.approved_meeting_color};
    --portal-awaited-meet-color: ${(props) => props?.theme && props?.theme?.awaited_meeting_color};
    --portal-no-meet-color: ${(props) => props?.theme && props?.theme?.no_meeting_color};
    --portal-block-meet-color: ${(props) => props?.theme && props?.theme?.block_time_color};
  }

  /* Toast Notification */
  .toast-notification-error,
  .toast-notification-info,
  .toast-notification-success,
  .toast-notification-warning {
    display:flex;
    .toast-notification-body {
      padding: 30px;
      font-size: 14px;

      &:before {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
  }
  .toast-notification-error {
    background-color: ${colors.error};
    .toast-notification-body:before {
      content: 'Error message:';
    }
  }
  .toast-notification-info {
    background-color: ${colors.info};
    .toast-notification-body:before {
      content: 'Info message:';
    }
  }
  .toast-notification-success {
    background-color: ${colors.success};
    .toast-notification-body:before {
      content: 'Success message:';
    }
  }
  .toast-notification-warning {
    background-color: ${colors.warning};
    .toast-notification-body:before {
      content: 'Warning message:';
    }
  }
`;

export default GlobalStyle;
