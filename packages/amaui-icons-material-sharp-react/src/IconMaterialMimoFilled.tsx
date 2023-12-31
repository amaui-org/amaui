import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMimoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MimoFilled'

      short_name='Mimo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-80l40-40H80v-600h800v600H680l40 40v80H240Z"/>
    </Icon>
  );
});

IconMaterialMimoFilled.displayName = 'AmauiIconMaterialMimoFilled';

export default IconMaterialMimoFilled;
