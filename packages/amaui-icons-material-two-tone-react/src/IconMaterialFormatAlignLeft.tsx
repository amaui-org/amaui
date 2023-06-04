import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignLeft'

      short_name='FormatAlignLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 19h18v2H3zM3 7h12v2H3zm0-4h18v2H3zm0 12h12v2H3zm0-4h18v2H3z"/>
    </Icon>
  );
});

IconMaterialFormatAlignLeft.displayName = 'AmauiIconMaterialFormatAlignLeft';

export default IconMaterialFormatAlignLeft;
