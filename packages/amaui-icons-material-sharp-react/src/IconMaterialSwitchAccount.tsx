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
      <path d="M14 11q1.25 0 2.125-.875T17 8q0-1.25-.875-2.125T14 5q-1.25 0-2.125.875T11 8q0 1.25.875 2.125T14 11Zm-6 4.75q1.1-1.275 2.65-2.012Q12.2 13 14 13t3.35.738q1.55.737 2.65 2.012V4H8ZM6 18V2h16v16Zm-4 4V6h2v14h14v2ZM14 9q-.425 0-.712-.288Q13 8.425 13 8t.288-.713Q13.575 7 14 7t.713.287Q15 7.575 15 8t-.287.712Q14.425 9 14 9Zm-3.3 7h6.6q-.725-.5-1.562-.75Q14.9 15 14 15t-1.737.25q-.838.25-1.563.75ZM14 9.875Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccount.displayName = 'AmauiIconMaterialSwitchAccount';

export default IconMaterialSwitchAccount;
