import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeedCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedCameraW100Filled'

      short_name='SpeedCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m698-398-37-21 91-66 36 21-90 66ZM212-212v-28h190v-252l-171-94 107-180 399 218-189 136-119-65v265H212Z"/>
    </Icon>
  );
});

IconMaterialSpeedCameraW100Filled.displayName = 'AmauiIconMaterialSpeedCameraW100Filled';

export default IconMaterialSpeedCameraW100Filled;
