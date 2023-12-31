import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalPlacesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalPlacesFilled'

      short_name='PersonalPlaces'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-680h390q14 0 26 6.5t20 17.5l124 176-124 176q-8 11-20 17.5t-26 6.5H320v280h-80Z"/>
    </Icon>
  );
});

IconMaterialPersonalPlacesFilled.displayName = 'AmauiIconMaterialPersonalPlacesFilled';

export default IconMaterialPersonalPlacesFilled;
