import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignJustify = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignJustify'

      short_name='FormatAlignJustify'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h18v2H3zm0 8h18v2H3zm0 8h18v2H3zm0-4h18v2H3zm0-8h18v2H3z"/>
    </Icon>
  );
});

IconMaterialFormatAlignJustify.displayName = 'AmauiIconMaterialFormatAlignJustify';

export default IconMaterialFormatAlignJustify;
