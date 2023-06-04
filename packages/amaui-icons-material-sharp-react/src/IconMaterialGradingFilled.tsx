import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGradingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradingFilled'

      short_name='Grading'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h9v2Zm0-4v-2h9v2Zm0-4v-2h18v2Zm0-4V7h18v2Zm0-4V3h18v2Zm13.425 15.975L13.6 18.15l1.4-1.4 1.425 1.425L19.6 15l1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialGradingFilled.displayName = 'AmauiIconMaterialGradingFilled';

export default IconMaterialGradingFilled;
