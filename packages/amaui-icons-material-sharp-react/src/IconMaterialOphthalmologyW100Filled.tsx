import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOphthalmologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OphthalmologyW100Filled'

      short_name='Ophthalmology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M147 510v-28h81q29-74 92.5-121T464 308l-58-58 20-20 65 68q5 5 6.5 12t-.5 13q-2 6-7 10t-12 4q-85 0-144.5 48.5T253 498l-4 12H147Zm462 66q0-42 20-78.5t52-50.5q-26-39-58-63.5T550 347l8-27q51 15 87.5 44t65.5 79q36 6 61 44t25 89q0 46-22.5 84T711 710q-26 47-65 77.5T556 833l-8-27q42-13 75.5-38t57.5-63q-27-13-49.5-48.5T609 576ZM428 922l-20-20 58-58q-80-6-143.5-53T230 670h-81v-28h102l4 12q21 64 80.5 112.5T480 815q7 0 12 4t7 10q2 6 .5 13t-6.5 12l-65 68Z"/>
    </Icon>
  );
});

IconMaterialOphthalmologyW100Filled.displayName = 'AmauiIconMaterialOphthalmologyW100Filled';

export default IconMaterialOphthalmologyW100Filled;
