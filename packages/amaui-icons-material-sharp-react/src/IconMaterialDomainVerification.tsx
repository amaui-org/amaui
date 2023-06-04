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
      <path d="M2 20V4h20v16Zm2-2h16V8H4Zm6.95-1.45L7.4 13l1.45-1.45 2.1 2.1 4.2-4.2 1.45 1.45ZM4 18V6Z"/>
    </Icon>
  );
});

IconMaterialDomainVerification.displayName = 'AmauiIconMaterialDomainVerification';

export default IconMaterialDomainVerification;
