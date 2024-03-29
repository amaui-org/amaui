import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveForwardCharacterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveForwardCharacterFilled'

      short_name='TextSelectMoveForwardCharacter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 936v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm87 320H440q-17 0-28.5-11.5T400 576q0-17 11.5-28.5T440 536h247l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L708 708q-11 11-27.5 11.5T652 708q-11-11-11-28t11-28l35-36ZM200 856V296h-40q-17 0-28.5-11.5T120 256q0-17 11.5-28.5T160 216h160q17 0 28.5 11.5T360 256q0 17-11.5 28.5T320 296h-40v560h40q17 0 28.5 11.5T360 896q0 17-11.5 28.5T320 936H160q-17 0-28.5-11.5T120 896q0-17 11.5-28.5T160 856h40Zm560-560v-80q33 0 56.5 23.5T840 296h-80Zm0 640v-80h80q0 33-23.5 56.5T760 936Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveForwardCharacterFilled.displayName = 'AmauiIconMaterialTextSelectMoveForwardCharacterFilled';

export default IconMaterialTextSelectMoveForwardCharacterFilled;
