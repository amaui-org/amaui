import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNatureSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatureSharpW100Filled'
      short_name='Nature'

      {...props}
    >
      <path d="M6.3 20.85V20.15H11.65V15.2H9Q7.45 15.2 6.375 14.125Q5.3 13.05 5.3 11.5Q5.3 10.225 6.175 9.275Q7.05 8.325 8.25 7.8Q8.45 5.8 9.45 4.8Q10.45 3.8 12 3.8Q13.55 3.8 14.55 4.8Q15.55 5.8 15.75 7.8Q16.975 8.275 17.837 9.25Q18.7 10.225 18.7 11.5Q18.7 13.05 17.625 14.125Q16.55 15.2 15 15.2H12.35V20.15H17.7V20.85Z"/>
    </Icon>
  );
});

IconMaterialNatureSharpW100Filled.displayName = 'AmauiIconMaterialNatureSharpW100Filled';

export default IconMaterialNatureSharpW100Filled;
