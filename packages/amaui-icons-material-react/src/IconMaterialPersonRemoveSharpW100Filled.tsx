import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonRemoveSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRemoveSharpW100Filled'
      short_name='PersonRemove'

      {...props}
    >
      <path d="M16.15 10.35V9.65H20.85V10.35ZM9 11.2Q7.875 11.2 7.088 10.412Q6.3 9.625 6.3 8.5Q6.3 7.375 7.088 6.588Q7.875 5.8 9 5.8Q10.125 5.8 10.913 6.588Q11.7 7.375 11.7 8.5Q11.7 9.625 10.913 10.412Q10.125 11.2 9 11.2ZM2.3 18.2V16.9Q2.3 16.35 2.638 15.863Q2.975 15.375 3.55 15.1Q4.925 14.45 6.288 14.125Q7.65 13.8 9 13.8Q10.35 13.8 11.713 14.125Q13.075 14.45 14.45 15.1Q15.025 15.375 15.363 15.863Q15.7 16.35 15.7 16.9V18.2Z"/>
    </Icon>
  );
});

IconMaterialPersonRemoveSharpW100Filled.displayName = 'AmauiIconMaterialPersonRemoveSharpW100Filled';

export default IconMaterialPersonRemoveSharpW100Filled;
