import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutput = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Output'

      short_name='Output'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v1q0 .425-.288.713Q20.425 7 20 7t-.712-.287Q19 6.425 19 6V5H5v14h14v-1q0-.425.288-.712Q19.575 17 20 17t.712.288Q21 17.575 21 18v1q0 .825-.587 1.413Q19.825 21 19 21Zm13.175-8H10q-.425 0-.712-.288Q9 12.425 9 12t.288-.713Q9.575 11 10 11h8.175L16.3 9.1q-.275-.275-.287-.688Q16 8 16.3 7.7q.275-.275.7-.275.425 0 .7.275l3.6 3.6q.3.3.3.7 0 .4-.3.7l-3.6 3.6q-.275.275-.687.287-.413.013-.713-.287-.275-.275-.275-.7 0-.425.275-.7Z"/>
    </Icon>
  );
});

IconMaterialOutput.displayName = 'AmauiIconMaterialOutput';

export default IconMaterialOutput;
