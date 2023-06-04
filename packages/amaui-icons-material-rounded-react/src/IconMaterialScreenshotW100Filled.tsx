import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotW100Filled'

      short_name='Screenshot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.85 10.05q-.15 0-.25-.1t-.1-.25V7.425q0-.25.163-.413.162-.162.412-.162h2.275q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H9.2V9.7q0 .15-.1.25t-.25.1Zm3.8 7.1q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.15V14.3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.275q0 .25-.162.412-.163.163-.413.163ZM7.8 21.7q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v16.4q0 .625-.438 1.062-.437.438-1.062.438ZM7 18.65h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialScreenshotW100Filled.displayName = 'AmauiIconMaterialScreenshotW100Filled';

export default IconMaterialScreenshotW100Filled;
