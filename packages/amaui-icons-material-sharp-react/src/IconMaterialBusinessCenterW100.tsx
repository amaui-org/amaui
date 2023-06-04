import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterW100'

      short_name='BusinessCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V7.3h6V4.6h5.4v2.7h6v12.4ZM10 7.3h4v-2h-4Zm10 7.05h-6.3v1.35h-3.4v-1.35H4V19h16ZM11 15h2v-2h-2Zm-7-1.35h6.3V12.3h3.4v1.35H20V8H4Zm8 .35Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterW100.displayName = 'AmauiIconMaterialBusinessCenterW100';

export default IconMaterialBusinessCenterW100;
