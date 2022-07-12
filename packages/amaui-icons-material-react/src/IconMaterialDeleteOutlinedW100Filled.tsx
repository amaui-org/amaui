import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteOutlinedW100Filled'
      short_name='Delete'

      {...props}
    >
      <path d="M6.6 6.8V6.1H8.775L9.775 5.1H14.225L15.225 6.1H17.4V6.8ZM8.8 19.7Q8.15 19.7 7.725 19.275Q7.3 18.85 7.3 18.2V8.3H16.7V18.2Q16.7 18.85 16.275 19.275Q15.85 19.7 15.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialDeleteOutlinedW100Filled;
