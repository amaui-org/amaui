import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccount = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccount'

      short_name='SwitchAccount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 11q1.25 0 2.125-.875T17 8q0-1.25-.875-2.125T14 5q-1.25 0-2.125.875T11 8q0 1.25.875 2.125T14 11Zm-6 4.75q1.1-1.275 2.65-2.012Q12.2 13 14 13t3.35.738q1.55.737 2.65 2.012V4H8v11.75ZM8 18q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm-4 4q-.825 0-1.412-.587Q2 20.825 2 20V7q0-.425.288-.713Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 22 17 22ZM14 9q-.425 0-.712-.288Q13 8.425 13 8t.288-.713Q13.575 7 14 7t.713.287Q15 7.575 15 8t-.287.712Q14.425 9 14 9Zm-3.3 7h6.6q-.725-.5-1.562-.75Q14.9 15 14 15t-1.737.25q-.838.25-1.563.75ZM14 9.875Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccount.displayName = 'AmauiIconMaterialSwitchAccount';

export default IconMaterialSwitchAccount;
