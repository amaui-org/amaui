import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShuffleOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleOn'

      short_name='ShuffleOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 23V1h22v22Zm8.175-12.425 1.4-1.4L5.4 4 4 5.4ZM14 20h6v-6h-2v2.55l-3.15-3.15-1.425 1.425L16.6 18H14Zm-8.6 0L18 7.4V10h2V4h-6v2h2.6L4 18.6Z"/>
    </Icon>
  );
});

IconMaterialShuffleOn.displayName = 'AmauiIconMaterialShuffleOn';

export default IconMaterialShuffleOn;
