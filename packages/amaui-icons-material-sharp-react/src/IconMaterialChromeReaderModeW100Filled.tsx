import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeReaderModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeReaderModeW100Filled'

      short_name='ChromeReaderMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4Zm9.05-.7H20V6h-7.65Zm1.1-8.4h5.45v-.7h-5.45Zm0 2.5h5.45v-.7h-5.45Zm0 2.5h5.45v-.7h-5.45Z"/>
    </Icon>
  );
});

IconMaterialChromeReaderModeW100Filled.displayName = 'AmauiIconMaterialChromeReaderModeW100Filled';

export default IconMaterialChromeReaderModeW100Filled;
