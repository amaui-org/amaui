import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPower = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Power'

      short_name='Power'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 19h1v-1.85l3.5-3.5V9H8v4.65l3.5 3.5Zm-2-1-2.925-2.925q-.275-.275-.425-.637-.15-.363-.15-.763V9q0-.825.588-1.413Q7.175 7 8 7h1L8 8V4q0-.425.288-.713Q8.575 3 9 3t.713.287Q10 3.575 10 4v3h4V4q0-.425.288-.713Q14.575 3 15 3t.713.287Q16 3.575 16 4v4l-1-1h1q.825 0 1.413.587Q18 8.175 18 9v4.675q0 .4-.15.763-.15.362-.425.637L14.5 18v2q0 .425-.287.712-.288.288-.713.288h-3q-.425 0-.712-.288Q9.5 20.425 9.5 20Zm2.5-4Z"/>
    </Icon>
  );
});

IconMaterialPower.displayName = 'AmauiIconMaterialPower';

export default IconMaterialPower;
