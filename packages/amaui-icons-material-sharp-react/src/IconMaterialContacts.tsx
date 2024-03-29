import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContacts = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Contacts'

      short_name='Contacts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 23v-2h16v2ZM4 3V1h16v2Zm8 10q1.25 0 2.125-.875T15 10q0-1.25-.875-2.125T12 7q-1.25 0-2.125.875T9 10q0 1.25.875 2.125T12 13ZM2 20V4h20v16Zm2-2h1.75q1.125-1.4 2.725-2.2 1.6-.8 3.525-.8 1.925 0 3.525.8 1.6.8 2.725 2.2H20V6H4Zm4.7 0h6.6q-.725-.5-1.562-.75Q12.9 17 12 17t-1.737.25q-.838.25-1.563.75Zm3.3-7q-.425 0-.712-.288Q11 10.425 11 10t.288-.713Q11.575 9 12 9t.713.287Q13 9.575 13 10t-.287.712Q12.425 11 12 11Zm0 1Z"/>
    </Icon>
  );
});

IconMaterialContacts.displayName = 'AmauiIconMaterialContacts';

export default IconMaterialContacts;
