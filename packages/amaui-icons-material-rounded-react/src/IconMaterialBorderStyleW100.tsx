import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderStyleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderStyleW100'

      short_name='BorderStyle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 20.5v-1h1v1Zm4 0v-1h1v1Zm-12 0v-1h1v1Zm4 0v-1h1v1Zm8-4v-1h1v1Zm0-4v-1h1v1Zm-16 8V5.1q0-.7.45-1.15.45-.45 1.15-.45h15.4v1H5.1q-.25 0-.425.175T4.5 5.1v15.4Zm16-12v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderStyleW100.displayName = 'AmauiIconMaterialBorderStyleW100';

export default IconMaterialBorderStyleW100;
