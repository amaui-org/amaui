import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveBackCharacter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveBackCharacter'

      short_name='TextSelectMoveBackCharacter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 296v-80h80v80h-80Zm0 640v-80h80v80h-80ZM280 296v-80h80v80h-80Zm0 640v-80h80v80h-80Zm-28-228L148 604q-12-12-12-28t12-28l104-104q11-11 27.5-11.5T308 444q11 11 11 28t-11 28l-35 36h247q17 0 28.5 11.5T560 576q0 17-11.5 28.5T520 616H273l36 36q11 11 11 27.5T308 708q-11 11-28 11t-28-11Zm388 228q-17 0-28.5-11.5T600 896q0-17 11.5-28.5T640 856h40V296h-40q-17 0-28.5-11.5T600 256q0-17 11.5-28.5T640 216h160q17 0 28.5 11.5T840 256q0 17-11.5 28.5T800 296h-40v560h40q17 0 28.5 11.5T840 896q0 17-11.5 28.5T800 936H640ZM120 296q0-33 23.5-56.5T200 216v80h-80Zm80 640q-33 0-56.5-23.5T120 856h80v80Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveBackCharacter.displayName = 'AmauiIconMaterialTextSelectMoveBackCharacter';

export default IconMaterialTextSelectMoveBackCharacter;
