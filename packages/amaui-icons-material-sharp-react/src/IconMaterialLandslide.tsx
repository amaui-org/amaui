import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandslide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Landslide'

      short_name='Landslide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22h20l-6-8-5-2-3-4H2Zm2-2v-1.6l2 .65 9.025-3L18 20Zm2-3.05-2-.675V14.4l2 .65 3.95-1.3 2.4 1.075ZM18.5 14l4.5-2V8l-4.5-1L16 9v3ZM6 12.95l-2-.675V10h3l1.625 2.075Zm12.8-1.275-.8-.625v-1.1l1-.8 2 .45v1.1ZM12 8l5-2V1l-5-1-3 2v4Zm.225-2.25L11 4.925v-1.85l1.425-.95L15 2.65v2Z"/>
    </Icon>
  );
});

IconMaterialLandslide.displayName = 'AmauiIconMaterialLandslide';

export default IconMaterialLandslide;
