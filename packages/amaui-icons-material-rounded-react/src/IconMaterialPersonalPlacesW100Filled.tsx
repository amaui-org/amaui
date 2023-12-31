import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalPlacesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalPlacesW100Filled'

      short_name='PersonalPlaces'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-212v-506q0-13 8.5-21.5T322-748h280q15 0 28.5 7t21.5 19l60 88q11 16 11 34t-11 34l-60 88q-8 12-21.5 19t-28.5 7H320v240q0 6-4 10t-10 4q-6 0-10-4t-4-10Z"/>
    </Icon>
  );
});

IconMaterialPersonalPlacesW100Filled.displayName = 'AmauiIconMaterialPersonalPlacesW100Filled';

export default IconMaterialPersonalPlacesW100Filled;
