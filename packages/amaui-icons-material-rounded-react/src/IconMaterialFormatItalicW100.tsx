import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatItalicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalicW100'

      short_name='FormatItalic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.175l4.9-12.3H10.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H18q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-3.175l-4.9 12.3H13.1q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatItalicW100.displayName = 'AmauiIconMaterialFormatItalicW100';

export default IconMaterialFormatItalicW100;
