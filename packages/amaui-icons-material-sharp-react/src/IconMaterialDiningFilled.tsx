import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiningFilled'

      short_name='Dining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h20v20Zm6-3h1.5v-6.75q.65-.2 1.075-.713Q11 11.025 11 10.3V6h-1v3h-.75V6h-1v3H7.5V6h-1v4.3q0 .725.425 1.237.425.513 1.075.713Zm6 0h1.5v-6.35q.825-.4 1.288-1.275.462-.875.462-2.05 0-1.425-.712-2.375Q15.825 6 14.75 6q-1.075 0-1.787.95-.713.95-.713 2.375 0 1.175.463 2.05.462.875 1.287 1.275Z"/>
    </Icon>
  );
});

IconMaterialDiningFilled.displayName = 'AmauiIconMaterialDiningFilled';

export default IconMaterialDiningFilled;
