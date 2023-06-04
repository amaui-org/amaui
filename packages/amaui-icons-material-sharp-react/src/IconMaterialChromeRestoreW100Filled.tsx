import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeRestoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeRestoreW100Filled'

      short_name='ChromeRestore'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M372 684V308h376v376H372ZM212 844V456h28v360h360v28H212Z"/>
    </Icon>
  );
});

IconMaterialChromeRestoreW100Filled.displayName = 'AmauiIconMaterialChromeRestoreW100Filled';

export default IconMaterialChromeRestoreW100Filled;
