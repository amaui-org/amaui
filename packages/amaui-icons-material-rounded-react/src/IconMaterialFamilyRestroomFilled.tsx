import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamilyRestroomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyRestroomFilled'

      short_name='FamilyRestroom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 6q-.825 0-1.413-.588Q16 4.825 16 4t.587-1.413Q17.175 2 18 2q.825 0 1.413.587Q20 3.175 20 4q0 .825-.587 1.412Q18.825 6 18 6Zm-1 16v-8q0-1-.512-1.8-.513-.8-1.313-1.25l.875-2.575q.2-.625.738-1Q17.325 7 18 7q.675 0 1.212.375.538.375.738 1l2.1 6.3q.175.5-.137.912Q21.6 16 21.1 16H20v5q0 .425-.288.712Q19.425 22 19 22Zm-4.5-10.5q-.625 0-1.062-.438Q11 10.625 11 10t.438-1.062Q11.875 8.5 12.5 8.5t1.062.438Q14 9.375 14 10t-.438 1.062q-.437.438-1.062.438ZM5.5 6q-.825 0-1.412-.588Q3.5 4.825 3.5 4t.588-1.413Q4.675 2 5.5 2t1.412.587Q7.5 3.175 7.5 4q0 .825-.588 1.412Q6.325 6 5.5 6Zm-1 16q-.425 0-.712-.288Q3.5 21.425 3.5 21v-6H3q-.425 0-.712-.288Q2 14.425 2 14V9q0-.825.588-1.413Q3.175 7 4 7h3q.825 0 1.412.587Q9 8.175 9 9v5q0 .425-.287.712Q8.425 15 8 15h-.5v6q0 .425-.287.712Q6.925 22 6.5 22Zm7.5 0q-.425 0-.712-.288Q11 21.425 11 21v-3q-.425 0-.712-.288Q10 17.425 10 17v-3q0-.625.438-1.062.437-.438 1.062-.438h2q.625 0 1.062.438Q15 13.375 15 14v3q0 .425-.287.712Q14.425 18 14 18v3q0 .425-.287.712Q13.425 22 13 22Z"/>
    </Icon>
  );
});

IconMaterialFamilyRestroomFilled.displayName = 'AmauiIconMaterialFamilyRestroomFilled';

export default IconMaterialFamilyRestroomFilled;
