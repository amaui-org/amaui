import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatItalicTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalicTwoTone'
      short_name='FormatItalic'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 15v3h8v-3h-2.21l3.42-8H18V4h-8v3h2.21l-3.42 8z"/>
    </Icon>
  )
});

export default IconMaterialFormatItalicTwoTone;
