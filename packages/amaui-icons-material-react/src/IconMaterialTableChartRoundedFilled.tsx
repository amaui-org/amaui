import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableChartRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartRoundedFilled'
      short_name='TableChart'

      {...props}
    >
      <path d="M3 8V5Q3 4.175 3.587 3.587Q4.175 3 5 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V8ZM10 21V10H15V21ZM17 21V10H22V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V10H8V21Z"/>
    </Icon>
  )
});

export default IconMaterialTableChartRoundedFilled;
