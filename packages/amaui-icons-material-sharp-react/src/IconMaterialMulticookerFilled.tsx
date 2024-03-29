import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMulticookerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MulticookerFilled'

      short_name='Multicooker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 8V7q0-.825.587-1.412Q4.175 5 5 5h3V4q0-.825.588-1.413Q9.175 2 10 2h4q.825 0 1.413.587Q16 3.175 16 4v1h3q.825 0 1.413.588Q21 6.175 21 7v1Zm7-3h4V4h-4ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19v-9h4v2q0 .825.588 1.412Q8.175 14 9 14h6q.825 0 1.413-.588Q17 12.825 17 12v-2h4v9q0 .825-.587 1.413Q19.825 21 19 21Zm4-11h6v2H9Zm-1 6q-.425 0-.713.288Q7 16.575 7 17t.287.712Q7.575 18 8 18t.713-.288Q9 17.425 9 17t-.287-.712Q8.425 16 8 16Zm4 0q-.425 0-.712.288Q11 16.575 11 17t.288.712Q11.575 18 12 18t.713-.288Q13 17.425 13 17t-.287-.712Q12.425 16 12 16Zm4 0q-.425 0-.712.288Q15 16.575 15 17t.288.712Q15.575 18 16 18t.712-.288Q17 17.425 17 17t-.288-.712Q16.425 16 16 16Z"/>
    </Icon>
  );
});

IconMaterialMulticookerFilled.displayName = 'AmauiIconMaterialMulticookerFilled';

export default IconMaterialMulticookerFilled;
