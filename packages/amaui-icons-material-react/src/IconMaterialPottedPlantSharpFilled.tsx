import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPottedPlantSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlantSharpFilled'
      short_name='PottedPlant'

      {...props}
    >
      <path d="M17 22H7l-1.5-6h13ZM12 8q0-2.5 1.75-4.25T18 2q0 2.25-1.425 3.9T13 7.9V10h8v5H3v-5h8V7.9q-2.15-.35-3.575-2Q6 4.25 6 2q2.5 0 4.25 1.75T12 8Z"/>
    </Icon>
  );
});

IconMaterialPottedPlantSharpFilled.displayName = 'AmauiIconMaterialPottedPlantSharpFilled';

export default IconMaterialPottedPlantSharpFilled;
