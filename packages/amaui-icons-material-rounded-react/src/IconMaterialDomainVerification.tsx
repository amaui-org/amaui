import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainVerification = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerification'

      short_name='DomainVerification'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16V8H4v10Zm6.95-4.35 3.475-3.475q.3-.3.725-.3t.725.3q.3.3.3.725t-.3.725L11.65 15.85q-.3.3-.7.3-.4 0-.7-.3l-2.125-2.125q-.3-.3-.3-.725t.3-.725q.3-.3.725-.3t.725.3ZM4 18V6v12Z"/>
    </Icon>
  );
});

IconMaterialDomainVerification.displayName = 'AmauiIconMaterialDomainVerification';

export default IconMaterialDomainVerification;
