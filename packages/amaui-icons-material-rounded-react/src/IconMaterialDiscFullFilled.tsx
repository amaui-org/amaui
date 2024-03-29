import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiscFullFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiscFullFilled'

      short_name='DiscFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.5q1.875 0 3.188-1.312Q16.5 13.875 16.5 12q0-1.875-1.312-3.188Q13.875 7.5 12 7.5q-1.875 0-3.188 1.312Q7.5 10.125 7.5 12q0 1.875 1.312 3.188Q10.125 16.5 12 16.5Zm0-3.5q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11t.713.287Q13 11.575 13 12t-.287.712Q12.425 13 12 13Zm0 9q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2q3 0 5.475 1.625Q19.95 5.25 21.15 8H20q-.825 0-1.413.587Q18 9.175 18 10v10q-1.325.95-2.85 1.475Q13.625 22 12 22Zm9-4q-.425 0-.712-.288Q20 17.425 20 17v-6q0-.425.288-.713Q20.575 10 21 10t.712.287Q22 10.575 22 11v6q0 .425-.288.712Q21.425 18 21 18Zm0 4q-.425 0-.712-.288Q20 21.425 20 21t.288-.712Q20.575 20 21 20t.712.288Q22 20.575 22 21t-.288.712Q21.425 22 21 22Z"/>
    </Icon>
  );
});

IconMaterialDiscFullFilled.displayName = 'AmauiIconMaterialDiscFullFilled';

export default IconMaterialDiscFullFilled;
