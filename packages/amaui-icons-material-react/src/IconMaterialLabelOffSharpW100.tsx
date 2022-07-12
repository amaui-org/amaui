import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffSharpW100'
      short_name='LabelOff'

      {...props}
    >
      <path d="M16.75 15.7 16.25 15.2 18.55 12 14.975 7H8L7.3 6.3H15.375L19.4 12ZM18.3 21.1 14.9 17.7H4.3V7.1L2.4 5.2L2.9 4.7L18.8 20.6ZM9.6 12.4ZM12.125 11.1ZM14.2 17 5 7.8V17Z"/>
    </Icon>
  )
});

export default IconMaterialLabelOffSharpW100;
