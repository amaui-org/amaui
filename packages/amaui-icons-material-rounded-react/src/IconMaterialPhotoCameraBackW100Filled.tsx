import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoCameraBackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraBackW100Filled'

      short_name='PhotoCameraBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.75 16.35h6.7q.275 0 .375-.225.1-.225-.05-.425L14 13.35q-.125-.15-.312-.15-.188 0-.313.15l-2.175 2.7-1.275-1.475q-.125-.15-.312-.15-.188 0-.313.175l-.85 1.1q-.15.2-.05.425.1.225.35.225ZM4.8 19.7q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h2.9l1.4-1.525q.225-.225.513-.35Q9.9 4.3 10.2 4.3h3.6q.3 0 .588.125.287.125.512.35L16.3 6.3h2.9q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraBackW100Filled.displayName = 'AmauiIconMaterialPhotoCameraBackW100Filled';

export default IconMaterialPhotoCameraBackW100Filled;
