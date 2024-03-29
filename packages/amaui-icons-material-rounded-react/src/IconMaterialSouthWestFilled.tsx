import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouthWestFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthWestFilled'

      short_name='SouthWest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19q-.425 0-.713-.288Q5 18.425 5 18v-8q0-.425.287-.713Q5.575 9 6 9t.713.287Q7 9.575 7 10v5.6L17.9 4.7q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L8.4 17H14q.425 0 .713.288.287.287.287.712t-.287.712Q14.425 19 14 19Z"/>
    </Icon>
  );
});

IconMaterialSouthWestFilled.displayName = 'AmauiIconMaterialSouthWestFilled';

export default IconMaterialSouthWestFilled;
