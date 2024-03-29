import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBabyChangingStation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BabyChangingStation'

      short_name='BabyChangingStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.425 0-.712-.288Q3 21.425 3 21v-8.675q0-.175.025-.338.025-.162.075-.312l1.475-4.3q.275-.85 1.1-1.2.825-.35 1.625 0L11.45 8H13q.425 0 .713.287Q14 8.575 14 9t-.287.712Q13.425 10 13 10h-1.575q-.2 0-.4-.05t-.4-.125l-2.325-1L7 12.75V21q0 .425-.287.712Q6.425 22 6 22ZM8 5q-.825 0-1.412-.588Q6 3.825 6 3t.588-1.413Q7.175 1 8 1t1.413.587Q10 2.175 10 3q0 .825-.587 1.412Q8.825 5 8 5Zm2 14q-.425 0-.712-.288Q9 18.425 9 18t.288-.712Q9.575 17 10 17h10q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 19 20 19Zm9.5-3q-.625 0-1.062-.438Q18 15.125 18 14.5t.438-1.062Q18.875 13 19.5 13t1.062.438Q21 13.875 21 14.5t-.438 1.062Q20.125 16 19.5 16ZM13 16q-.825 0-1.412-.588Q11 14.825 11 14v-1h-1q-.425 0-.712-.288Q9 12.425 9 12t.288-.713Q9.575 11 10 11h2q.425 0 .713.287.287.288.287.713v1h2v-1q0-.425.288-.713Q15.575 11 16 11t.712.287Q17 11.575 17 12v2q0 .825-.587 1.412Q15.825 16 15 16Z"/>
    </Icon>
  );
});

IconMaterialBabyChangingStation.displayName = 'AmauiIconMaterialBabyChangingStation';

export default IconMaterialBabyChangingStation;
