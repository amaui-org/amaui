import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveRoundedW100Filled'
      short_name='Remove'

      {...props}
    >
      <path d="M6 12.35Q5.85 12.35 5.75 12.25Q5.65 12.15 5.65 12Q5.65 11.85 5.75 11.75Q5.85 11.65 6 11.65H18Q18.15 11.65 18.25 11.75Q18.35 11.85 18.35 12Q18.35 12.15 18.25 12.25Q18.15 12.35 18 12.35Z"/>
    </Icon>
  );
});

IconMaterialRemoveRoundedW100Filled.displayName = 'AmauiIconMaterialRemoveRoundedW100Filled';

export default IconMaterialRemoveRoundedW100Filled;
