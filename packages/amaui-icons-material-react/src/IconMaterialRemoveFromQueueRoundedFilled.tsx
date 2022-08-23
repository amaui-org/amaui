import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveFromQueueRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFromQueueRoundedFilled'
      short_name='RemoveFromQueue'

      {...props}
    >
      <path d="M9 12H15Q15.425 12 15.713 11.712Q16 11.425 16 11Q16 10.575 15.713 10.287Q15.425 10 15 10H9Q8.575 10 8.288 10.287Q8 10.575 8 11Q8 11.425 8.288 11.712Q8.575 12 9 12ZM9 21Q8.575 21 8.288 20.712Q8 20.425 8 20V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.825 21.413 18.413Q20.825 19 20 19H16V20Q16 20.425 15.713 20.712Q15.425 21 15 21Z"/>
    </Icon>
  );
});

IconMaterialRemoveFromQueueRoundedFilled.displayName = 'AmauiIconMaterialRemoveFromQueueRoundedFilled';

export default IconMaterialRemoveFromQueueRoundedFilled;
