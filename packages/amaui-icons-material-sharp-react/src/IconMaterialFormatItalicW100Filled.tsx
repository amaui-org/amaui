import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatItalicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalicW100Filled'

      short_name='FormatItalic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 18.85v-.7h3.525l4.9-12.3H10.55v-.7h7.8v.7h-3.525l-4.9 12.3h3.525v.7Z"/>
    </Icon>
  );
});

IconMaterialFormatItalicW100Filled.displayName = 'AmauiIconMaterialFormatItalicW100Filled';

export default IconMaterialFormatItalicW100Filled;
