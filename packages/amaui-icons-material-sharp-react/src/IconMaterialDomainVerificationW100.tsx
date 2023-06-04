import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainVerificationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationW100'

      short_name='DomainVerification'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 18h16V8H4Zm6.95-2.4L8.3 12.95l.5-.5 2.15 2.15 4.25-4.25.5.5ZM4 18V6Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationW100.displayName = 'AmauiIconMaterialDomainVerificationW100';

export default IconMaterialDomainVerificationW100;
