import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnifyDockedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnifyDockedW100Filled'

      short_name='MagnifyDocked'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 844V308h696v536H132Zm28-108h640V336H160v400Zm426-96h28v-90h90v-28h-90v-90h-28v90h-90v28h90v90Z"/>
    </Icon>
  );
});

IconMaterialMagnifyDockedW100Filled.displayName = 'AmauiIconMaterialMagnifyDockedW100Filled';

export default IconMaterialMagnifyDockedW100Filled;
