import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorthWestFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWestFilled'

      short_name='NorthWest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.9 19.3 7 8.4V14q0 .425-.287.712Q6.425 15 6 15t-.713-.288Q5 14.425 5 14V6q0-.425.287-.713Q5.575 5 6 5h8q.425 0 .713.287Q15 5.575 15 6t-.287.713Q14.425 7 14 7H8.4l10.9 10.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialNorthWestFilled.displayName = 'AmauiIconMaterialNorthWestFilled';

export default IconMaterialNorthWestFilled;
