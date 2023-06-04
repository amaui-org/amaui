import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatStrikethrough = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatStrikethrough'

      short_name='FormatStrikethrough'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 12h18v2H3zm11-2V7h5V4H5v3h5v3zm-4 6h4v3h-4z"/>
    </Icon>
  );
});

IconMaterialFormatStrikethrough.displayName = 'AmauiIconMaterialFormatStrikethrough';

export default IconMaterialFormatStrikethrough;
