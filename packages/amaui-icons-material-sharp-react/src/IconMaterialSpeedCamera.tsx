import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeedCamera = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedCamera'

      short_name='SpeedCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m701-360-87-50 140-104 86 50-139 104ZM512-482l104-79-276-159-60 104 232 134ZM160-160v-80h200v-238L171-587l140-242 450 260-244 182-77-44v271H160Zm288-441Z"/>
    </Icon>
  );
});

IconMaterialSpeedCamera.displayName = 'AmauiIconMaterialSpeedCamera';

export default IconMaterialSpeedCamera;
