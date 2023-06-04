import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabProfile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabProfile'

      short_name='LabProfile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 12v-2h8v2Zm0-4V6h8v2Zm-2 6h8.975L18 17.95V4H6Zm0 6h11.05L14 16H6Zm14 2H4V2h16ZM6 20V4Zm0-4v-2 2Z"/>
    </Icon>
  );
});

IconMaterialLabProfile.displayName = 'AmauiIconMaterialLabProfile';

export default IconMaterialLabProfile;
