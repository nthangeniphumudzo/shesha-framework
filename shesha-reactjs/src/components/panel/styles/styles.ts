import { createStyles } from '@/styles';

export const useStyles = createStyles(({ css, cx, token, prefixCls }, { headerStyles, panelHeadType, bodyStyle, ghost, hideCollapseContent }) => {
  const noContentPadding = "no-content-padding";
  const hideWhenEmpty = "hide-empty";

  const {
    borderWidth,
    borderStyle,
    borderColor,
    borderTopWidth,
    borderTopStyle,
    borderTopColor,
    borderBottomWidth,
    borderBottomStyle,
    borderBottomColor,
    borderRightWidth,
    borderRightStyle,
    borderRightColor,
    borderLeftWidth,
    borderLeftStyle,
    borderLeftColor,
    backgroundColor,
    backgroundImage,
    boxShadow,
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    borderRadius,
    rest
  } = bodyStyle;

  const {
    backgroundImage: headerBgImage,
    backgroundColor: headerBgColor,
    height: headerHeight,
    minHeight: headerMinHeight,
    maxHeight: headerMaxHeight,
    color: headerColor = token.colorTextLabel,
    fontFamily,
    textAlign,
    fontSize,
    fontWeight,
    borderWidth: headerBorderWidth,
    borderStyle: headerBorderStyle,
    borderColor: headerBorderColor,
    borderTopWidth: headerBorderTopWidth = panelHeadType === 'parent' ? '3px' : '',
    borderTopStyle: headerBorderTopStyle,
    borderTopColor: headerBorderTopColor = panelHeadType === 'parent' ? token.colorPrimary : '',
    borderBottomWidth: headerBorderBottomWidth,
    borderBottomStyle: headerBorderBottomStyle,
    borderBottomColor: headerBorderBottomColor,
    borderRightWidth: headerBorderRightWidth,
    borderRightStyle: headerBorderRightStyle,
    borderRightColor: headerBorderRightColor,
    borderLeftWidth: headerBorderLeftWidth = panelHeadType === 'child' ? '3px' : '',
    borderLeftStyle: headerBorderLeftStyle,
    borderLeftColor: headerBorderLeftColor = panelHeadType === 'child' ? token.colorPrimary : '',
    rest: headerRest
  } = headerStyles;

  const borderTopLeftRadius = borderRadius?.split(' ')[0] || 0;
  const borderTopRightRadius = borderRadius?.split(' ')[1] || 0;
  const borderBottomLeftRadius = borderRadius?.split(' ')[2] || 0;
  const borderBottomRightRadius = borderRadius?.split(' ')[3] || 0;

  console.log('BodyStyle', bodyStyle);
  console.log('HeaderStyles', headerStyles);

  const shaCollapsiblePanel = cx("ant-collapse-component", css`

      --primary-color: ${token.colorPrimary};
    .ant-collapse {
      border-radius: ${borderTopLeftRadius} ${borderTopRightRadius} ${borderBottomLeftRadius} ${borderBottomRightRadius} !important;
      background: ${backgroundImage || backgroundColor};
      box-shadow: ${boxShadow};
      width: ${width};
      min-width: ${minWidth};
      max-width: ${maxWidth};
      height: ${height};
      min-height: ${minHeight};
      max-height: ${maxHeight};
    }

    .ant-collapse-content-box {
      border-radius : 0 0 ${borderBottomLeftRadius} ${borderBottomRightRadius} !important;
      border-top: ${borderTopWidth || borderWidth} ${borderTopStyle || borderStyle} ${borderTopColor || borderColor};
      border-right: ${borderRightWidth || borderWidth} ${borderRightStyle || borderStyle} ${borderRightColor || borderColor};
      border-left: ${borderLeftWidth || borderWidth} ${borderLeftStyle || borderStyle} ${borderLeftColor || borderColor};
      border-bottom: ${borderBottomWidth || borderWidth} ${borderBottomStyle || borderStyle} ${borderBottomColor || borderColor};
      ${rest}
    }

    .ant-collapse-header {
      visibility: ${hideCollapseContent ? 'hidden' : 'visible'};
        border-radius: ${borderTopLeftRadius} ${borderTopRightRadius} 0 0 !important;
        background: ${headerBgImage || headerBgColor};
        height: ${headerHeight};
        min-height: ${headerMinHeight};
        max-height: ${headerMaxHeight};
        border-top: ${headerBorderTopWidth || headerBorderWidth} ${headerBorderTopStyle || headerBorderStyle} ${headerBorderTopColor || headerBorderColor};
        border-right: ${headerBorderRightWidth || headerBorderWidth} ${headerBorderRightStyle || headerBorderStyle} ${headerBorderRightColor || headerBorderColor};
        border-left: ${headerBorderLeftWidth || headerBorderWidth} ${headerBorderLeftStyle || headerBorderStyle} ${headerBorderLeftColor || headerBorderColor};
        border-bottom: ${headerBorderBottomWidth || headerBorderWidth} ${headerBorderBottomStyle || headerBorderStyle} ${headerBorderBottomColor || headerBorderColor};
        ${headerRest}
      .ant-collapse-header-text {
        color: ${headerColor};
        font-family: ${fontFamily};
        text-align: ${textAlign};
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        align-self: center;
      }

      .ant-collapse-extra {
        align-self: center;
      }

      .ant-collapse-expand-icon {
      align-self: center;
      }

    }

    `);

  return {
    shaCollapsiblePanel,
    noContentPadding,
    hideWhenEmpty,
  };
});