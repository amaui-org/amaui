import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Gate'

      short_name='Gate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17V7h2v10Zm3 2V9q0-1.65 1.175-2.825Q7.35 5 9 5h6q1.65 0 2.825 1.175Q19 7.35 19 9v10Zm2-2h4v-4H9v-2h2V7H9q-.825 0-1.412.587Q7 8.175 7 9Zm6 0h4V9q0-.825-.587-1.413Q15.825 7 15 7h-2v4h2v2h-2Zm7 0V7h2v10Zm-8-5Z"/>
    </Icon>
  );
});

IconMaterialGate.displayName = 'AmauiIconMaterialGate';

export default IconMaterialGate;
