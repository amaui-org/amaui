import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAzmFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AzmFilled'

      short_name='Azm'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M640 456v272q0 14 12 19t22-5l103-103q11-11 17-25.5t6-30.5V336q0-33-23.5-56.5T720 256H473q-16 0-30.5 6T417 279L314 382q-10 10-5 22t19 12h272q17 0 28.5 11.5T640 456ZM400 696v272q0 14 12 19t22-5l103-103q11-11 17-25.5t6-30.5V576q0-33-23.5-56.5T480 496H233q-16 0-30.5 6T177 519L74 622q-10 10-5 22t19 12h272q17 0 28.5 11.5T400 696Z"/>
    </Icon>
  );
});

IconMaterialAzmFilled.displayName = 'AmauiIconMaterialAzmFilled';

export default IconMaterialAzmFilled;
