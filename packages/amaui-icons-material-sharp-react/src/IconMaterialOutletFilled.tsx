import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutletFilled'

      short_name='Outlet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 12h2V7H8Zm6 0h2V7h-2Zm-4 6h4v-2q0-.825-.587-1.413Q12.825 14 12 14q-.825 0-1.412.587Q10 15.175 10 16Zm2 4q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialOutletFilled.displayName = 'AmauiIconMaterialOutletFilled';

export default IconMaterialOutletFilled;
