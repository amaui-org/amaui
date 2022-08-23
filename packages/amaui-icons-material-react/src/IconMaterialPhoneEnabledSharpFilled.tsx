import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneEnabledSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabledSharpFilled'
      short_name='PhoneEnabled'

      {...props}
    >
      <path d="M4.05 21Q3.8 21 3.525 20.988Q3.25 20.975 3 20.95V15.1L8 14.1L10.9 17Q12.8 15.85 14.388 14.275Q15.975 12.7 17.025 10.9L14.175 8.025L15.1 3H20.95Q21 3.25 21 3.525Q21 3.8 21 4.05Q21 7.275 19.562 10.337Q18.125 13.4 15.762 15.775Q13.4 18.15 10.338 19.575Q7.275 21 4.05 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledSharpFilled.displayName = 'AmauiIconMaterialPhoneEnabledSharpFilled';

export default IconMaterialPhoneEnabledSharpFilled;
