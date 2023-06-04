import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeReaderModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeReaderModeW100'

      short_name='ChromeReaderMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 18h7.65V6H4Zm8.35 0H20V6h-7.65Zm1.1-8.4h5.45v-.7h-5.45Zm0 2.5h5.45v-.7h-5.45Zm0 2.5h5.45v-.7h-5.45ZM4 6v12Z"/>
    </Icon>
  );
});

IconMaterialChromeReaderModeW100.displayName = 'AmauiIconMaterialChromeReaderModeW100';

export default IconMaterialChromeReaderModeW100;
