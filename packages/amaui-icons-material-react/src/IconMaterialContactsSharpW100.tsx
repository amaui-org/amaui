import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactsSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsSharpW100'
      short_name='Contacts'

      {...props}
    >
      <path d="M4.65 20.9V20.2H19.35V20.9ZM4.65 3.8V3.1H19.35V3.8ZM12 14.3Q12.975 14.3 13.663 13.612Q14.35 12.925 14.35 11.95Q14.35 10.975 13.663 10.287Q12.975 9.6 12 9.6Q11.025 9.6 10.338 10.287Q9.65 10.975 9.65 11.95Q9.65 12.925 10.338 13.612Q11.025 14.3 12 14.3ZM3.3 18.7V5.3H20.7V18.7ZM4 18H7.45Q8.575 17.1 9.7 16.7Q10.825 16.3 12 16.3Q13.175 16.3 14.3 16.7Q15.425 17.1 16.55 18H20V6H4ZM8.7 18H15.3Q14.575 17.5 13.738 17.25Q12.9 17 12 17Q11.1 17 10.263 17.25Q9.425 17.5 8.7 18ZM12 13.6Q11.325 13.6 10.838 13.113Q10.35 12.625 10.35 11.95Q10.35 11.275 10.838 10.787Q11.325 10.3 12 10.3Q12.675 10.3 13.163 10.787Q13.65 11.275 13.65 11.95Q13.65 12.625 13.163 13.113Q12.675 13.6 12 13.6ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialContactsSharpW100.displayName = 'AmauiIconMaterialContactsSharpW100';

export default IconMaterialContactsSharpW100;
