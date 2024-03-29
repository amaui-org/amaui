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
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18v-4q.825 0 1.413-.588Q4 12.825 4 12t-.587-1.413Q2.825 10 2 10V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v4q-.825 0-1.413.587Q20 11.175 20 12q0 .825.587 1.412Q21.175 14 22 14v4q0 .825-.587 1.413Q20.825 20 20 20Zm8-3q.425 0 .713-.288Q13 16.425 13 16t-.287-.713Q12.425 15 12 15t-.712.287Q11 15.575 11 16t.288.712Q11.575 17 12 17Zm0-4q.425 0 .713-.288Q13 12.425 13 12t-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13Zm0-4q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialConfirmationNumberFilled.displayName = 'AmauiIconMaterialConfirmationNumberFilled';

export default IconMaterialConfirmationNumberFilled;
