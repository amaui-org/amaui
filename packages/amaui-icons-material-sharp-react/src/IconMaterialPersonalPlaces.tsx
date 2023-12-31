import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonalPlaces = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalPlaces'

      short_name='PersonalPlaces'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-680h390q14 0 26 6.5t20 17.5l124 176-124 176q-8 11-20 17.5t-26 6.5H320v280h-80Zm80-360h300l80-120-80-120H320v240Zm0 0v-240 240Z"/>
    </Icon>
  );
});

IconMaterialPersonalPlaces.displayName = 'AmauiIconMaterialPersonalPlaces';

export default IconMaterialPersonalPlaces;
