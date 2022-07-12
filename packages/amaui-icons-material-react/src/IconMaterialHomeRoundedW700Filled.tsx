import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRoundedW700Filled'
      short_name='Home'

      {...props}
    >
      <path d="M6.3 21.85Q5 21.85 4.075 20.925Q3.15 20 3.15 18.7V10.15Q3.15 9.4 3.5 8.725Q3.85 8.05 4.425 7.625L10.1 3.375Q10.525 3.05 11.012 2.887Q11.5 2.725 12 2.725Q12.5 2.725 12.988 2.887Q13.475 3.05 13.9 3.375L19.575 7.625Q20.175 8.05 20.513 8.725Q20.85 9.4 20.85 10.15V18.7Q20.85 20 19.925 20.925Q19 21.85 17.7 21.85H14.2V13.8H9.8V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialHomeRoundedW700Filled;
