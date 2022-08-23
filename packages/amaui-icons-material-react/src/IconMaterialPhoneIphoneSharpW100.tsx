import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneIphoneSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneIphoneSharpW100'
      short_name='PhoneIphone'

      {...props}
    >
      <path d="M12 19.9Q12.275 19.9 12.488 19.688Q12.7 19.475 12.7 19.2Q12.7 18.925 12.488 18.712Q12.275 18.5 12 18.5Q11.725 18.5 11.513 18.712Q11.3 18.925 11.3 19.2Q11.3 19.475 11.513 19.688Q11.725 19.9 12 19.9ZM6.3 21.7V2.3H17.7V21.7ZM7 16.7H17V5.35H7ZM7 21H17V17.4H7ZM7 4.65H17V3H7ZM7 4.65V3V4.65ZM7 21V17.4V21Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneSharpW100.displayName = 'AmauiIconMaterialPhoneIphoneSharpW100';

export default IconMaterialPhoneIphoneSharpW100;
