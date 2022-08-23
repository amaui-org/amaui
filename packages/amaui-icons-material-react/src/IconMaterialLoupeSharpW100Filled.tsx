import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoupeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoupeSharpW100Filled'
      short_name='Loupe'

      {...props}
    >
      <path d="M11.65 16.35H12.35V12.35H16.35V11.65H12.35V7.65H11.65V11.65H7.65V12.35H11.65ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12V20.7Z"/>
    </Icon>
  );
});

IconMaterialLoupeSharpW100Filled.displayName = 'AmauiIconMaterialLoupeSharpW100Filled';

export default IconMaterialLoupeSharpW100Filled;
