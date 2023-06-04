import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNeurologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NeurologyW100Filled'

      short_name='Neurology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M570 894q-26 0-42.5-8.5T494 860V289q17-17 33.5-25t42.5-8q43 0 73.5 30.5T674 360v9q0 4-1 8 51 5 86 42.5t35 90.5q0 23-7.5 44.5T765 593q9 15 14 32t5 35q0 50-31 87t-79 45q-1 43-31 72.5T570 894Zm-180 0q-43 0-73.5-29.5T285 792q-47-9-78-46t-31-86q0-18 4.5-35t13.5-32q-14-17-21-38.5t-7-44.5q0-52 34.5-90t85.5-43q-1-4-1-8v-9q0-44 30.5-74t74.5-30q25 0 42 8t34 25v572q-17 17-33.5 25t-42.5 8Z"/>
    </Icon>
  );
});

IconMaterialNeurologyW100Filled.displayName = 'AmauiIconMaterialNeurologyW100Filled';

export default IconMaterialNeurologyW100Filled;
