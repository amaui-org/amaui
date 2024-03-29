import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flip'

      short_name='Flip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h3q.425 0 .713.287Q9 3.575 9 4t-.287.712Q8.425 5 8 5H5v14h3q.425 0 .713.288Q9 19.575 9 20t-.287.712Q8.425 21 8 21Zm7 2q-.425 0-.712-.288Q11 22.425 11 22V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v20q0 .425-.287.712Q12.425 23 12 23Zm7-18V3q.825 0 1.413.587Q21 4.175 21 5h-2Zm0 8v-2h2v2Zm0 8v-2h2q0 .825-.587 1.413Q19.825 21 19 21Zm0-12V7h2v2Zm0 8v-2h2v2Zm-4 4v-2h2v2Zm0-16V3h2v2Z"/>
    </Icon>
  );
});

IconMaterialFlip.displayName = 'AmauiIconMaterialFlip';

export default IconMaterialFlip;
