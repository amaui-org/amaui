import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdCardAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardAlert'

      short_name='SdCardAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 8.83V20h12V4h-7.17L6 8.83zM11 8h2v5h-2V8zm0 7h2v2h-2v-2z" opacity=".3"/><path d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V8.83L10.83 4H18v16zm-7-5h2v2h-2zm0-7h2v5h-2z"/>
    </Icon>
  );
});

IconMaterialSdCardAlert.displayName = 'AmauiIconMaterialSdCardAlert';

export default IconMaterialSdCardAlert;
