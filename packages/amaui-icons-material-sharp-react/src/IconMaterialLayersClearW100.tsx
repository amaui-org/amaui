import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLayersClearW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersClearW100'

      short_name='LayersClear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.75 12.45-.5-.5 3.5-2.7L12 4.8 9.2 6.95l-.5-.5L12 3.9l6.9 5.35Zm1.95 1.95-.5-.5 2.15-1.65.55.45Zm3.55 7.4-5.7-5.7L12 18.05 5.1 12.7l.55-.45 6.35 4.9 2.025-1.575L12.6 14.15l-.6.45-6.9-5.35L6.55 8.1l-4.7-4.7.5-.5 18.4 18.4ZM11.725 9.45Z"/>
    </Icon>
  );
});

IconMaterialLayersClearW100.displayName = 'AmauiIconMaterialLayersClearW100';

export default IconMaterialLayersClearW100;
