import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGamepad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Gamepad'

      short_name='Gamepad'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 402Zm174 174Zm-348 0Zm174 174Zm0-234L360 396V176h240v220L480 516Zm180 180L540 576l120-120h220v240H660Zm-580 0V456h220l120 120-120 120H80Zm280 280V756l120-120 120 120v220H360Zm120-574 40-40V256h-80v106l40 40ZM160 616h106l40-40-40-40H160v80Zm280 280h80V790l-40-40-40 40v106Zm254-280h106v-80H694l-40 40 40 40Z"/>
    </Icon>
  );
});

IconMaterialGamepad.displayName = 'AmauiIconMaterialGamepad';

export default IconMaterialGamepad;
