import { createStyles } from '@/styles';

export const useStyles = createStyles(({ css, cx, prefixCls }, { styles, colors }) => {
  const shaWizardContainer = "sha-wizard-container";
  const shaStepsContent = "sha-steps-content";
  const shaStepsButtonsContainer = "sha-steps-buttons-container";
  const shaStepsButtons = "sha-steps-buttons";

  const { primaryTextColor, secondaryTextColor, primaryBgColor, secondaryBgColor } = colors;

  const shaWizard = cx("sha-wizard", css`
    
    .ant-steps-item {
      --ant-color-primary: ${primaryBgColor};
      --ant-color-text-description: ${styles.color}45;
      --ant-color-text: ${styles.color};
      --ant-font-size: calc(${styles.fontSize}/1.3);
      --ant-font-size-lg: ${styles.fontSize || 16};
      --ant-steps-nav-arrow-color: ${styles.color}45;
      --ant-steps-finish-icon-bg-color: ${primaryBgColor}45;
      --ant-color-text-light-solid: ${primaryTextColor} !important;

      * {
          font-weight: ${styles.fontWeight || 400};
          font-family: ${styles.fontFamily};
      }
    }

    .sha-steps-buttons-container {
      .ant-btn-default {
        --ant-button-default-color: ${secondaryTextColor} !important;
        --ant-button-default-active-bg: ${secondaryBgColor} !important;
        --ant-button-default-bg: ${secondaryBgColor} !important;
        --ant-button-default-hover-border-color: ${primaryBgColor} !important;
        --ant-button-default-hover-color: ${primaryBgColor}45 !important;
        --ant-button-default-color: ${secondaryTextColor} !important;
        font-family: ${styles.fontFamily};
    }

    .ant-btn-primary {
        --ant-color-primary: ${primaryBgColor};
        --ant-button-primary-active-bg: ${primaryBgColor} !important;
        --ant-color-primary-hover: ${primaryBgColor}45 !important;
        --ant-button-primary-hover-color: ${primaryTextColor}45 !important;
        --ant-color-text-light-solid: ${primaryTextColor} !important;
        --ant-button-primary-hover-border-color: ${secondaryBgColor} !important;
        --ant-button-primary-color: ${primaryTextColor} !important;
        font-family: ${styles.fontFamily};
      }
  }
    
    ${styles}
      
    .${shaWizardContainer} {
      margin: unset;
          
      .${shaStepsContent} {
        margin: 20px 0;
      }
  
      &.vertical {
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
  
        .${prefixCls}-steps-vertical {
          width: 150px;
        }
  
        .${shaStepsContent} {
          flex: 1;
          margin: unset;
        }
      }
    }
      
    .${shaStepsButtonsContainer} {
      display: flex;
  
      &.split {
        justify-content: space-between;
      }
  
      &.left {
        justify-content: flex-start;
      }
  
      &.right {
        justify-content: flex-end;
      }
    }
  `);
  return {
    shaWizard,
    shaWizardContainer,
    shaStepsContent,
    shaStepsButtonsContainer,
    shaStepsButtons,
  };
});