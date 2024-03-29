import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStairs = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stairs'

      short_name='Stairs'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 18h3.425v-3.325H13V11.35h2.575V8H17q.425 0 .712-.287Q18 7.425 18 7t-.288-.713Q17.425 6 17 6h-3.425v3.325H11v3.325H8.425V16H7q-.425 0-.713.288Q6 16.575 6 17t.287.712Q6.575 18 7 18Zm-2 3q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialStairs.displayName = 'AmauiIconMaterialStairs';

export default IconMaterialStairs;
