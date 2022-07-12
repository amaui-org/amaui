import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssistantOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantOutlinedFilled'
      short_name='Assistant'

      {...props}
    >
      <path d="M12 23 9 20H5Q4.175 20 3.587 19.413Q3 18.825 3 18V4Q3 3.175 3.587 2.587Q4.175 2 5 2H19Q19.825 2 20.413 2.587Q21 3.175 21 4V18Q21 18.825 20.413 19.413Q19.825 20 19 20H15ZM13.55 12.55 17 11 13.55 9.45 12 6 10.45 9.45 7 11 10.45 12.55 12 16Z"/>
    </Icon>
  )
});

export default IconMaterialAssistantOutlinedFilled;
