import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTurnSlightLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TurnSlightLeftFilled'

      short_name='TurnSlightLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 20q-.425 0-.712-.288Q13 19.425 13 19v-6.6l-5-5v1.25q0 .425-.287.712-.288.288-.713.288t-.713-.288Q6 9.075 6 8.65V5q0-.425.287-.713Q6.575 4 7 4h3.65q.425 0 .713.287.287.288.287.713t-.287.713Q11.075 6 10.65 6H9.4l5.025 5.025q.275.275.425.637.15.363.15.763V19q0 .425-.287.712Q14.425 20 14 20Z"/>
    </Icon>
  );
});

IconMaterialTurnSlightLeftFilled.displayName = 'AmauiIconMaterialTurnSlightLeftFilled';

export default IconMaterialTurnSlightLeftFilled;
