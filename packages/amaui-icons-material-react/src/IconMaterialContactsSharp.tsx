import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsSharp'
      short_name='Contacts'

      {...props}
    >
      <path d="M4 23V21H20V23ZM4 3V1H20V3ZM12 13Q13.25 13 14.125 12.125Q15 11.25 15 10Q15 8.75 14.125 7.875Q13.25 7 12 7Q10.75 7 9.875 7.875Q9 8.75 9 10Q9 11.25 9.875 12.125Q10.75 13 12 13ZM2 20V4H22V20ZM4 18H5.75Q6.875 16.6 8.475 15.8Q10.075 15 12 15Q13.925 15 15.525 15.8Q17.125 16.6 18.25 18H20V6H4ZM8.7 18H15.3Q14.575 17.5 13.738 17.25Q12.9 17 12 17Q11.1 17 10.263 17.25Q9.425 17.5 8.7 18ZM12 11Q11.575 11 11.288 10.712Q11 10.425 11 10Q11 9.575 11.288 9.287Q11.575 9 12 9Q12.425 9 12.713 9.287Q13 9.575 13 10Q13 10.425 12.713 10.712Q12.425 11 12 11ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialContactsSharp.displayName = 'AmauiIconMaterialContactsSharp';

export default IconMaterialContactsSharp;
