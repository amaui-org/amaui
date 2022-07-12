import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMailLockSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailLockSharpFilled'
      short_name='MailLock'

      {...props}
    >
      <path d="M12 11 4 6V8L12 13L20 8V6ZM18 20V15H19V14Q19 13.175 19.587 12.587Q20.175 12 21 12Q21.825 12 22.413 12.587Q23 13.175 23 14V15H24V20ZM20 15H22V14Q22 13.575 21.712 13.287Q21.425 13 21 13Q20.575 13 20.288 13.287Q20 13.575 20 14ZM2 20V4H22V10H21Q18.925 10 17.462 11.462Q16 12.925 16 15V20Z"/>
    </Icon>
  )
});

export default IconMaterialMailLockSharpFilled;
