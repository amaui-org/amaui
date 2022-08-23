import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountBoxSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxSharpFilled'
      short_name='AccountBox'

      {...props}
    >
      <path d="M12 13Q13.45 13 14.475 11.975Q15.5 10.95 15.5 9.5Q15.5 8.05 14.475 7.025Q13.45 6 12 6Q10.55 6 9.525 7.025Q8.5 8.05 8.5 9.5Q8.5 10.95 9.525 11.975Q10.55 13 12 13ZM3 21V3H21V21ZM5 19H19V17.85Q17.65 16.525 15.863 15.762Q14.075 15 12 15Q9.925 15 8.138 15.762Q6.35 16.525 5 17.85Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxSharpFilled.displayName = 'AmauiIconMaterialAccountBoxSharpFilled';

export default IconMaterialAccountBoxSharpFilled;
