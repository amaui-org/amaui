import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintFilled'

      short_name='Print'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 7H6V4q0-.425.287-.713Q6.575 3 7 3h10q.425 0 .712.287Q18 3.575 18 4Zm0 5.5q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q18.425 10.5 18 10.5t-.712.287Q17 11.075 17 11.5t.288.712q.287.288.712.288ZM8 19h8v-4H8v4Zm0 2q-.825 0-1.412-.587Q6 19.825 6 19v-2H3q-.425 0-.712-.288Q2 16.425 2 16v-5q0-1.275.875-2.137Q3.75 8 5 8h14q1.275 0 2.138.863Q22 9.725 22 11v5q0 .425-.288.712Q21.425 17 21 17h-3v2q0 .825-.587 1.413Q16.825 21 16 21Z"/>
    </Icon>
  );
});

IconMaterialPrintFilled.displayName = 'AmauiIconMaterialPrintFilled';

export default IconMaterialPrintFilled;
