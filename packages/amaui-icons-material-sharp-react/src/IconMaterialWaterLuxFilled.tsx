import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterLuxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLuxFilled'

      short_name='WaterLux'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 5V3h3v2Zm3.125 5.325L4.7 8.925 6.825 6.8 8.25 8.2ZM12 8Q9.925 8 8.463 6.537 7 5.075 7 3h10q0 2.075-1.462 3.537Q14.075 8 12 8Zm-1 4V9h2v3Zm6.875-1.675-2.1-2.125 1.4-1.4L19.3 8.9ZM18 5V3h3v2ZM2 21v-2q.95 0 1.413-.5.462-.5 1.937-.5t1.937.5q.463.5 1.363.5.95 0 1.412-.5.463-.5 1.938-.5 1.425 0 1.938.5.512.5 1.412.5.95 0 1.388-.5.437-.5 1.912-.5 1.475 0 1.937.5.463.5 1.413.5v2q-1.425 0-1.938-.5-.512-.5-1.412-.5-.9 0-1.362.5-.463.5-1.938.5-1.425 0-1.937-.5Q12.9 20 12 20q-.95 0-1.412.5-.463.5-1.938.5-1.475 0-1.912-.5Q6.3 20 5.35 20t-1.412.5Q3.475 21 2 21Zm0-4v-2q.95 0 1.413-.5.462-.5 1.937-.5 1.425 0 1.913.5.487.5 1.387.5.95 0 1.412-.5.463-.5 1.938-.5 1.425 0 1.925.5t1.375.5q.95 0 1.412-.5.463-.5 1.938-.5 1.425 0 1.938.5.512.5 1.412.5v2q-1.475 0-1.962-.5-.488-.5-1.388-.5-.9 0-1.362.5-.463.5-1.938.5-1.425 0-1.937-.5Q12.9 16 12 16q-.95 0-1.387.5-.438.5-1.913.5t-1.962-.5Q6.25 16 5.35 16q-.9 0-1.412.5Q3.425 17 2 17Z"/>
    </Icon>
  );
});

IconMaterialWaterLuxFilled.displayName = 'AmauiIconMaterialWaterLuxFilled';

export default IconMaterialWaterLuxFilled;
