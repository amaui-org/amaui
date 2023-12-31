import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFallingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FallingW100'

      short_name='Falling'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m519-91-29-5 31-163-150-112-59-261-133 114 30 142-29 5-32-156 168-148q17-16 40.5-11t46.5 14q36 15 74 21.5t76 1.5q31-5 58.5-21t51.5-36l18 23q-23 17-47 32.5T582-627q-40 11-80.5 6.5T421-635l43 189 162-30 177 126-17 22-155-108-213 43 138 100-37 202ZM320-748q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Z"/>
    </Icon>
  );
});

IconMaterialFallingW100.displayName = 'AmauiIconMaterialFallingW100';

export default IconMaterialFallingW100;
