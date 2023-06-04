import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsW100'

      short_name='Contacts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 20.9v-.7h14.7v.7Zm0-17.1v-.7h14.7v.7ZM12 14.3q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q12.975 9.6 12 9.6q-.975 0-1.662.687-.688.688-.688 1.663 0 .975.688 1.662.687.688 1.662.688Zm-8.7 4.4V5.3h17.4v13.4ZM4 18h3.45q1.125-.9 2.25-1.3t2.3-.4q1.175 0 2.3.4 1.125.4 2.25 1.3H20V6H4Zm4.7 0h6.6q-.725-.5-1.562-.75Q12.9 17 12 17t-1.737.25q-.838.25-1.563.75Zm3.3-4.4q-.675 0-1.162-.487-.488-.488-.488-1.163t.488-1.163Q11.325 10.3 12 10.3q.675 0 1.163.487.487.488.487 1.163t-.487 1.163q-.488.487-1.163.487Zm0-1.6Z"/>
    </Icon>
  );
});

IconMaterialContactsW100.displayName = 'AmauiIconMaterialContactsW100';

export default IconMaterialContactsW100;
