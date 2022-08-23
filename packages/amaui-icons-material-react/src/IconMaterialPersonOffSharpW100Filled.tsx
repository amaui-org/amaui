import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonOffSharpW100Filled'
      short_name='PersonOff'

      {...props}
    >
      <path d="M19.85 20.85 17.2 18.2H5.3V16.9Q5.3 16.35 5.638 15.863Q5.975 15.375 6.55 15.1Q7.925 14.45 9.288 14.125Q10.65 13.8 12 13.8Q12.2 13.8 12.413 13.8Q12.625 13.8 12.825 13.825L3.15 4.15L3.65 3.65L20.35 20.35ZM18 15.375Q18 15.375 18 15.375Q18 15.375 18 15.375Q18 15.375 18 15.375Q18 15.375 18 15.375ZM13.525 10.725 9.775 6.975Q10.15 6.4 10.738 6.1Q11.325 5.8 12 5.8Q13.125 5.8 13.913 6.588Q14.7 7.375 14.7 8.5Q14.7 9.175 14.4 9.762Q14.1 10.35 13.525 10.725Z"/>
    </Icon>
  );
});

IconMaterialPersonOffSharpW100Filled.displayName = 'AmauiIconMaterialPersonOffSharpW100Filled';

export default IconMaterialPersonOffSharpW100Filled;
