import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFarsightDigitalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FarsightDigitalFilled'

      short_name='FarsightDigital'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M413-504h28v-172h-20l-50 36 14 22 28-20v134Zm65 0h112l-1-25h-75v-1l44-44q16-16 22.5-29t6.5-28q0-20-16-34.5T532-680q-20 0-35 11t-20 28l25 10q3-11 11-17t18-6q12 0 20 6.5t8 16.5q0 11-5 21t-14 19l-62 61v26Zm-70 224q26 0 43-14.5t17-37.5q0-14-8-25.5T439-374v-2q11-5 17-15.5t6-22.5q0-20-15.5-33T407-460q-17 0-32.5 10T354-424l25 10q4-11 10.5-16t16.5-5q12 0 19.5 6t7.5 17q0 11-8.5 18t-20.5 7h-13v25h15q14 0 23.5 8t9.5 20q0 11-9 19t-22 8q-11 0-20.5-8T375-335l-25 11q6 20 22 32t36 12Zm142 0q24 0 42-17.5t18-40.5q0-23-15.5-39.5T558-394q-5 0-18 4h-1l39-55-22-15-43 64q-14 20-18.5 32t-4.5 25q0 25 17 42t43 17Zm0-26q-14 0-23-9t-9-23q0-8 4-15.5t12-12.5q3-2 16-4 13 0 22.5 9.5T582-337q0 13-9 22t-23 9ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialFarsightDigitalFilled.displayName = 'AmauiIconMaterialFarsightDigitalFilled';

export default IconMaterialFarsightDigitalFilled;
