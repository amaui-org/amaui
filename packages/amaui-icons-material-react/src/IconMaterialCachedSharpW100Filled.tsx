import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCachedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CachedSharpW100Filled'
      short_name='Cached'

      {...props}
    >
      <path d="M5 8.9 8.1 12 7.6 12.5 5.35 10.25V12Q5.35 14.775 7.3 16.712Q9.25 18.65 12.05 18.65Q12.625 18.65 13.238 18.538Q13.85 18.425 14.425 18.2L14.95 18.725Q14.275 19.025 13.538 19.188Q12.8 19.35 12.05 19.35Q8.975 19.35 6.812 17.2Q4.65 15.05 4.65 12V10.25L2.4 12.5L1.9 12ZM19 15.1 15.9 12 16.4 11.5 18.65 13.75V12Q18.65 9.225 16.7 7.287Q14.75 5.35 11.95 5.35Q11.375 5.35 10.762 5.462Q10.15 5.575 9.575 5.8L9.05 5.275Q9.725 4.975 10.463 4.812Q11.2 4.65 11.95 4.65Q15.025 4.65 17.188 6.8Q19.35 8.95 19.35 12V13.75L21.6 11.5L22.1 12Z"/>
    </Icon>
  );
});

IconMaterialCachedSharpW100Filled.displayName = 'AmauiIconMaterialCachedSharpW100Filled';

export default IconMaterialCachedSharpW100Filled;
