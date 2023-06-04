import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainVerificationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationW100Filled'

      short_name='DomainVerification'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 8h16V6H4Zm6.95 7.6 4.75-4.75-.5-.5-4.25 4.25-2.15-2.15-.5.5Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationW100Filled.displayName = 'AmauiIconMaterialDomainVerificationW100Filled';

export default IconMaterialDomainVerificationW100Filled;
