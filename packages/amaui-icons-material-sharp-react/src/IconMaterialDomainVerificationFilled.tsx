import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainVerificationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationFilled'

      short_name='DomainVerification'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16ZM4 8h16V6H4Zm6.95 8.55 5.65-5.65-1.45-1.45-4.2 4.2-2.1-2.1L7.4 13Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationFilled.displayName = 'AmauiIconMaterialDomainVerificationFilled';

export default IconMaterialDomainVerificationFilled;
