import { createGlobalStyle, createStyles } from 'antd-style';

const formClassNames = {
    shaForm: "sha-form",
    shaComponentsContainer: "sha-components-container",
    shaComponentsContainerInner: "sha-components-container-inner",
    shaFormInfoCard: "sha-form-info-card",
    shaFormInfoCardTitle: "sha-form-info-card-title",
};

export const ShaFormStyles = createGlobalStyle`
    .${formClassNames.shaForm} {
        .${formClassNames.shaComponentsContainer} {
            min-height: 32px;
            &.horizontal {
                .${formClassNames.shaComponentsContainerInner} {
                    display: flex;
                    flex-wrap: wrap;

                    &.ant-form-item {
                        margin-bottom: unset;
                    }
                }
            }
        }
    }
    .${formClassNames.shaFormInfoCard} {
        >.${(p) => p.theme.prefixCls}-card-body {
          padding: unset !important;  
        }
        .${formClassNames.shaFormInfoCardTitle} {
          margin-left: 10px;
        }
    }
`;

export const useStyles = createStyles(({ css, cx, prefixCls }) => {
    const shaForm = cx("sha-form", css`
        .${formClassNames.shaComponentsContainer} {
            min-height: 28px;
            &.horizontal {
                .${formClassNames.shaComponentsContainerInner} {
                    display: flex;
                    flex-wrap: wrap;

                    &.ant-form-item {
                        margin-bottom: unset;
                    }
                }
            }
        }
    `);

    const shaFormInfoCard = cx("sha-form-info-card", css`
        >.${prefixCls}-card-body {
            padding: unset !important;
            z-index: 2,
            position: absolute,
            transition: .3s,
        }
        .${formClassNames.shaFormInfoCardTitle} {
            color: #fff;
            font-size: 12px;
            font-weight: 400;
            flex: 1;
            transform: skew(45deg);
            max-width: 230px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0px;
            padding: 0px;
            text-shadow: 0px 0px 2px #000;
        }
        background: rgba(16, 35, 158, .8);
        border: none;
        position: absolute;
        left: -22px;
        transition: .2s;
        display: flex;
        padding: 4px;
        padding-left: 30px;
        padding-right: 20px;
        flex-direction: row;
        justify-content: space-between;
        z-index: 3;
        position: relative;
        height: 31px;
        transform: skew(-45deg);
        border-bottom-right-radius: 15px;
        width: auto;
    `);

    const shaIconBackground = cx("sha-icon-background", css`
        width: 22px;
        height: 22px;
        borderRadius: 5px;
        position: absolute;
        width: 100%;
        text-align: center;
        top: 0px;
        left: 0px;
    `);

    const shaEditModeContainer = cx("sha-edit-mode-container", css`
        transition: .1s;
        borderRadius: 5px;
        overflow: hidden;
    `);

    return {
        shaForm,
        shaComponentsContainer: formClassNames.shaComponentsContainer,
        shaComponentsContainerInner: formClassNames.shaComponentsContainerInner,
        shaFormInfoCard,
        shaFormInfoCardTitle: formClassNames.shaFormInfoCardTitle,
        shaEditModeContainer,
        shaIconBackground
    };
});
