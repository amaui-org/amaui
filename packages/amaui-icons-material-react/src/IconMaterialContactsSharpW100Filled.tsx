import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsSharpW100Filled'
      short_name='Contacts'

      {...props}
    >
      <path d="M4.65 20.9V20.2H19.35V20.9ZM4.65 3.8V3.1H19.35V3.8ZM12 14.3Q12.975 14.3 13.663 13.612Q14.35 12.925 14.35 11.95Q14.35 10.975 13.663 10.287Q12.975 9.6 12 9.6Q11.025 9.6 10.338 10.287Q9.65 10.975 9.65 11.95Q9.65 12.925 10.338 13.612Q11.025 14.3 12 14.3ZM3.3 18.7V5.3H20.7V18.7ZM7.45 18H16.55Q15.425 17.1 14.3 16.7Q13.175 16.3 12 16.3Q10.825 16.3 9.7 16.7Q8.575 17.1 7.45 18Z"/>
    </Icon>
  );
});

IconMaterialContactsSharpW100Filled.displayName = 'AmauiIconMaterialContactsSharpW100Filled';

export default IconMaterialContactsSharpW100Filled;
