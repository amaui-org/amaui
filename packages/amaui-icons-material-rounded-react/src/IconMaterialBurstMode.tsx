import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBurstMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BurstMode'

      short_name='BurstMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19q-.425 0-.713-.288Q5 18.425 5 18V6q0-.425.287-.713Q5.575 5 6 5t.713.287Q7 5.575 7 6v12q0 .425-.287.712Q6.425 19 6 19Zm-4 0q-.425 0-.712-.288Q1 18.425 1 18V6q0-.425.288-.713Q1.575 5 2 5t.713.287Q3 5.575 3 6v12q0 .425-.287.712Q2.425 19 2 19Zm9 0q-.825 0-1.412-.587Q9 17.825 9 17V7q0-.825.588-1.412Q10.175 5 11 5h10q.825 0 1.413.588Q23 6.175 23 7v10q0 .825-.587 1.413Q21.825 19 21 19Zm0-2h10V7H11v10Zm2-2h6q.3 0 .45-.275.15-.275-.05-.525l-1.6-2.175q-.15-.2-.4-.2t-.4.2L15.5 14l-1-1.325q-.15-.2-.4-.187-.25.012-.4.212l-1.125 1.5q-.2.25-.037.525Q12.7 15 13 15Zm-2-8v10V7Z"/>
    </Icon>
  );
});

IconMaterialBurstMode.displayName = 'AmauiIconMaterialBurstMode';

export default IconMaterialBurstMode;
