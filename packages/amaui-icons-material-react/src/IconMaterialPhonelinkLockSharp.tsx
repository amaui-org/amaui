import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhonelinkLockSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkLockSharp'
      short_name='PhonelinkLock'

      {...props}
    >
      <path d="M15 16V11H16V10Q16 9.175 16.587 8.587Q17.175 8 18 8Q18.825 8 19.413 8.587Q20 9.175 20 10V11H21V16ZM17 11H19V10Q19 9.575 18.712 9.287Q18.425 9 18 9Q17.575 9 17.288 9.287Q17 9.575 17 10ZM7 21H17V20H7ZM7 4H17V3H7ZM5 23V1H19V7H17V6H7V18H17V17H19V23ZM7 4V3V4ZM7 21V20V21Z"/>
    </Icon>
  )
});

export default IconMaterialPhonelinkLockSharp;
