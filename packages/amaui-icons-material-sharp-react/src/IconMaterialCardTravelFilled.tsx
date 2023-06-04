import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardTravelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelFilled'

      short_name='CardTravel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V6h5V2h10v4h5v15ZM9 6h6V4H9ZM4 17h16v-3H4Z"/>
    </Icon>
  );
});

IconMaterialCardTravelFilled.displayName = 'AmauiIconMaterialCardTravelFilled';

export default IconMaterialCardTravelFilled;
