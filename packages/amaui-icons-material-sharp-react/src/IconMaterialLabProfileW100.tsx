import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabProfileW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabProfileW100'

      short_name='LabProfile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 11.35v-.7h6.7v.7Zm0-4v-.7h6.7v.7ZM6 14.65h8.65L18 19V4H6ZM6 20h11.875l-3.55-4.65H6Zm12.7.7H5.3V3.3h13.4ZM6 20V4Zm0-4.65v-.7.7Z"/>
    </Icon>
  );
});

IconMaterialLabProfileW100.displayName = 'AmauiIconMaterialLabProfileW100';

export default IconMaterialLabProfileW100;
