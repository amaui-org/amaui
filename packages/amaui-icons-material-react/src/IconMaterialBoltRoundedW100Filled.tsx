import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBoltRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltRoundedW100Filled'
      short_name='Bolt'

      {...props}
    >
      <path d="M10.825 19.7Q10.6 19.7 10.463 19.55Q10.325 19.4 10.375 19.175L11.15 13.7H8.65Q8.3 13.7 8.25 13.525Q8.2 13.35 8.35 13.05L12.7 4.575Q12.75 4.45 12.9 4.375Q13.05 4.3 13.175 4.3Q13.4 4.3 13.538 4.45Q13.675 4.6 13.625 4.825L12.85 10.3H15.35Q15.65 10.3 15.725 10.475Q15.8 10.65 15.65 10.95L11.3 19.425Q11.25 19.55 11.1 19.625Q10.95 19.7 10.825 19.7Z"/>
    </Icon>
  );
});

IconMaterialBoltRoundedW100Filled.displayName = 'AmauiIconMaterialBoltRoundedW100Filled';

export default IconMaterialBoltRoundedW100Filled;
