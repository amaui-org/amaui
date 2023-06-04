import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineWeightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineWeightFilled'

      short_name='LineWeight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20v-1h18v1Zm0-3v-2h18v2Zm0-4v-3h18v3Zm0-5V4h18v4Z"/>
    </Icon>
  );
});

IconMaterialLineWeightFilled.displayName = 'AmauiIconMaterialLineWeightFilled';

export default IconMaterialLineWeightFilled;
