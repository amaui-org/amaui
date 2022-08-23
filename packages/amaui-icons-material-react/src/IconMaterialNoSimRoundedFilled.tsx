import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoSimRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimRoundedFilled'
      short_name='NoSim'

      {...props}
    >
      <path d="M20 17.175 7.4 4.6 9.55 2.45Q9.775 2.225 10.05 2.112Q10.325 2 10.625 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V8.625Q4 8.325 4.113 8.05Q4.225 7.775 4.45 7.55L4.6 7.4L1.4 4.2Q1.125 3.925 1.125 3.512Q1.125 3.1 1.425 2.8Q1.7 2.525 2.125 2.525Q2.55 2.525 2.825 2.8L21.2 21.175Q21.5 21.475 21.488 21.888Q21.475 22.3 21.2 22.575Q20.9 22.875 20.488 22.875Q20.075 22.875 19.8 22.6L18.95 21.75Q18.725 21.875 18.5 21.938Q18.275 22 18 22Z"/>
    </Icon>
  );
});

IconMaterialNoSimRoundedFilled.displayName = 'AmauiIconMaterialNoSimRoundedFilled';

export default IconMaterialNoSimRoundedFilled;
