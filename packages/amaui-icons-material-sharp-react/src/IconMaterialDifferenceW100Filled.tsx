import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDifferenceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DifferenceW100Filled'

      short_name='Difference'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.15 10.35h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2Zm-2 4h4.7v-.7h-4.7ZM7.3 17.7V2.3h8.35l4.05 4.05V17.7Zm-4 4V8.3H4V21h9.7v.7Z"/>
    </Icon>
  );
});

IconMaterialDifferenceW100Filled.displayName = 'AmauiIconMaterialDifferenceW100Filled';

export default IconMaterialDifferenceW100Filled;
