import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriorityHighRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityHighRoundedW100Filled'
      short_name='PriorityHigh'

      {...props}
    >
      <path d="M12 18.2Q11.7 18.2 11.5 18Q11.3 17.8 11.3 17.5Q11.3 17.2 11.5 17Q11.7 16.8 12 16.8Q12.3 16.8 12.5 17Q12.7 17.2 12.7 17.5Q12.7 17.8 12.5 18Q12.3 18.2 12 18.2ZM12 15.05Q11.85 15.05 11.75 14.95Q11.65 14.85 11.65 14.7V4.85Q11.65 4.7 11.75 4.6Q11.85 4.5 12 4.5Q12.15 4.5 12.25 4.6Q12.35 4.7 12.35 4.85V14.7Q12.35 14.85 12.25 14.95Q12.15 15.05 12 15.05Z"/>
    </Icon>
  );
});

IconMaterialPriorityHighRoundedW100Filled.displayName = 'AmauiIconMaterialPriorityHighRoundedW100Filled';

export default IconMaterialPriorityHighRoundedW100Filled;
