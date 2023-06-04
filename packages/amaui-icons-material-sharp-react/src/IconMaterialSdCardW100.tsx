import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdCardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardW100'

      short_name='SdCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.75 10.7h.7V7.45h-.7Zm2.75 0h.7V7.45h-.7Zm2.75 0h.7V7.45h-.7Zm-9.95 10V8.55l5.25-5.25h8.15v17.4ZM6 20h12V4h-7.15L6 8.85Zm0 0h12Z"/>
    </Icon>
  );
});

IconMaterialSdCardW100.displayName = 'AmauiIconMaterialSdCardW100';

export default IconMaterialSdCardW100;
