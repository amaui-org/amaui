import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsW100Filled'

      short_name='Contacts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM5 3.8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T5 3.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7 10.5q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q12.975 9.6 12 9.6q-.975 0-1.662.687-.688.688-.688 1.663 0 .975.688 1.662.687.688 1.662.688Zm-7.2 4.4q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm2.65-.7h9.1q-1.125-.9-2.25-1.3t-2.3-.4q-1.175 0-2.3.4-1.125.4-2.25 1.3Z"/>
    </Icon>
  );
});

IconMaterialContactsW100Filled.displayName = 'AmauiIconMaterialContactsW100Filled';

export default IconMaterialContactsW100Filled;
