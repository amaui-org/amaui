import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenJam = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenJam'

      short_name='OpenJam'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120h480v-80H520v-288l64 64 56-56-160-160-160 160 56 56 64-64v288H240v80Zm240-360ZM80-320v-520h800v520H600v-80h200v-360H160v360h200v80H80Z"/>
    </Icon>
  );
});

IconMaterialOpenJam.displayName = 'AmauiIconMaterialOpenJam';

export default IconMaterialOpenJam;
