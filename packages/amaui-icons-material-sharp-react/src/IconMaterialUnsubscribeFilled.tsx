import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnsubscribeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnsubscribeFilled'

      short_name='Unsubscribe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 23q-2.075 0-3.537-1.462Q14 20.075 14 18q0-2.075 1.463-3.538Q16.925 13 19 13t3.538 1.462Q24 15.925 24 18q0 2.075-1.462 3.538Q21.075 23 19 23Zm-3-4.5h6v-1h-6ZM12 13l8-5V6l-8 5-8-5v2ZM2 20V4h20v7.7q-.7-.35-1.462-.525Q19.775 11 19 11q-1.45 0-2.725.55-1.275.55-2.225 1.5-.95.95-1.5 2.225Q12 16.55 12 18q0 .525.075 1.012.075.488.225.988Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribeFilled.displayName = 'AmauiIconMaterialUnsubscribeFilled';

export default IconMaterialUnsubscribeFilled;
