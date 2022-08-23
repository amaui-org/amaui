import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDomainDisabledRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainDisabledRoundedFilled'
      short_name='DomainDisabled'

      {...props}
    >
      <path d="M22 19.15 20 17.15V9H11.85L10 7.15V5H7.85L5.85 3H10Q10.825 3 11.413 3.587Q12 4.175 12 5V7H20Q20.825 7 21.413 7.587Q22 8.175 22 9ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V4.8L1.4 4.2Q1.125 3.925 1.125 3.5Q1.125 3.075 1.4 2.8Q1.675 2.525 2.1 2.525Q2.525 2.525 2.8 2.8L21.2 21.2Q21.475 21.475 21.475 21.9Q21.475 22.325 21.2 22.6Q20.925 22.875 20.513 22.887Q20.1 22.9 19.8 22.625L18.15 21ZM4 19H6V17H4ZM4 15H6V13H4ZM4 11H6V9H4ZM8 19H10V17H8ZM8 15H10V13H8ZM12 19H16.15L14.15 17H12ZM18 13H16V11H18Z"/>
    </Icon>
  );
});

IconMaterialDomainDisabledRoundedFilled.displayName = 'AmauiIconMaterialDomainDisabledRoundedFilled';

export default IconMaterialDomainDisabledRoundedFilled;
