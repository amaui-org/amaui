import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatW100'

      short_name='Heat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-355q0 32 16.5 63t51.5 67l-20 19q-40-40-58-75t-18-72q0-27 9.5-57.5T294-492q21-45 29.5-71.5T332-613q0-32-16.5-59.5T260-734l20-19q42 37 61 70t19 69q0 25-8.5 53.5T320-484q-23 48-31.5 76t-8.5 53Zm174 0q0 32 16.5 63t51.5 67l-20 19q-40-40-58-75t-18-72q0-27 9.5-57.5T468-492q21-45 29.5-71t8.5-49q0-32-16.5-60T434-734l20-19q42 37 61 70.5t19 69.5q0 25-8.5 53.5T494-483q-23 48-31.5 75.5T454-355Zm174 0q0 32 16.5 63t51.5 67l-20 19q-40-40-58-75t-18-72q0-27 9.5-57.5T642-492q21-45 29.5-71t8.5-49q0-32-16.5-60T608-734l20-19q42 37 61 70.5t19 69.5q0 25-8.5 53.5T668-483q-23 48-31.5 75.5T628-355Z"/>
    </Icon>
  );
});

IconMaterialHeatW100.displayName = 'AmauiIconMaterialHeatW100';

export default IconMaterialHeatW100;
