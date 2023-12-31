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
      <path d="M296-172v-200q0-74 26-147t83-144l-39 4q-28 3-51-15.5T292-721v-39q0-28 23-46t51-16l342 32v98l-56 6q12 42 30 76t44 54l-14 24q-32-23-54-64t-34-88l-112 11q4 56 28.5 111.5T602-446q16 26 23 54.5t7 57.5v162H296Zm24-584v31q0 18 13 29t31 9l316-30v-47l-316-30q-18-2-31 9t-13 29Z"/>
    </Icon>
  );
});

IconMaterialHouseholdSuppliesW100Filled.displayName = 'AmauiIconMaterialHouseholdSuppliesW100Filled';

export default IconMaterialHouseholdSuppliesW100Filled;
