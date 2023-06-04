import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBungalow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bungalow'

      short_name='Bungalow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21v-6.2l-1.1 1.75-1.7-1.05L12 3l7.8 12.5-1.7 1.05L17 14.8V21Zm2-2h2v-3h2v3h2v-7.4l-3-4.8-3 4.8Zm2-5v-2h2v2Zm-2 5h6-6Z"/>
    </Icon>
  );
});

IconMaterialBungalow.displayName = 'AmauiIconMaterialBungalow';

export default IconMaterialBungalow;
