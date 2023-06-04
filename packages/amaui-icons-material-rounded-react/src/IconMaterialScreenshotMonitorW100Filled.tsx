import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotMonitorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotMonitorW100Filled'

      short_name='ScreenshotMonitor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.1 7.1H8q.15 0 .25-.1t.1-.25q0-.15-.1-.25T8 6.4H6.15q-.325 0-.537.212-.213.213-.213.538V9q0 .15.1.25t.25.1q.15 0 .25-.1T6.1 9Zm11.8 7.8H16q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h1.85q.325 0 .538-.213.212-.212.212-.537V13q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25Zm-7.85 4.8q-.325 0-.537-.213-.213-.212-.213-.537V17.7H4.8q-.625 0-1.063-.438Q3.3 16.825 3.3 16.2V5.8q0-.625.437-1.063Q4.175 4.3 4.8 4.3h14.4q.625 0 1.063.437.437.438.437 1.063v10.4q0 .625-.437 1.062-.438.438-1.063.438h-4.5v1.25q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialScreenshotMonitorW100Filled.displayName = 'AmauiIconMaterialScreenshotMonitorW100Filled';

export default IconMaterialScreenshotMonitorW100Filled;
