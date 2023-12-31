import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatW100Filled'

      short_name='Heat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M338-216q-5 4-10.5 4t-9.5-4q-33-34-49.5-68T252-353q0-27 9.5-57.5T294-492q21-45 29.5-71.5T332-613q0-30-15-57t-47-55q-5-4-5-9.5t5-9.5q5-4 10-4t10 4q36 32 53 64t17 67q0 25-8.5 53.5T320-483q-23 48-31.5 76t-8.5 52q0 32 14 61.5t44 59.5q4 4 4 9t-4 9Zm174 0q-5 4-10 4.5t-10-4.5q-33-34-49.5-68T426-353q0-27 9.5-57.5T468-492q21-45 29.5-71t8.5-49q0-30-15-57.5T444-725q-5-4-5-9.5t5-9.5q4-4 9.5-4t10.5 4q36 32 53 64t17 67q0 26-8.5 54T494-483q-23 49-31.5 77t-8.5 52q0 32 14.5 61t44.5 59q4 4 3.5 9t-4.5 9Zm174 0q-5 4-10 4.5t-10-4.5q-33-34-49.5-68T600-353q0-27 9.5-57.5T642-492q21-45 29.5-71t8.5-49q0-30-15-57.5T618-725q-5-4-5-9.5t5-9.5q4-4 9.5-4t10.5 4q36 32 53 64t17 67q0 25-8.5 53.5T668-483q-23 48-31.5 75.5T628-355q0 32 14.5 61t44.5 60q4 4 3.5 9t-4.5 9Z"/>
    </Icon>
  );
});

IconMaterialHeatW100Filled.displayName = 'AmauiIconMaterialHeatW100Filled';

export default IconMaterialHeatW100Filled;
