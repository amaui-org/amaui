import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderAll = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAll'

      short_name='BorderAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 3H3v18h18V3zM11 19H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"/>
    </Icon>
  );
});

IconMaterialBorderAll.displayName = 'AmauiIconMaterialBorderAll';

export default IconMaterialBorderAll;
