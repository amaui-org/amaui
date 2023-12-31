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
      <path d="M292-198v-550h328q7 0 12.5 3.5t9.5 8.5l94 136-94 136q-4 5-9.5 8.5T620-452H320v254h-28Z"/>
    </Icon>
  );
});

IconMaterialPersonalPlacesW100Filled.displayName = 'AmauiIconMaterialPersonalPlacesW100Filled';

export default IconMaterialPersonalPlacesW100Filled;
