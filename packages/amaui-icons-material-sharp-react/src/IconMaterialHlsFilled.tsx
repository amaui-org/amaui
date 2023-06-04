import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHlsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HlsFilled'

      short_name='Hls'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 15V9h1.5v2h2V9H8v6H6.5v-2.5h-2V15Zm12.5 0v-2H17v.5h2v-1h-3.5V9h5v2H19v-.5h-2v1h3.5V15ZM10 15V9h1.5v4.5H14V15Z"/>
    </Icon>
  );
});

IconMaterialHlsFilled.displayName = 'AmauiIconMaterialHlsFilled';

export default IconMaterialHlsFilled;
