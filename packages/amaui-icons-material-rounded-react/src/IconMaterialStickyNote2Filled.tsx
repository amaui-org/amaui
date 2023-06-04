import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStickyNote2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2Filled'

      short_name='StickyNote2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v10l-6 6Zm6-7q.425 0 .713-.288Q12 13.425 12 13t-.287-.713Q11.425 12 11 12H8q-.425 0-.713.287Q7 12.575 7 13t.287.712Q7.575 14 8 14Zm5-4q.425 0 .712-.288Q17 9.425 17 9t-.288-.713Q16.425 8 16 8H8q-.425 0-.713.287Q7 8.575 7 9t.287.712Q7.575 10 8 10Zm-2 9 5-5h-4q-.425 0-.712.287Q14 14.575 14 15Z"/>
    </Icon>
  );
});

IconMaterialStickyNote2Filled.displayName = 'AmauiIconMaterialStickyNote2Filled';

export default IconMaterialStickyNote2Filled;
