import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestaurant = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Restaurant'

      short_name='Restaurant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z"/>
    </Icon>
  );
});

IconMaterialRestaurant.displayName = 'AmauiIconMaterialRestaurant';

export default IconMaterialRestaurant;
