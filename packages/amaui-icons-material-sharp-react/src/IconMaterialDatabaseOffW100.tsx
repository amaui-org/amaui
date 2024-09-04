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
      <path d="M451-451Zm98-84Zm-98 84Zm98-84Zm-98 84Zm98-84Zm221 385L150-770l20-20 620 620-20 20Zm-290-22q-137 0-222.5-32.5T172-290v-390q0-16.03 13.5-30.51Q199-725 222-738l150 150q-53-8-97-22t-75-34v177q46 29 119.57 46T480-404q18.96 0 36.97-.5 18.02-.5 36.03-2.5l25 25q-24 3-48.5 4.5T480-376q-86.86 0-160.43-17Q246-410 200-439v159q24 38 98.5 59T480-200q77 0 138-11.5t99-31.5l21 21q-40 23-106 36.5T480-172Zm308-113-28-28v-126q-18 11-40 20.5T672-401l-22-22q32-8 60-19t50-25v-177q-46 29-117 45.5T492-581l-25-25q23 1 66-3t88-13.5q45-9.5 83.5-24T757-681q-18-30-103.5-54.5T480-760q-37 0-75.5 5T331-742l-26-26q38-9 82-14.5t93-5.5q128 0 218 31.72 90 31.73 90 76.28v395Z"/>
    </Icon>
  );
});

IconMaterialDatabaseOffW100.displayName = 'AmauiIconMaterialDatabaseOffW100';

export default IconMaterialDatabaseOffW100;
