import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShuffleOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleOnFilled'

      short_name='ShuffleOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 23V1h22v22Zm8.175-12.425 1.4-1.4L5.4 4 4 5.4ZM14 20h6v-6h-2v2.55l-3.175-3.175L13.4 14.8l3.2 3.2H14Zm-8.6 0L18 7.4V10h2V4h-6v2h2.6L4 18.6Z"/>
    </Icon>
  );
});

IconMaterialShuffleOnFilled.displayName = 'AmauiIconMaterialShuffleOnFilled';

export default IconMaterialShuffleOnFilled;
