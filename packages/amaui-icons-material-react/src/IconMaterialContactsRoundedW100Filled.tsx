import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsRoundedW100Filled'
      short_name='Contacts'

      {...props}
    >
      <path d="M5 20.9Q4.85 20.9 4.75 20.8Q4.65 20.7 4.65 20.55Q4.65 20.4 4.75 20.3Q4.85 20.2 5 20.2H19Q19.15 20.2 19.25 20.3Q19.35 20.4 19.35 20.55Q19.35 20.7 19.25 20.8Q19.15 20.9 19 20.9ZM5 3.8Q4.85 3.8 4.75 3.7Q4.65 3.6 4.65 3.45Q4.65 3.3 4.75 3.2Q4.85 3.1 5 3.1H19Q19.15 3.1 19.25 3.2Q19.35 3.3 19.35 3.45Q19.35 3.6 19.25 3.7Q19.15 3.8 19 3.8ZM12 14.3Q12.975 14.3 13.663 13.612Q14.35 12.925 14.35 11.95Q14.35 10.975 13.663 10.287Q12.975 9.6 12 9.6Q11.025 9.6 10.338 10.287Q9.65 10.975 9.65 11.95Q9.65 12.925 10.338 13.612Q11.025 14.3 12 14.3ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM7.45 18H16.55Q15.425 17.1 14.3 16.7Q13.175 16.3 12 16.3Q10.825 16.3 9.7 16.7Q8.575 17.1 7.45 18Z"/>
    </Icon>
  );
});

IconMaterialContactsRoundedW100Filled.displayName = 'AmauiIconMaterialContactsRoundedW100Filled';

export default IconMaterialContactsRoundedW100Filled;
