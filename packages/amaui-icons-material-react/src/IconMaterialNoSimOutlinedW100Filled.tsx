import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoSimOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimOutlinedW100Filled'
      short_name='NoSim'

      {...props}
    >
      <path d="M18.7 16.2 8.15 5.7 10.55 3.3H17.2Q17.85 3.3 18.275 3.725Q18.7 4.15 18.7 4.8ZM20.4 21.75 18.55 19.9Q18.35 20.275 18.025 20.487Q17.7 20.7 17.2 20.7H6.8Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V8.55L6.25 7.6L2.45 3.8L2.95 3.3L20.9 21.25Z"/>
    </Icon>
  )
});

export default IconMaterialNoSimOutlinedW100Filled;
