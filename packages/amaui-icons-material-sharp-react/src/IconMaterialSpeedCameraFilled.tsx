import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeedCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedCameraFilled'

      short_name='SpeedCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m701-360-87-50 140-104 86 50-139 104ZM160-160v-80h200v-238L171-587l140-242 450 260-244 182-77-44v271H160Z"/>
    </Icon>
  );
});

IconMaterialSpeedCameraFilled.displayName = 'AmauiIconMaterialSpeedCameraFilled';

export default IconMaterialSpeedCameraFilled;
