import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPenSize1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PenSize1Filled'

      short_name='PenSize1'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M199 857q-9-9-9-21t9-21l520-520q9-9 21-9t21 9q9 9 9 21t-9 21L241 857q-9 9-21 9t-21-9Z"/>
    </Icon>
  );
});

IconMaterialPenSize1Filled.displayName = 'AmauiIconMaterialPenSize1Filled';

export default IconMaterialPenSize1Filled;
