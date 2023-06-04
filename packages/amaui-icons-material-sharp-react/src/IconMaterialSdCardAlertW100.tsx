import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdCardAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardAlertW100'

      short_name='SdCardAlert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 13.55h.7V9h-.7ZM11.4 16h1.2v-1.2h-1.2Zm-6.1 4.7V8.55l5.25-5.25h8.15v17.4ZM6 20h12V4h-7.15L6 8.85Zm0 0h12Z"/>
    </Icon>
  );
});

IconMaterialSdCardAlertW100.displayName = 'AmauiIconMaterialSdCardAlertW100';

export default IconMaterialSdCardAlertW100;
