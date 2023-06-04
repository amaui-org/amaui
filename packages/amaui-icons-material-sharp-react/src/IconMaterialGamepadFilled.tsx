import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGamepadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GamepadFilled'

      short_name='Gamepad'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 516 360 396V176h240v220L480 516Zm180 180L540 576l120-120h220v240H660Zm-580 0V456h220l120 120-120 120H80Zm280 280V756l120-120 120 120v220H360Z"/>
    </Icon>
  );
});

IconMaterialGamepadFilled.displayName = 'AmauiIconMaterialGamepadFilled';

export default IconMaterialGamepadFilled;
