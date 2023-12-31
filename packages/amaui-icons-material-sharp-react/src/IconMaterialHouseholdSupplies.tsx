import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseholdSupplies = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseholdSupplies'

      short_name='HouseholdSupplies'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80v-252q0-74 21-142.5T327-611q-38-9-62.5-41T240-724v-42q0-48 41.5-80.5T368-874l392 39v191l-72 8q14 49 37 88t55 56l-40 70q-53-31-82-85.5T612-629l-44 4q8 50 30.5 101t45.5 92q18 32 27 67t9 71v214H240Zm80-676v32q0 18 13 29t31 9l316-30v-48l-316-30q-18-2-31 9t-13 29Zm0 596h280v-134q0-26-6.5-51T574-393q-31-54-54-111.5T488-617l-60 5-26 34q-40 53-61 116.5T320-332v172Zm0 0h280-280Z"/>
    </Icon>
  );
});

IconMaterialHouseholdSupplies.displayName = 'AmauiIconMaterialHouseholdSupplies';

export default IconMaterialHouseholdSupplies;
