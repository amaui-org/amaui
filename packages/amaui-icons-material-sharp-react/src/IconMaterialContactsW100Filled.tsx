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
      <path d="M4.65 20.9v-.7h14.7v.7Zm0-17.1v-.7h14.7v.7ZM12 14.3q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q12.975 9.6 12 9.6q-.975 0-1.662.687-.688.688-.688 1.663 0 .975.688 1.662.687.688 1.662.688Zm-8.7 4.4V5.3h17.4v13.4Zm4.15-.7h9.1q-1.125-.9-2.25-1.3t-2.3-.4q-1.175 0-2.3.4-1.125.4-2.25 1.3Z"/>
    </Icon>
  );
});

IconMaterialContactsW100Filled.displayName = 'AmauiIconMaterialContactsW100Filled';

export default IconMaterialContactsW100Filled;
