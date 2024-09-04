import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMetroW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MetroW100Filled'

      short_name='Metro'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-202v-537q0-20 14.5-34.5t34.77-14.5h21.53q15.2 0 28.2 9t18 23l191 505 189-503q6-16 19.56-25 13.56-9 30.35-9h16.14q21.95 0 37.45 15.51Q788-756.98 788-735v533q0 12.5-8.75 21.25T758-172q-12.5 0-21.25-8.75T728-202v-532L518-191q-3 8-10.3 13.5-7.31 5.5-16.44 5.5h-23.13q-9.13 0-16.63-5.5Q444-183 441-191L232-730v528q0 12.5-8.75 21.25T202-172q-12.5 0-21.25-8.75T172-202Z"/>
    </Icon>
  );
});

IconMaterialMetroW100Filled.displayName = 'AmauiIconMaterialMetroW100Filled';

export default IconMaterialMetroW100Filled;
