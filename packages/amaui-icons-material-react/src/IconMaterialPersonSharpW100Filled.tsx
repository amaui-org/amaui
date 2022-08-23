import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonSharpW100Filled'
      short_name='Person'

      {...props}
    >
      <path d="M12 11.2Q10.875 11.2 10.088 10.412Q9.3 9.625 9.3 8.5Q9.3 7.375 10.088 6.588Q10.875 5.8 12 5.8Q13.125 5.8 13.913 6.588Q14.7 7.375 14.7 8.5Q14.7 9.625 13.913 10.412Q13.125 11.2 12 11.2ZM5.3 18.2V16.9Q5.3 16.35 5.638 15.863Q5.975 15.375 6.55 15.1Q7.925 14.45 9.288 14.125Q10.65 13.8 12 13.8Q13.35 13.8 14.713 14.125Q16.075 14.45 17.45 15.1Q18.025 15.375 18.363 15.863Q18.7 16.35 18.7 16.9V18.2Z"/>
    </Icon>
  );
});

IconMaterialPersonSharpW100Filled.displayName = 'AmauiIconMaterialPersonSharpW100Filled';

export default IconMaterialPersonSharpW100Filled;
