import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitnessTrackerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitnessTrackerW100Filled'

      short_name='FitnessTracker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M427-132q-10 0-18-6t-11-16l-31-104q-16-7-25.5-21.5T332-313v-334q0-19 10-33.5t26-21.5l30-104q3-10 11-16t18-6h106q10 0 18 6t11 16l29 103q17 7 27 21.5t10 34.5v334q0 20-10 34.5T591-257l-29 103q-3 10-11 16t-18 6H427Zm-37-149h180q13 0 21.5-8.5T600-311v-338q0-13-8.5-21.5T570-679H390q-13 0-21.5 8.5T360-649v338q0 13 8.5 21.5T390-281Z"/>
    </Icon>
  );
});

IconMaterialFitnessTrackerW100Filled.displayName = 'AmauiIconMaterialFitnessTrackerW100Filled';

export default IconMaterialFitnessTrackerW100Filled;
