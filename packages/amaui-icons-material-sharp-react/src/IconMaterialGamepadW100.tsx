import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGamepadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GamepadW100'

      short_name='Gamepad'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 402Zm174 174Zm-348 0Zm174 174Zm0-308-68-68V228h136v146l-68 68Zm202 202-68-68 68-68h146v136H682Zm-550 0V508h146l68 68-68 68H132Zm280 280V778l68-68 68 68v146H412Zm68-522 40-40V256h-80v106l40 40ZM160 616h106l40-40-40-40H160v80Zm280 280h80V790l-40-40-40 40v106Zm254-280h106v-80H694l-40 40 40 40Z"/>
    </Icon>
  );
});

IconMaterialGamepadW100.displayName = 'AmauiIconMaterialGamepadW100';

export default IconMaterialGamepadW100;
