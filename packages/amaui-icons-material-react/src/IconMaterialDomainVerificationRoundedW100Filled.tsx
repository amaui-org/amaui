import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDomainVerificationRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationRoundedW100Filled'
      short_name='DomainVerification'

      {...props}
    >
      <path d="M4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM4 8H20V6.8Q20 6.45 19.775 6.225Q19.55 6 19.2 6H4.8Q4.45 6 4.225 6.225Q4 6.45 4 6.8ZM10.95 14.6 9.05 12.7Q8.95 12.575 8.812 12.575Q8.675 12.575 8.55 12.7Q8.425 12.825 8.438 12.95Q8.45 13.075 8.55 13.2L10.425 15.075Q10.65 15.3 10.95 15.3Q11.25 15.3 11.475 15.075L15.45 11.1Q15.575 10.975 15.575 10.837Q15.575 10.7 15.45 10.6Q15.325 10.475 15.2 10.475Q15.075 10.475 14.95 10.6Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationRoundedW100Filled.displayName = 'AmauiIconMaterialDomainVerificationRoundedW100Filled';

export default IconMaterialDomainVerificationRoundedW100Filled;
