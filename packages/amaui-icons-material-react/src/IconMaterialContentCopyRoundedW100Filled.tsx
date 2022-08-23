import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContentCopyRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopyRoundedW100Filled'
      short_name='ContentCopy'

      {...props}
    >
      <path d="M9.7 17.5Q9.05 17.5 8.6 17.075Q8.15 16.65 8.15 16V5.6Q8.15 4.95 8.6 4.525Q9.05 4.1 9.7 4.1H17.05Q17.675 4.1 18.113 4.537Q18.55 4.975 18.55 5.6V16Q18.55 16.625 18.113 17.062Q17.675 17.5 17.05 17.5ZM6.95 20.2Q6.325 20.2 5.888 19.762Q5.45 19.325 5.45 18.7V8.45Q5.45 8.3 5.55 8.2Q5.65 8.1 5.8 8.1Q5.95 8.1 6.05 8.2Q6.15 8.3 6.15 8.45V18.7Q6.15 19 6.4 19.25Q6.65 19.5 6.95 19.5H14.2Q14.35 19.5 14.45 19.6Q14.55 19.7 14.55 19.85Q14.55 20 14.45 20.1Q14.35 20.2 14.2 20.2Z"/>
    </Icon>
  );
});

IconMaterialContentCopyRoundedW100Filled.displayName = 'AmauiIconMaterialContentCopyRoundedW100Filled';

export default IconMaterialContentCopyRoundedW100Filled;
