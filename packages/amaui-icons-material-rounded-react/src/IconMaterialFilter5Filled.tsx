import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter5Filled'

      short_name='Filter5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15h3q.825 0 1.413-.588Q17 13.825 17 13v-2q0-.825-.587-1.413Q15.825 9 15 9h-2V7h3.025q.425 0 .7-.287Q17 6.425 17 6t-.288-.713Q16.425 5 16 5h-4q-.425 0-.712.287Q11 5.575 11 6v4q0 .425.288.712.287.288.712.288h3v2h-3.025q-.425 0-.7.287Q11 13.575 11 14t.288.712Q11.575 15 12 15Zm-4 3q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm-4 4q-.825 0-1.412-.587Q2 20.825 2 20V6.975q0-.425.288-.7Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13.025q.425 0 .7.288.275.287.275.712t-.288.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialFilter5Filled.displayName = 'AmauiIconMaterialFilter5Filled';

export default IconMaterialFilter5Filled;
