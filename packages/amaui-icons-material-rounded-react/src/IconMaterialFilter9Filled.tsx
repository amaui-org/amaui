import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter9Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9Filled'

      short_name='Filter9'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15h2q.825 0 1.413-.588Q17 13.825 17 13V7q0-.825-.587-1.412Q15.825 5 15 5h-2q-.825 0-1.412.588Q11 6.175 11 7v2q0 .825.588 1.412Q12.175 11 13 11h2v2h-2.025q-.425 0-.7.287Q12 13.575 12 14t.288.712Q12.575 15 13 15Zm2-6h-2V7h2Zm-7 9q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm-4 4q-.825 0-1.412-.587Q2 20.825 2 20V6.975q0-.425.288-.7Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13.025q.425 0 .7.288.275.287.275.712t-.288.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialFilter9Filled.displayName = 'AmauiIconMaterialFilter9Filled';

export default IconMaterialFilter9Filled;
