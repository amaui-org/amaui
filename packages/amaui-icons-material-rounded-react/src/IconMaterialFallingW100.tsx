import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFallingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FallingW100'

      short_name='Falling'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m521-259-132-99q-8-7-14.5-15.5T366-393l-54-239-133 114 27 127q2 6-1.5 11t-9.5 7q-6 2-11-2t-7-10l-22-108q-3-16 2-30.5t17-25.5l142-126q17-16 40.5-11t46.5 14q36 15 74 21.5t76 1.5q27-4 51-16.5t46-29.5q5-4 11.5-4t10.5 5q4 5 2.5 11t-6.5 10q-20 15-41 27t-45 19q-40 11-80.5 6.5T421-635l43 189 137-26q12-2 24 .5t22 9.5l145 103q5 4 5.5 9.5T794-339q-4 5-9 6t-10-2L631-436l-213 43 107 78q14 11 20.5 26.5T549-256l-27 151q-1 6-6.5 9.5T504-94q-6-2-9-6.5t-2-10.5l28-148ZM320-748q-26 0-45-19t-19-45q0-26 19-45t45-19q26 0 45 19t19 45q0 26-19 45t-45 19Z"/>
    </Icon>
  );
});

IconMaterialFallingW100.displayName = 'AmauiIconMaterialFallingW100';

export default IconMaterialFallingW100;
