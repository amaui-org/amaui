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
      <path d="M320 736V256h480v480H320Zm80-80h320V336H400v320ZM160 896V437h80v379h379v80H160Zm240-240V336v320Z"/>
    </Icon>
  );
});

IconMaterialChromeRestore.displayName = 'AmauiIconMaterialChromeRestore';

export default IconMaterialChromeRestore;
