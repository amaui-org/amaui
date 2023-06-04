import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConfirmationNumberFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConfirmationNumberFilled'

      short_name='ConfirmationNumber'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20v-6q.825 0 1.413-.588Q4 12.825 4 12t-.587-1.413Q2.825 10 2 10V4h20v6q-.825 0-1.413.587Q20 11.175 20 12q0 .825.587 1.412Q21.175 14 22 14v6Zm9-3h2v-2h-2Zm0-4h2v-2h-2Zm0-4h2V7h-2Z"/>
    </Icon>
  );
});

IconMaterialConfirmationNumberFilled.displayName = 'AmauiIconMaterialConfirmationNumberFilled';

export default IconMaterialConfirmationNumberFilled;
