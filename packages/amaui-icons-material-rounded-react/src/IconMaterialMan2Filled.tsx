import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMan2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man2Filled'

      short_name='Man2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 21v-6H9q-.425 0-.712-.288Q8 14.425 8 14V9q0-.825.588-1.413Q9.175 7 10 7h4q.825 0 1.413.587Q16 8.175 16 9v5q0 .425-.287.712Q15.425 15 15 15h-1.5v6q0 .425-.287.712-.288.288-.713.288h-1q-.425 0-.712-.288-.288-.287-.288-.712ZM12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Z"/>
    </Icon>
  );
});

IconMaterialMan2Filled.displayName = 'AmauiIconMaterialMan2Filled';

export default IconMaterialMan2Filled;
