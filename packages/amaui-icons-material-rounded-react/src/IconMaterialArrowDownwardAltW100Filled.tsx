import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDownwardAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardAltW100Filled'

      short_name='ArrowDownwardAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-330v-390q0-6 4-10t10-4q6 0 10 4t4 10v390l160-160q4-4 9.5-4.5T674-490q5 5 5 10t-5 10L501-297q-9 9-21 9t-21-9L286-470q-4-4-4.5-9.5T286-490q5-5 10-5t10 5l160 160Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardAltW100Filled.displayName = 'AmauiIconMaterialArrowDownwardAltW100Filled';

export default IconMaterialArrowDownwardAltW100Filled;
