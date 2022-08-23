import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDomainVerificationSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationSharp'
      short_name='DomainVerification'

      {...props}
    >
      <path d="M2 20V4H22V20ZM4 18H20V8H4ZM10.95 16.55 7.4 13 8.85 11.55 10.95 13.65 15.15 9.45 16.6 10.9ZM4 18V6Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationSharp.displayName = 'AmauiIconMaterialDomainVerificationSharp';

export default IconMaterialDomainVerificationSharp;
