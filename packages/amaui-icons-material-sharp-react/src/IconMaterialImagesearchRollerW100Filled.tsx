import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImagesearchRollerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImagesearchRollerW100Filled'

      short_name='ImagesearchRoller'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.525 22.3v-6.4h1.35v-5h-8.05V5.15h2.45V3.8h11.9v3.4h-11.9V5.85h-1.75v4.35h8.05v5.7h1.35v6.4Z"/>
    </Icon>
  );
});

IconMaterialImagesearchRollerW100Filled.displayName = 'AmauiIconMaterialImagesearchRollerW100Filled';

export default IconMaterialImagesearchRollerW100Filled;
