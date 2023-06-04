import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenSearchDesktopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenSearchDesktopW100Filled'

      short_name='ScreenSearchDesktop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.75 15.05.5-.5L13.7 12q.275-.425.388-.775.112-.35.112-.875 0-1.125-.787-1.912-.788-.788-1.913-.788t-1.912.788Q8.8 9.225 8.8 10.35t.788 1.912q.787.788 1.912.788.525 0 .887-.138.363-.137.813-.412Zm-4.25-2.7q-.825 0-1.412-.588-.588-.587-.588-1.412t.588-1.412q.587-.588 1.412-.588t1.413.588q.587.587.587 1.412t-.587 1.412q-.588.588-1.413.588ZM3.3 17.3V4.9h17.4v12.4ZM2 19v-.7h20v.7Z"/>
    </Icon>
  );
});

IconMaterialScreenSearchDesktopW100Filled.displayName = 'AmauiIconMaterialScreenSearchDesktopW100Filled';

export default IconMaterialScreenSearchDesktopW100Filled;
