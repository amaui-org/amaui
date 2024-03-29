import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardExternalInputFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardExternalInputFilled'

      short_name='KeyboardExternalInput'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 536v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80ZM200 416v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80ZM160 856q-33 0-56.5-23.5T80 776V376q0-33 23.5-56.5T160 296h640q33 0 56.5 23.5T880 376v261q-26-23-56.5-37.5T760 580v-44h-80v44q-11 2-20.5 4t-19.5 6v-54h-80v80h28q-13 8-24 18.5T542 656H360q-17 0-28.5 11.5T320 696q0 17 11.5 28.5T360 736h134q-7 19-10 39t-3 41q0 11 .5 20.5T484 856H160Zm567 0H600q-17 0-28.5-11.5T560 816q0-17 11.5-28.5T600 776h127l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L748 948q-11 11-27.5 11.5T692 948q-11-11-11-28t11-28l35-36Z"/>
    </Icon>
  );
});

IconMaterialKeyboardExternalInputFilled.displayName = 'AmauiIconMaterialKeyboardExternalInputFilled';

export default IconMaterialKeyboardExternalInputFilled;
