import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountBoxSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBoxSharp'
      short_name='AccountBox'

      {...props}
    >
      <path d="M5 17.85Q6.35 16.525 8.138 15.762Q9.925 15 12 15Q14.075 15 15.863 15.762Q17.65 16.525 19 17.85V5H5ZM12 13Q13.45 13 14.475 11.975Q15.5 10.95 15.5 9.5Q15.5 8.05 14.475 7.025Q13.45 6 12 6Q10.55 6 9.525 7.025Q8.5 8.05 8.5 9.5Q8.5 10.95 9.525 11.975Q10.55 13 12 13ZM3 21V3H21V21ZM7 19H17V18.75Q15.95 17.875 14.675 17.438Q13.4 17 12 17Q10.6 17 9.325 17.438Q8.05 17.875 7 18.75ZM12 11Q11.375 11 10.938 10.562Q10.5 10.125 10.5 9.5Q10.5 8.875 10.938 8.438Q11.375 8 12 8Q12.625 8 13.062 8.438Q13.5 8.875 13.5 9.5Q13.5 10.125 13.062 10.562Q12.625 11 12 11ZM12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Q12 9.5 12 9.5Z"/>
    </Icon>
  );
});

IconMaterialAccountBoxSharp.displayName = 'AmauiIconMaterialAccountBoxSharp';

export default IconMaterialAccountBoxSharp;
