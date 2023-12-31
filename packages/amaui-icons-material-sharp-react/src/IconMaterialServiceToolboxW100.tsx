import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialServiceToolboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ServiceToolboxW100'

      short_name='ServiceToolbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M342-668v-76h276v76h107l103 232v224H132v-224l103-232h107Zm28 0h220v-48H370v48Zm-64 224v-40h28v40h292v-40h28v40h140l-86-196H252l-86 196h140Zm0 28H160v176h640v-176H654v40h-28v-40H334v40h-28v-40Zm174-14Zm0-14Zm0 28Z"/>
    </Icon>
  );
});

IconMaterialServiceToolboxW100.displayName = 'AmauiIconMaterialServiceToolboxW100';

export default IconMaterialServiceToolboxW100;
