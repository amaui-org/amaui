import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGeneralDevice = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GeneralDevice'

      short_name='GeneralDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240v-600h320v600H320Zm80-80h160v-440H400v440Zm-80 200v-80h320v80H320Zm80-200h160-160Z"/>
    </Icon>
  );
});

IconMaterialGeneralDevice.displayName = 'AmauiIconMaterialGeneralDevice';

export default IconMaterialGeneralDevice;
