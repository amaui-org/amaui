import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignRight'

      short_name='FormatAlignRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3zm6 4h12v2H9zm0-8h12v2H9z"/>
    </Icon>
  );
});

IconMaterialFormatAlignRight.displayName = 'AmauiIconMaterialFormatAlignRight';

export default IconMaterialFormatAlignRight;
