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
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h14.4q.35 0 .575-.225Q20 17.55 20 17.2V8H4v9.2q0 .35.225.575Q4.45 18 4.8 18Zm6.15-3.4 4-4q.1-.1.238-.112.137-.013.262.112t.125.25q0 .125-.125.25l-3.975 3.975q-.225.225-.525.225-.3 0-.525-.225L8.55 13.2q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125ZM4.8 18H4V6h.8q-.35 0-.575.225Q4 6.45 4 6.8v10.4q0 .35.225.575Q4.45 18 4.8 18Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationW100.displayName = 'AmauiIconMaterialDomainVerificationW100';

export default IconMaterialDomainVerificationW100;
