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
      <path d="M11 13h2V8h-2Zm0 4h2v-2h-2Zm-7 5V8l6-6h10v20Zm2-2h12V4h-7.15L6 8.85Zm0 0h12Z"/>
    </Icon>
  );
});

IconMaterialSdCardAlert.displayName = 'AmauiIconMaterialSdCardAlert';

export default IconMaterialSdCardAlert;
