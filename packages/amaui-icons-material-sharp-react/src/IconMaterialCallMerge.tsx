import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMerge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMerge'

      short_name='CallMerge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 20 6 18.6l5-5V6.875L8.425 9.45 7 8.025l5-5 5.025 5.025L15.6 9.475l-2.6-2.6V14.4Zm9.2.025-3.2-3.175 1.425-1.425 3.175 3.2Z"/>
    </Icon>
  );
});

IconMaterialCallMerge.displayName = 'AmauiIconMaterialCallMerge';

export default IconMaterialCallMerge;
