import { createStyles } from '@/styles';

export const useStyles = createStyles(({ css, cx }) => {
    const split = cx(css`
        .gutter {
            background-color: #eee;
        
            background-repeat: no-repeat;
            background-position: 50%;
        }
        
        .gutter.gutter-vertical {
            cursor: row-resize;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
        }
        
        .gutter.gutter-horizontal {
            cursor: col-resize;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
        }
  `);
    return {
        split,
    };
});