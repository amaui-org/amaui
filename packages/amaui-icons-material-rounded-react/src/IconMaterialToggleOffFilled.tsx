import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToggleOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToggleOffFilled'

      short_name='ToggleOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18q-2.5 0-4.25-1.75T1 12q0-2.5 1.75-4.25T7 6h10q2.5 0 4.25 1.75T23 12q0 2.5-1.75 4.25T17 18Zm0-3q1.25 0 2.125-.875T10 12q0-1.25-.875-2.125T7 9q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15Z"/>
    </Icon>
  );
});

IconMaterialToggleOffFilled.displayName = 'AmauiIconMaterialToggleOffFilled';

export default IconMaterialToggleOffFilled;
