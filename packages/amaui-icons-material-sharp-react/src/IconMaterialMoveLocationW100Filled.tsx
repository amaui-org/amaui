import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveLocationW100Filled'

      short_name='MoveLocation'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m769 899-20-19 89-90H635v-28h203l-89-90 20-19 123 123-123 123ZM362 670q42 0 77.5-18.5T499 602q-30-20-64.5-30T362 562q-38 0-72.5 10T225 602q24 31 59.5 49.5T362 670Zm0-200q23 0 38.5-15.5T416 416q0-23-15.5-38.5T362 362q-23 0-38.5 15.5T308 416q0 23 15.5 38.5T362 470Zm0 486Q213 822 140.5 707.5T68 504q0-138 89-220t205-82q116 0 205 82t89 220q0 89-72.5 203.5T362 956Z"/>
    </Icon>
  );
});

IconMaterialMoveLocationW100Filled.displayName = 'AmauiIconMaterialMoveLocationW100Filled';

export default IconMaterialMoveLocationW100Filled;
