import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDomainVerificationRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainVerificationRounded'
      short_name='DomainVerification'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18H20Q20 18 20 18Q20 18 20 18V8H4V18Q4 18 4 18Q4 18 4 18ZM10.95 13.65 14.425 10.175Q14.725 9.875 15.15 9.875Q15.575 9.875 15.875 10.175Q16.175 10.475 16.175 10.9Q16.175 11.325 15.875 11.625L11.65 15.85Q11.35 16.15 10.95 16.15Q10.55 16.15 10.25 15.85L8.125 13.725Q7.825 13.425 7.825 13Q7.825 12.575 8.125 12.275Q8.425 11.975 8.85 11.975Q9.275 11.975 9.575 12.275ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialDomainVerificationRounded.displayName = 'AmauiIconMaterialDomainVerificationRounded';

export default IconMaterialDomainVerificationRounded;
