import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenSearchDesktopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenSearchDesktopW100'

      short_name='ScreenSearchDesktop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 14.8q.1.1.238.112.137.013.262-.112t.125-.25q0-.125-.125-.25L13.7 12q.275-.425.388-.775.112-.35.112-.875 0-1.125-.787-1.912-.788-.788-1.913-.788t-1.912.788Q8.8 9.225 8.8 10.35t.788 1.912q.787.788 1.912.788.525 0 .887-.138.363-.137.813-.412Zm-4-2.45q-.825 0-1.412-.588-.588-.587-.588-1.412t.588-1.412q.587-.588 1.412-.588t1.413.588q.587.587.587 1.412t-.587 1.412q-.588.588-1.413.588ZM4.8 17.3q-.625 0-1.063-.437Q3.3 16.425 3.3 15.8V6.4q0-.625.437-1.063Q4.175 4.9 4.8 4.9h14.4q.625 0 1.063.437.437.438.437 1.063v9.4q0 .625-.437 1.063-.438.437-1.063.437Zm0-.7h14.4q.35 0 .575-.225Q20 16.15 20 15.8V6.4q0-.35-.225-.575Q19.55 5.6 19.2 5.6H4.8q-.35 0-.575.225Q4 6.05 4 6.4v9.4q0 .35.225.575.225.225.575.225ZM2.35 19q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h19.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM4 5.6v11-11Z"/>
    </Icon>
  );
});

IconMaterialScreenSearchDesktopW100.displayName = 'AmauiIconMaterialScreenSearchDesktopW100';

export default IconMaterialScreenSearchDesktopW100;
