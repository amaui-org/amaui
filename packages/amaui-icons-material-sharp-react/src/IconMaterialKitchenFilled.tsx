import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKitchenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenFilled'

      short_name='Kitchen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 9.5V2h16v7.5ZM8 8h2V5H8Zm0 9h2v-5H8Zm-4 5V10.5h16V22Z"/>
    </Icon>
  );
});

IconMaterialKitchenFilled.displayName = 'AmauiIconMaterialKitchenFilled';

export default IconMaterialKitchenFilled;
