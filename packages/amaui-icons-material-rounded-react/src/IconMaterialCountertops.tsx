import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCountertops = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Countertops'

      short_name='Countertops'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20q-.425 0-.713-.288Q4 19.425 4 19v-7H3q-.425 0-.712-.288Q2 11.425 2 11t.288-.713Q2.575 10 3 10h3q-.825 0-1.412-.588Q4 8.825 4 8V5q0-.425.287-.713Q4.575 4 5 4h4q.425 0 .713.287Q10 4.575 10 5v3q0 .825-.587 1.412Q8.825 10 8 10h8V7q0-.425-.287-.713Q15.425 6 15 6q-.275 0-.5.137-.225.138-.425.413-.175.25-.387.35-.213.1-.413.1-.65 0-.912-.488-.263-.487.062-1.037.4-.65 1.075-1.063Q14.175 4 15 4q1.25 0 2.125.875T18 7v3h3q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 12 21 12h-1v7q0 .425-.288.712Q19.425 20 19 20ZM6 8h2V6H6Zm0 10h5v-6H6Zm7 0h5v-6h-5ZM6 8h2Zm6 7Z"/>
    </Icon>
  );
});

IconMaterialCountertops.displayName = 'AmauiIconMaterialCountertops';

export default IconMaterialCountertops;
