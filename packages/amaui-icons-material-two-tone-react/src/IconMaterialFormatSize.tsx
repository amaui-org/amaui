import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatSize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatSize'

      short_name='FormatSize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z"/>
    </Icon>
  );
});

IconMaterialFormatSize.displayName = 'AmauiIconMaterialFormatSize';

export default IconMaterialFormatSize;
