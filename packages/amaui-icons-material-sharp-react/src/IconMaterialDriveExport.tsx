import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveExport = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveExport'

      short_name='DriveExport'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m676-140-56-56 123-124H640v-80h240v240h-80v-104L676-140Zm-456 40q-17 0-34.5-10.5T160-135L60-310q-8-14-8-34.5t8-34.5l260-446q8-14 25.5-24.5T380-860h200q17 0 34.5 10.5T640-825l182 312q-23-6-47.5-8t-48.5 2L574-780H386L132-344l94 164h316q11 23 25.5 43t33.5 37H220Zm70-180-29-51 183-319h72l101 176q-17 13-31.5 28.5T560-413l-80-139-110 192h164q-7 19-10.5 39t-3.5 41H290Z"/>
    </Icon>
  );
});

IconMaterialDriveExport.displayName = 'AmauiIconMaterialDriveExport';

export default IconMaterialDriveExport;
