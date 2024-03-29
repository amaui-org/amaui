import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContentPasteOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteOffFilled'

      short_name='ContentPasteOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.625 18.15 21H3V5.85L1.375 4.225 2.8 2.8l18.4 18.4ZM5 19h11.15L5 7.85Zm16-.85-2-2V5h-2v3h-6.15l-5-5h3.325q.275-.875 1.075-1.438Q11.05 1 12 1q1 0 1.788.562.787.563 1.062 1.438H21ZM12 5q.425 0 .713-.288Q13 4.425 13 4t-.287-.713Q12.425 3 12 3t-.712.287Q11 3.575 11 4t.288.712Q11.575 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialContentPasteOffFilled.displayName = 'AmauiIconMaterialContentPasteOffFilled';

export default IconMaterialContentPasteOffFilled;
