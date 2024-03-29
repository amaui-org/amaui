import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalAlignTopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignTopFilled'

      short_name='VerticalAlignTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 5q-.425 0-.713-.288Q4 4.425 4 4t.287-.713Q4.575 3 5 3h14q.425 0 .712.287Q20 3.575 20 4t-.288.712Q19.425 5 19 5Zm7 16q-.425 0-.712-.288Q11 20.425 11 20v-9.2l-1.925 1.925Q8.8 13 8.4 13t-.7-.3q-.275-.275-.275-.7 0-.425.275-.7l3.6-3.6q.15-.15.325-.212.175-.063.375-.063t.375.063q.175.062.325.212l3.625 3.625q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275L13 10.8V20q0 .425-.287.712Q12.425 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignTopFilled.displayName = 'AmauiIconMaterialVerticalAlignTopFilled';

export default IconMaterialVerticalAlignTopFilled;
