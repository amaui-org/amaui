import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamWiredStandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamWiredStandFilled'

      short_name='NestCamWiredStand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 23q-.425 0-.713-.288Q7 22.425 7 22v-2q0-2.1 1.463-3.55Q9.925 15 12 15q.275 0 .525.025t.5.075l.55-.85-1.85-.175q-2.425-.25-4.075-2.063Q6 10.2 6 7.75q0-2.475 1.638-4.288Q9.275 1.65 11.725 1.4L15.85 1q.875-.075 1.525.525.65.6.65 1.475v9.475q0 .875-.65 1.475-.65.6-1.525.525h-.025l-.95 1.425q.975.675 1.55 1.75Q17 18.725 17 20v2q0 .425-.288.712Q16.425 23 16 23Z"/>
    </Icon>
  );
});

IconMaterialNestCamWiredStandFilled.displayName = 'AmauiIconMaterialNestCamWiredStandFilled';

export default IconMaterialNestCamWiredStandFilled;
