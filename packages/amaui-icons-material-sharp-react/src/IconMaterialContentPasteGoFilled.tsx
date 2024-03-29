import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentPasteGoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteGoFilled'

      short_name='ContentPasteGo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h6.175q.275-.875 1.075-1.438Q11.05 1 12 1q1 0 1.788.562.787.563 1.062 1.438H21v8h-2V5h-2v3H7V5H5v14h5v2Zm15 0-1.4-1.425L18.175 18H12v-2h6.175L16.6 14.4 18 13l4 4ZM12 5q.425 0 .713-.288Q13 4.425 13 4t-.287-.713Q12.425 3 12 3t-.712.287Q11 3.575 11 4t.288.712Q11.575 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialContentPasteGoFilled.displayName = 'AmauiIconMaterialContentPasteGoFilled';

export default IconMaterialContentPasteGoFilled;
