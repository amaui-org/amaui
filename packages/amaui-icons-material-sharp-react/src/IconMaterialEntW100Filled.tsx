import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEntW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EntW100Filled'

      short_name='Ent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M292 924V780q-57-52-88.5-115.5T172 535q0-128 90-217.5T480 228q103 0 187.5 63.5T777 455l47 189H708v200H548v80H423l22-214h129v-28H448l18-172h192v-28H441l-46 442H292Z"/>
    </Icon>
  );
});

IconMaterialEntW100Filled.displayName = 'AmauiIconMaterialEntW100Filled';

export default IconMaterialEntW100Filled;
