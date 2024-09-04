import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDatabaseOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DatabaseOffW100'

      short_name='DatabaseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M451-451Zm98-84Zm-98 84Zm98-84Zm-98 84Zm98-84Zm211 375L160-760q-4-4-4.5-9.5t4.28-10.5q5.22-5 10.22-5 5 0 10 5l600 600q4 4 4.5 9.5t-4.5 10.72q-5 4.78-10 4.78t-10-5Zm-280-12q-137 0-222.5-32.5T172-290v-390q0-16.03 13.5-30.51Q199-725 222-738l150 150q-53-8-97-22t-75-34v177q46 29 119.57 46T480-404q18.96 0 36.97-.5 18.02-.5 36.03-2.5l25 25q-24 3-48.5 4.5T480-376q-86.86 0-160.43-17Q246-410 200-439v159q24 38 98.5 59T480-200q77 0 138-11.5t99-31.5l21 21q-40 23-106 36.5T480-172Zm308-508v367q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-126q-18 11-40 20.5T672-401q-5 2-10-1t-7-8q-2-5 1-10t8-7q28-8 52-18t44-22v-177q-46 29-117 45.5T492-581q-5 0-9-4t-4-9q0-5 4-9t9-4q29-1 69.5-6t80-14q39.5-9 71.5-22.5t44-31.5q-18-30-103.5-54.5T480-760q-37 0-75.5 5T331-742q-6 2-11.5-2t-7.5-10q-2-6 2-11.5t10-7.5q35-8 74-11.5t82-3.5q128 0 218 31.72 90 31.73 90 76.28Z"/>
    </Icon>
  );
});

IconMaterialDatabaseOffW100.displayName = 'AmauiIconMaterialDatabaseOffW100';

export default IconMaterialDatabaseOffW100;
