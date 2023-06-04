import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanW100'

      short_name='Lan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 21.35v-5.7h3v-4h5v-3.3h-3v-5.7h6.7v5.7h-3v3.3h5v4h3v5.7h-6.7v-5.7h3v-3.3h-9.3v3.3h3v5.7Zm5.7-13.7h5.3v-4.3h-5.3Zm-5 13h5.3v-4.3h-5.3Zm10 0h5.3v-4.3h-5.3ZM12 7.65Zm-2.35 8.7Zm4.7 0Z"/>
    </Icon>
  );
});

IconMaterialLanW100.displayName = 'AmauiIconMaterialLanW100';

export default IconMaterialLanW100;
