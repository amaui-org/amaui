import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLayersClear = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersClear'

      short_name='LayersClear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.1 12.8-1.4-1.45L17.75 9 12 4.55l-2.35 1.8-1.4-1.45L12 2l9 7Zm2.875 2.85-1.45-1.45 1.825-1.4L21 14.05Zm.825 6.45-4-4-3.8 2.95-9-7 1.65-1.25L12 18.5l2.35-1.825-1.425-1.4L12 16 3 9l2.075-1.625-3.7-3.65L2.8 2.3l18.4 18.4ZM12.175 8.85Z"/>
    </Icon>
  );
});

IconMaterialLayersClear.displayName = 'AmauiIconMaterialLayersClear';

export default IconMaterialLayersClear;
