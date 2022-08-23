import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableChartRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartRounded'
      short_name='TableChart'

      {...props}
    >
      <path d="M20 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM5 8H20V5Q20 5 20 5Q20 5 20 5H5Q5 5 5 5Q5 5 5 5ZM8 10H5V19Q5 19 5 19Q5 19 5 19H8ZM17 10V19H20Q20 19 20 19Q20 19 20 19V10ZM15 10H10V19H15Z"/>
    </Icon>
  );
});

IconMaterialTableChartRounded.displayName = 'AmauiIconMaterialTableChartRounded';

export default IconMaterialTableChartRounded;
