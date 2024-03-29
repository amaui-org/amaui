import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooksFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksFilled'

      short_name='Looks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 17q0-2.275.863-4.275.862-2 2.362-3.5t3.5-2.363Q9.725 6 12 6q2.275 0 4.275.862 2 .863 3.5 2.363t2.363 3.5Q23 14.725 23 17h-2q0-3.725-2.637-6.363Q15.725 8 12 8q-3.725 0-6.362 2.637Q3 13.275 3 17Zm4 0q0-2.9 2.05-4.95Q9.1 10 12 10q2.9 0 4.95 2.05Q19 14.1 19 17h-2q0-2.075-1.462-3.538Q14.075 12 12 12q-2.075 0-3.537 1.462Q7 14.925 7 17Z"/>
    </Icon>
  );
});

IconMaterialLooksFilled.displayName = 'AmauiIconMaterialLooksFilled';

export default IconMaterialLooksFilled;
