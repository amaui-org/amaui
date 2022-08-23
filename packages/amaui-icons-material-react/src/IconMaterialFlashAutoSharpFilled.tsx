import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashAutoSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashAutoSharpFilled'
      short_name='FlashAuto'

      {...props}
    >
      <path d="M13.625 11 17 2H18.6L22.025 11H20.475L19.675 8.7H15.975L15.175 11ZM16.425 7.4H19.175L17.85 3.65H17.8ZM6 23V14H3V2H13L9 11H13Z"/>
    </Icon>
  );
});

IconMaterialFlashAutoSharpFilled.displayName = 'AmauiIconMaterialFlashAutoSharpFilled';

export default IconMaterialFlashAutoSharpFilled;
