import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowTopLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowTopLeftW100Filled'

      short_name='ArrowTopLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m250 470 160 159q4 4 4 10t-4 10q-4 5-10 4.5t-10-4.5L218 477q-9-9-9-21t9-21l172-173q4-4 10-4t10 4q4 4 4 10t-4 10L251 442h423q25 0 42.5 17.5T734 502v354q0 6-4 10t-10 4q-6 0-10-4t-4-10V502q0-14-9-23t-23-9H250Z"/>
    </Icon>
  );
});

IconMaterialArrowTopLeftW100Filled.displayName = 'AmauiIconMaterialArrowTopLeftW100Filled';

export default IconMaterialArrowTopLeftW100Filled;
