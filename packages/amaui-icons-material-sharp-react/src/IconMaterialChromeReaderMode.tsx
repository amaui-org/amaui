import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeReaderMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeReaderMode'

      short_name='ChromeReaderMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-2h7V6H4Zm9 0h7V6h-7Zm1-8h5V8.5h-5Zm0 2.5h5V11h-5Zm0 2.5h5v-1.5h-5ZM4 6v12Z"/>
    </Icon>
  );
});

IconMaterialChromeReaderMode.displayName = 'AmauiIconMaterialChromeReaderMode';

export default IconMaterialChromeReaderMode;
