import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonOffRoundedW100Filled'
      short_name='PersonOff'

      {...props}
    >
      <path d="M6.05 18.2Q5.725 18.2 5.513 17.987Q5.3 17.775 5.3 17.45V16.9Q5.3 16.35 5.638 15.863Q5.975 15.375 6.55 15.1Q7.925 14.45 9.288 14.125Q10.65 13.8 12 13.8Q12.2 13.8 12.413 13.8Q12.625 13.8 12.825 13.825L3.4 4.4Q3.3 4.3 3.288 4.162Q3.275 4.025 3.4 3.9Q3.525 3.775 3.65 3.775Q3.775 3.775 3.9 3.9L20.1 20.1Q20.2 20.2 20.213 20.337Q20.225 20.475 20.1 20.6Q19.975 20.725 19.85 20.725Q19.725 20.725 19.6 20.6L17.2 18.2ZM18 15.375Q18 15.375 18 15.375Q18 15.375 18 15.375Q18 15.375 18 15.375Q18 15.375 18 15.375ZM13.525 10.725 9.775 6.975Q10.15 6.4 10.738 6.1Q11.325 5.8 12 5.8Q13.125 5.8 13.913 6.588Q14.7 7.375 14.7 8.5Q14.7 9.175 14.4 9.762Q14.1 10.35 13.525 10.725Z"/>
    </Icon>
  );
});

IconMaterialPersonOffRoundedW100Filled.displayName = 'AmauiIconMaterialPersonOffRoundedW100Filled';

export default IconMaterialPersonOffRoundedW100Filled;
