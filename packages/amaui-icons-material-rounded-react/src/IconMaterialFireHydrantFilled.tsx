import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFireHydrantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireHydrantFilled'

      short_name='FireHydrant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-.425 0-.713-.288Q4 21.425 4 21t.287-.712Q4.575 20 5 20h1v-3H5q-.825 0-1.413-.587Q3 15.825 3 15v-2q0-.825.587-1.413Q4.175 11 5 11h1V8H5q-.425 0-.713-.287Q4 7.425 4 7t.287-.713Q4.575 6 5 6h1.35q.625-1.75 2.163-2.875Q10.05 2 12 2q1.95 0 3.488 1.125Q17.025 4.25 17.65 6H19q.425 0 .712.287Q20 6.575 20 7t-.288.713Q19.425 8 19 8h-1v3h1q.825 0 1.413.587Q21 12.175 21 13v2q0 .825-.587 1.413Q19.825 17 19 17h-1v3h1q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 22 19 22Zm7-4.5q1.45 0 2.475-1.025Q15.5 15.45 15.5 14q0-1.45-1.025-2.475Q13.45 10.5 12 10.5q-1.45 0-2.475 1.025Q8.5 12.55 8.5 14q0 1.45 1.025 2.475Q10.55 17.5 12 17.5Zm0-2q-.625 0-1.062-.438Q10.5 14.625 10.5 14t.438-1.062Q11.375 12.5 12 12.5t1.062.438q.438.437.438 1.062t-.438 1.062q-.437.438-1.062.438Z"/>
    </Icon>
  );
});

IconMaterialFireHydrantFilled.displayName = 'AmauiIconMaterialFireHydrantFilled';

export default IconMaterialFireHydrantFilled;
