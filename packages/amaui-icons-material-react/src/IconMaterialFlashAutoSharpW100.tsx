import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashAutoSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashAutoSharpW100'
      short_name='FlashAuto'

      {...props}
    >
      <path d="M13.55 11 17.1 2H17.45L21.05 11H20.25L19.15 8.3H15.4L14.3 11ZM15.65 7.65H18.9L17.3 3.55H17.2ZM6.15 21.9V14H3.5V3.5H12.25L8.75 11.35H12.25Z"/>
    </Icon>
  );
});

IconMaterialFlashAutoSharpW100.displayName = 'AmauiIconMaterialFlashAutoSharpW100';

export default IconMaterialFlashAutoSharpW100;
