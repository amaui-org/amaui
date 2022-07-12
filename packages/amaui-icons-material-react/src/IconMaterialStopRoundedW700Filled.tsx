import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopRoundedW700Filled'
      short_name='Stop'

      {...props}
    >
      <path d="M8.3 18.85Q7 18.85 6.075 17.925Q5.15 17 5.15 15.7V8.3Q5.15 7 6.075 6.075Q7 5.15 8.3 5.15H15.7Q17 5.15 17.925 6.075Q18.85 7 18.85 8.3V15.7Q18.85 17 17.925 17.925Q17 18.85 15.7 18.85Z"/>
    </Icon>
  )
});

export default IconMaterialStopRoundedW700Filled;
