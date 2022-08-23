import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeMiniRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMiniRoundedW100Filled'
      short_name='HomeMini'

      {...props}
    >
      <path d="M12 6.3Q14.55 6.3 16.225 6.9Q17.9 7.5 18.9 8.375Q19.9 9.25 20.3 10.238Q20.7 11.225 20.7 12H3.3Q3.3 11.225 3.7 10.238Q4.1 9.25 5.1 8.375Q6.1 7.5 7.775 6.9Q9.45 6.3 12 6.3ZM9 17.7Q6.8 17.7 5.213 16.262Q3.625 14.825 3.35 12.7H20.65Q20.375 14.825 18.788 16.262Q17.2 17.7 15 17.7Z"/>
    </Icon>
  );
});

IconMaterialHomeMiniRoundedW100Filled.displayName = 'AmauiIconMaterialHomeMiniRoundedW100Filled';

export default IconMaterialHomeMiniRoundedW100Filled;
