import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMimo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mimo'

      short_name='Mimo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-80l40-40H80v-600h800v600H680l40 40v80H240Zm-80-200h640v-440H160v440Zm0 0v-440 440Z"/>
    </Icon>
  );
});

IconMaterialMimo.displayName = 'AmauiIconMaterialMimo';

export default IconMaterialMimo;
