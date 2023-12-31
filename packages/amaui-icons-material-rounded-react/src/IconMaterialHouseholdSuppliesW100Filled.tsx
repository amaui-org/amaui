import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseholdSuppliesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseholdSuppliesW100Filled'

      short_name='HouseholdSupplies'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M324-172q-12 0-20-8t-8-20v-172q0-74 26-147t83-144l-39 4q-28 3-51-15.5T292-721v-39q0-28 23-46t51-16l318 30q11 1 17.5 9t6.5 19v46q0 11-7.5 19.5T682-689l-30 3q11 38 26.5 68.5T715-566q5 5 6 11t-2 11q-3 5-8 6t-10-3q-28-24-47-62.5T624-684l-112 11q4 56 28.5 111.5T602-446q16 26 23 54.5t7 57.5v134q0 12-8 20t-20 8H324Zm-4-584v31q0 18 13 29t31 9l316-30v-47l-316-30q-18-2-31 9t-13 29Z"/>
    </Icon>
  );
});

IconMaterialHouseholdSuppliesW100Filled.displayName = 'AmauiIconMaterialHouseholdSuppliesW100Filled';

export default IconMaterialHouseholdSuppliesW100Filled;
