import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMulticooker = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Multicooker'

      short_name='Multicooker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 5V4q0-.825.588-1.413Q9.175 2 10 2h4q.825 0 1.413.587Q16 3.175 16 4v1h3q.825 0 1.413.588Q21 6.175 21 7v12q0 .825-.587 1.413Q19.825 21 19 21H5q-.825 0-1.413-.587Q3 19.825 3 19V7q0-.825.587-1.412Q4.175 5 5 5ZM5 19h14v-9h-2v2q0 .825-.587 1.412Q15.825 14 15 14H9q-.825 0-1.412-.588Q7 12.825 7 12v-2H5v9Zm3-1q-.425 0-.713-.288Q7 17.425 7 17t.287-.712Q7.575 16 8 16t.713.288Q9 16.575 9 17t-.287.712Q8.425 18 8 18Zm4 0q-.425 0-.712-.288Q11 17.425 11 17t.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17t-.287.712Q12.425 18 12 18Zm4 0q-.425 0-.712-.288Q15 17.425 15 17t.288-.712Q15.575 16 16 16t.712.288Q17 16.575 17 17t-.288.712Q16.425 18 16 18Zm-7-6h6v-2H9v2ZM5 8h14V7H5Zm5-3h4V4h-4Z"/>
    </Icon>
  );
});

IconMaterialMulticooker.displayName = 'AmauiIconMaterialMulticooker';

export default IconMaterialMulticooker;
