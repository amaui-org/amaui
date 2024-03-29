import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks3Filled'

      short_name='Looks3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 17h3q.825 0 1.413-.587Q15 15.825 15 15v-1.5q0-.65-.425-1.075Q14.15 12 13.5 12q.65 0 1.075-.425Q15 11.15 15 10.5V9q0-.825-.587-1.413Q13.825 7 13 7H9.975q-.425 0-.7.287Q9 7.575 9 8t.288.712Q9.575 9 10 9h3v2h-1.025q-.425 0-.7.287Q11 11.575 11 12t.288.712Q11.575 13 12 13h1v2H9.975q-.425 0-.7.287Q9 15.575 9 16t.288.712Q9.575 17 10 17Zm-5 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialLooks3Filled.displayName = 'AmauiIconMaterialLooks3Filled';

export default IconMaterialLooks3Filled;
