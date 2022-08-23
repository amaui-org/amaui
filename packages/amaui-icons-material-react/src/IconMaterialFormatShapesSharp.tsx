import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatShapesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatShapesSharp'
      short_name='FormatShapes'

      {...props}
    >
      <path d="M1 23V17H3V7H1V1H7V3H17V1H23V7H21V17H23V23H17V21H7V23ZM7 19H17V17H19V7H17V5H7V7H5V17H7ZM7.8 16 11.2 7H12.8L16.2 16H14.65L13.85 13.7H10.2L9.4 16ZM10.65 12.4H13.35L12.05 8.65H11.95ZM3 5H5V3H3ZM19 5H21V3H19ZM19 21H21V19H19ZM3 21H5V19H3ZM19 5ZM19 19ZM5 19ZM5 5Z"/>
    </Icon>
  );
});

IconMaterialFormatShapesSharp.displayName = 'AmauiIconMaterialFormatShapesSharp';

export default IconMaterialFormatShapesSharp;
