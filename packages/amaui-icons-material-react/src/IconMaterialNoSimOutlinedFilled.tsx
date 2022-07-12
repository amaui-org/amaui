import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoSimOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimOutlinedFilled'
      short_name='NoSim'

      {...props}
    >
      <path d="M20 17.175 7.4 4.6 10 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4ZM20.5 23.3 18.95 21.75Q18.725 21.875 18.5 21.938Q18.275 22 18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V8L4.6 7.4L0.7 3.5L2.125 2.1L21.9 21.875Z"/>
    </Icon>
  )
});

export default IconMaterialNoSimOutlinedFilled;
