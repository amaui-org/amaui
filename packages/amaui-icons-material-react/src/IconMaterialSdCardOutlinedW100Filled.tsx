import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdCardOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardOutlinedW100Filled'
      short_name='SdCard'

      {...props}
    >
      <path d="M9.75 10.7H10.45V7.45H9.75ZM12.5 10.7H13.2V7.45H12.5ZM15.25 10.7H15.95V7.45H15.25ZM6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V8.55L10.55 3.3H17.2Q17.85 3.3 18.275 3.725Q18.7 4.15 18.7 4.8V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7Z"/>
    </Icon>
  )
});

export default IconMaterialSdCardOutlinedW100Filled;
