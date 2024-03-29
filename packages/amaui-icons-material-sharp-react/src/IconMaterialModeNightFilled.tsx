import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeNightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeNightFilled'

      short_name='ModeNight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175.788 1.825.788 3.9t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q11.575 22 9.5 22q-1.325 0-2.587-.337Q5.65 21.325 4.5 20.65 6.825 19.3 8.162 17 9.5 14.7 9.5 12T8.162 7Q6.825 4.7 4.5 3.35q1.15-.675 2.413-1.013Q8.175 2 9.5 2Z"/>
    </Icon>
  );
});

IconMaterialModeNightFilled.displayName = 'AmauiIconMaterialModeNightFilled';

export default IconMaterialModeNightFilled;
