import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatItalicSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalicSharpW700'
      short_name='FormatItalic'

      {...props}
    >
      <path d="M4.625 20.775V16.625H8L11.525 7.375H8.15V3.225H19.375V7.375H16L12.475 16.625H15.85V20.775Z"/>
    </Icon>
  )
});

export default IconMaterialFormatItalicSharpW700;
