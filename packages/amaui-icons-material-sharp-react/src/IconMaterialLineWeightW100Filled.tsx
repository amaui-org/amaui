import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineWeightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineWeightW100Filled'

      short_name='LineWeight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.25 17.75v-.35h11.5v.35Zm0-2.35v-.7h11.5v.7Zm0-2.7v-1h11.5v1Zm0-3.05v-3.4h11.5v3.4Z"/>
    </Icon>
  );
});

IconMaterialLineWeightW100Filled.displayName = 'AmauiIconMaterialLineWeightW100Filled';

export default IconMaterialLineWeightW100Filled;
