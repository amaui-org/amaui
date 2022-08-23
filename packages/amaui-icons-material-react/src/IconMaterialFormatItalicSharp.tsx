import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatItalicSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalicSharp'
      short_name='FormatItalic'

      {...props}
    >
      <path d="M5 20V17H8.375L12.375 7H9V4H19V7H15.625L11.625 17H15V20Z"/>
    </Icon>
  );
});

IconMaterialFormatItalicSharp.displayName = 'AmauiIconMaterialFormatItalicSharp';

export default IconMaterialFormatItalicSharp;
