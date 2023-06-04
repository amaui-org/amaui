import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectMoveForwardCharacter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectMoveForwardCharacter'

      short_name='TextSelectMoveForwardCharacter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 936v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM120 936v-80h80V296h-80v-80h240v80h-80v560h80v80H120Zm560-200-56-56 63-64H400v-80h287l-63-64 56-56 160 160-160 160Z"/>
    </Icon>
  );
});

IconMaterialTextSelectMoveForwardCharacter.displayName = 'AmauiIconMaterialTextSelectMoveForwardCharacter';

export default IconMaterialTextSelectMoveForwardCharacter;
