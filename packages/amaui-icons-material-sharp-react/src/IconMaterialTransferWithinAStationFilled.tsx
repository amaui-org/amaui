import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransferWithinAStationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransferWithinAStationFilled'

      short_name='TransferWithinAStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 5.5q-.825 0-1.412-.588Q7.5 4.325 7.5 3.5t.588-1.413Q8.675 1.5 9.5 1.5t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588ZM3 23 5.8 8.9 4 9.6V13H2V8.3l5.05-2.15q.725-.3 1.475-.063.75.238 1.175.913l1 1.6q.675 1.075 1.788 1.737Q13.6 11 15 11v2q-1.65 0-3.087-.688-1.438-.687-2.413-1.812l-.6 3 2.1 2V23H9v-6l-2.1-2-1.8 8Zm13.5-4.25-2.5-2.5 2.5-2.5 1.05 1.05-.7.7H22V17h-5.15l.7.7Zm3 4.25-1.05-1.05.7-.7H14v-1.5h5.15l-.7-.7L19.5 18l2.5 2.5Z"/>
    </Icon>
  );
});

IconMaterialTransferWithinAStationFilled.displayName = 'AmauiIconMaterialTransferWithinAStationFilled';

export default IconMaterialTransferWithinAStationFilled;
