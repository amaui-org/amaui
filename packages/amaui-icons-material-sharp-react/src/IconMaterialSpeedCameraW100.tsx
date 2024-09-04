import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeedCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedCameraW100'

      short_name='SpeedCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m698-398-37-21 91-66 36 21-90 66Zm-152-47 140-101-336-184-80 134 276 151ZM212-212v-28h190v-252l-171-94 107-180 399 218-189 136-119-65v265H212Zm266-376Z"/>
    </Icon>
  );
});

IconMaterialSpeedCameraW100.displayName = 'AmauiIconMaterialSpeedCameraW100';

export default IconMaterialSpeedCameraW100;
