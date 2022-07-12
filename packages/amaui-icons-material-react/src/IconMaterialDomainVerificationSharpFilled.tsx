import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDomainVerificationSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationSharpFilled'
      short_name='DomainVerification'

      {...props}
    >
      <path d="M2 20V4H22V20ZM4 8H20V6H4ZM10.95 16.55 16.6 10.9 15.15 9.45 10.95 13.65 8.85 11.55 7.4 13Z"/>
    </Icon>
  )
});

export default IconMaterialDomainVerificationSharpFilled;
