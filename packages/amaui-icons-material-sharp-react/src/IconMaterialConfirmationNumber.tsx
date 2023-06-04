import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConfirmationNumber = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConfirmationNumber'

      short_name='ConfirmationNumber'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20v-6q.825 0 1.413-.588Q4 12.825 4 12t-.587-1.413Q2.825 10 2 10V4h20v6q-.825 0-1.413.587Q20 11.175 20 12q0 .825.587 1.412Q21.175 14 22 14v6Zm2-2h16v-2.55q-.925-.55-1.462-1.462Q18 13.075 18 12t.538-1.988Q19.075 9.1 20 8.55V6H4v2.55q.925.55 1.463 1.462Q6 10.925 6 12t-.537 1.988Q4.925 14.9 4 15.45Zm7-1h2v-2h-2Zm0-4h2v-2h-2Zm0-4h2V7h-2Zm1 3Z"/>
    </Icon>
  );
});

IconMaterialConfirmationNumber.displayName = 'AmauiIconMaterialConfirmationNumber';

export default IconMaterialConfirmationNumber;
