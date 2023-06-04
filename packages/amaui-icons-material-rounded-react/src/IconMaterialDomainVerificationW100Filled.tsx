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
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425ZM4 8h16V6.8q0-.35-.225-.575Q19.55 6 19.2 6H4.8q-.35 0-.575.225Q4 6.45 4 6.8Zm6.95 6.6-1.9-1.9q-.1-.125-.238-.125-.137 0-.262.125t-.112.25q.012.125.112.25l1.875 1.875q.225.225.525.225.3 0 .525-.225L15.45 11.1q.125-.125.125-.263 0-.137-.125-.237-.125-.125-.25-.125t-.25.125Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationW100Filled.displayName = 'AmauiIconMaterialDomainVerificationW100Filled';

export default IconMaterialDomainVerificationW100Filled;
