import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotTabletW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotTabletW100Filled'

      short_name='ScreenshotTablet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-212q-24.75 0-42.375-17.625T92-272v-416q0-24.75 17.625-42.375T152-748h656q24.75 0 42.375 17.625T868-688v416q0 24.75-17.625 42.375T808-212H152Zm62-28h532v-480H214v480Zm444-88h-76q-6.067 0-10.033 3.953-3.967 3.954-3.967 10Q568-308 571.967-304q3.966 4 10.033 4h82q9 0 15.5-7t6.5-16v-81q0-6.067-3.953-10.033-3.954-3.967-10-3.967Q666-418 662-414.033q-4 3.966-4 10.033v76ZM302-632h76q6.067 0 10.033-3.953 3.967-3.954 3.967-10Q392-652 388.033-656q-3.966-4-10.033-4h-81q-9 0-16 6.5t-7 15.5v82q0 6.067 3.953 10.033 3.954 3.967 10 3.967Q294-542 298-545.967q4-3.966 4-10.033v-76Z"/>
    </Icon>
  );
});

IconMaterialScreenshotTabletW100Filled.displayName = 'AmauiIconMaterialScreenshotTabletW100Filled';

export default IconMaterialScreenshotTabletW100Filled;
