import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDomainVerificationRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationRoundedFilled'
      short_name='DomainVerification'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 8H20V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6ZM10.95 13.65 9.575 12.275Q9.275 11.975 8.85 11.975Q8.425 11.975 8.125 12.275Q7.825 12.575 7.825 13Q7.825 13.425 8.125 13.725L10.25 15.85Q10.55 16.15 10.95 16.15Q11.35 16.15 11.65 15.85L15.875 11.625Q16.175 11.325 16.175 10.9Q16.175 10.475 15.875 10.175Q15.575 9.875 15.15 9.875Q14.725 9.875 14.425 10.175Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationRoundedFilled.displayName = 'AmauiIconMaterialDomainVerificationRoundedFilled';

export default IconMaterialDomainVerificationRoundedFilled;
