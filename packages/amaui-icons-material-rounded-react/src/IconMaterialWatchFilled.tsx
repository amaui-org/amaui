import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchFilled'

      short_name='Watch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 22q-.675 0-1.2-.387-.525-.388-.725-1.038L7.65 17.45q-1.2-.95-1.925-2.375Q5 13.65 5 12q0-1.65.725-3.075Q6.45 7.5 7.65 6.55l.925-3.125q.2-.65.725-1.038Q9.825 2 10.5 2h3q.675 0 1.2.387.525.388.725 1.038l.925 3.125q1.2.95 1.925 2.375Q19 10.35 19 12q0 1.65-.725 3.075-.725 1.425-1.925 2.375l-.925 3.125q-.2.65-.725 1.038-.525.387-1.2.387Zm1.5-5q2.075 0 3.538-1.463Q17 14.075 17 12t-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12q0 2.075 1.463 3.537Q9.925 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialWatchFilled.displayName = 'AmauiIconMaterialWatchFilled';

export default IconMaterialWatchFilled;
