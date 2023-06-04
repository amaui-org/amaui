import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeRestore = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeRestore'

      short_name='ChromeRestore'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 736q-33 0-56.5-23.5T320 656V336q0-33 23.5-56.5T400 256h320q33 0 56.5 23.5T800 336v320q0 33-23.5 56.5T720 736H400Zm0-400v320h320V336H400ZM240 896q-33 0-56.5-23.5T160 816V477q0-17 11.5-28.5T200 437q17 0 28.5 11.5T240 477v339h339q17 0 28.5 11.5T619 856q0 17-11.5 28.5T579 896H240Zm160-560v320-320Z"/>
    </Icon>
  );
});

IconMaterialChromeRestore.displayName = 'AmauiIconMaterialChromeRestore';

export default IconMaterialChromeRestore;
