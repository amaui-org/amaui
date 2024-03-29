import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopAccessDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopAccessDisabled'

      short_name='DesktopAccessDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.175 3.175 5 5H4v11h9.2L1.4 4.2q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l18.4 18.4q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L15.2 18H14v2h1q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 22 15 22H9q-.425 0-.712-.288Q8 21.425 8 21t.288-.712Q8.575 20 9 20h1v-2H4q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.925.588-1.375l.587-.45ZM20.7 17.85 18.85 16H20V5H7.85l-2-2H20q.825 0 1.413.587Q22 4.175 22 5v11q0 .65-.362 1.15-.363.5-.938.7Zm-7.35-7.35Zm-4.75.9Z"/>
    </Icon>
  );
});

IconMaterialDesktopAccessDisabled.displayName = 'AmauiIconMaterialDesktopAccessDisabled';

export default IconMaterialDesktopAccessDisabled;
