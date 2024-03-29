import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardExternalInput = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardExternalInput'

      short_name='KeyboardExternalInput'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 776V376v400Zm0 80q-33 0-56.5-23.5T80 776V376q0-33 23.5-56.5T160 296h640q33 0 56.5 23.5T880 376v261q-17-16-37-27.5T800 590V376H160v400h324q-2 10-2.5 19.5T481 816q0 11 .5 20.5T484 856H160Zm200-120h134q8-23 20-43t28-37H360q-17 0-28.5 11.5T320 696q0 17 11.5 28.5T360 736ZM200 536v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h28q12-8 25-14.5t27-11.5v-54h-80Zm120 0v44q10-2 19.5-3t20.5-1q11 0 20.5 1t19.5 3v-44h-80ZM200 416v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm47 440H600q-17 0-28.5-11.5T560 816q0-17 11.5-28.5T600 776h127l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L748 948q-11 11-27.5 11.5T692 948q-11-11-11-28t11-28l35-36Z"/>
    </Icon>
  );
});

IconMaterialKeyboardExternalInput.displayName = 'AmauiIconMaterialKeyboardExternalInput';

export default IconMaterialKeyboardExternalInput;
