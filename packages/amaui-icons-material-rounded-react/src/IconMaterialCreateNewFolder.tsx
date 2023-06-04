import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreateNewFolder = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolder'

      short_name='CreateNewFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 16q.425 0 .713-.288Q16 15.425 16 15v-1h1q.425 0 .712-.288Q18 13.425 18 13t-.288-.713Q17.425 12 17 12h-1v-1q0-.425-.287-.713Q15.425 10 15 10t-.712.287Q14 10.575 14 11v1h-1q-.425 0-.712.287Q12 12.575 12 13t.288.712Q12.575 14 13 14h1v1q0 .425.288.712.287.288.712.288ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolder.displayName = 'AmauiIconMaterialCreateNewFolder';

export default IconMaterialCreateNewFolder;
