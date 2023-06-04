import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryErrorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryErrorFilled'

      short_name='BatteryError'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m656 976-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Zm-376 0V256h120v-80h160v80h120v348q-80 22-130 84.5T500 836q0 37 12 73.5t33 66.5H280Z"/>
    </Icon>
  );
});

IconMaterialBatteryErrorFilled.displayName = 'AmauiIconMaterialBatteryErrorFilled';

export default IconMaterialBatteryErrorFilled;
