import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonRemoveRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRemoveRoundedW100Filled'
      short_name='PersonRemove'

      {...props}
    >
      <path d="M16.5 10.35Q16.35 10.35 16.25 10.25Q16.15 10.15 16.15 10Q16.15 9.85 16.25 9.75Q16.35 9.65 16.5 9.65H20.5Q20.65 9.65 20.75 9.75Q20.85 9.85 20.85 10Q20.85 10.15 20.75 10.25Q20.65 10.35 20.5 10.35ZM9 11.2Q7.875 11.2 7.088 10.412Q6.3 9.625 6.3 8.5Q6.3 7.375 7.088 6.588Q7.875 5.8 9 5.8Q10.125 5.8 10.913 6.588Q11.7 7.375 11.7 8.5Q11.7 9.625 10.913 10.412Q10.125 11.2 9 11.2ZM3.05 18.2Q2.725 18.2 2.513 17.987Q2.3 17.775 2.3 17.45V16.9Q2.3 16.35 2.638 15.863Q2.975 15.375 3.55 15.1Q4.925 14.45 6.288 14.125Q7.65 13.8 9 13.8Q10.35 13.8 11.713 14.125Q13.075 14.45 14.45 15.1Q15.025 15.375 15.363 15.863Q15.7 16.35 15.7 16.9V17.45Q15.7 17.775 15.488 17.987Q15.275 18.2 14.95 18.2Z"/>
    </Icon>
  );
});

IconMaterialPersonRemoveRoundedW100Filled.displayName = 'AmauiIconMaterialPersonRemoveRoundedW100Filled';

export default IconMaterialPersonRemoveRoundedW100Filled;
