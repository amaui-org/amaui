import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRvHookupFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RvHookupFilled'

      short_name='RvHookup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.8 20.8q-.275-.275-.275-.7 0-.425.275-.7l.4-.4h-7.4q-.3.9-1.075 1.45Q9.95 21 9 21q-.95 0-1.712-.55Q6.525 19.9 6.2 19H5q-1.25 0-2.125-.875T2 16v-6h6V7H2.975q-.425 0-.7-.287Q2 6.425 2 6t.288-.713Q2.575 5 3 5h12q.825 0 1.413.588Q17 6.175 17 7v10h2.15l-.35-.35q-.3-.3-.3-.712 0-.413.3-.713t.713-.3q.412 0 .712.3L22.3 17.3q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.125 2.125q-.275.275-.675.275t-.7-.3ZM10 10h5V7h-5Zm-1 9q.425 0 .713-.288Q10 18.425 10 18t-.287-.712Q9.425 17 9 17t-.712.288Q8 17.575 8 18t.288.712Q8.575 19 9 19Z"/>
    </Icon>
  );
});

IconMaterialRvHookupFilled.displayName = 'AmauiIconMaterialRvHookupFilled';

export default IconMaterialRvHookupFilled;
