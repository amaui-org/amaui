import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChromeRestoreW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeRestoreW100'

      short_name='ChromeRestore'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M372 684V308h376v376H372Zm28-28h320V336H400v320ZM212 844V456h28v360h360v28H212Zm188-188V336v320Z"/>
    </Icon>
  );
});

IconMaterialChromeRestoreW100.displayName = 'AmauiIconMaterialChromeRestoreW100';

export default IconMaterialChromeRestoreW100;
