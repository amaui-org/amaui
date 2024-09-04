import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDatabaseOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatabaseOffFilled'

      short_name='DatabaseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-41 0-102.5-8.5T259-156q-57-19-98-49.5T120-280v-100q0 44 41 74.5t98 49.5q57 19 118.5 27.5T480-220q42 0 103.5-8.5T703-257l70 70q-62 36-150 51.5T480-120Zm351-122-50-50q27-17 43-39t16-49v100q0 11-2 20t-7 18Zm-351-78q-41 0-102.5-8.5T259-356q-57-19-98-49.5T120-480v-100q0 44 41 74.5t98 49.5q57 19 118.5 27.5T480-420q12 0 26.5-.5T537-423l87 87q-41 8-78.5 12t-65.5 4Zm233-40-78-78q77-17 141-51t64-91v100q0 42-36.5 71.5T713-360ZM439-521q-136-7-227.5-52T120-680q0-26 17.5-49.5T187-773l252 252Zm111-2L265-808q45-15 99.5-23.5T480-840q150 0 255 47t105 113q0 58-82.5 102T550-523ZM763-84 84-763q-11-11-11-27.5T84-819q12-12 28.5-12t28.5 12l679 679q12 12 11.5 28T819-84q-12 11-28 11.5T763-84Z"/>
    </Icon>
  );
});

IconMaterialDatabaseOffFilled.displayName = 'AmauiIconMaterialDatabaseOffFilled';

export default IconMaterialDatabaseOffFilled;
