import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditW100'

      short_name='Edit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.4 19h.975L16.65 8.725l-.975-.975L5.4 18.025ZM18.15 8.225 16.175 6.25l1.675-1.675 1.975 1.975ZM4.7 19.7v-1.975L15.675 6.75l1.975 1.975L6.675 19.7ZM16.15 8.225l-.475-.475.975.975Z"/>
    </Icon>
  );
});

IconMaterialEditW100.displayName = 'AmauiIconMaterialEditW100';

export default IconMaterialEditW100;
