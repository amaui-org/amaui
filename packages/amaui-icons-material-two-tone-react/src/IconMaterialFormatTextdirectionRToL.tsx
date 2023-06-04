import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextdirectionRToL = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextdirectionRToL'

      short_name='FormatTextdirectionRToL'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 6c0 1.1.9 2 2 2V4c-1.1 0-2 .9-2 2z" opacity=".3"/><path d="M6 6c0 2.21 1.79 4 4 4v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6zm4 2c-1.1 0-2-.9-2-2s.9-2 2-2v4zM4 18l4 4v-3h12v-2H8v-3z"/>
    </Icon>
  );
});

IconMaterialFormatTextdirectionRToL.displayName = 'AmauiIconMaterialFormatTextdirectionRToL';

export default IconMaterialFormatTextdirectionRToL;
