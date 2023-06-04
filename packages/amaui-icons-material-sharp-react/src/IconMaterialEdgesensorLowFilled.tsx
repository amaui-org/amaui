import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdgesensorLowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLowFilled'

      short_name='EdgesensorLow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22V2h12v20Zm2-5h8V7H8Zm-6-3V7h2v7Zm18 3v-7h2v7Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorLowFilled.displayName = 'AmauiIconMaterialEdgesensorLowFilled';

export default IconMaterialEdgesensorLowFilled;
