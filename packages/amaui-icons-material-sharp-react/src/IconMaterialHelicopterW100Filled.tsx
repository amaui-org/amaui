import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHelicopterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelicopterW100Filled'

      short_name='Helicopter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M416-416v-256q-120 0-188 78t-68 178h256Zm91 244H172v-28h335v28Zm65-88H132v-156q0-112 76.5-198T416-700h156v140h194l34-80h28v227l-256 27v126Zm175-500H172v-28h575v28Z"/>
    </Icon>
  );
});

IconMaterialHelicopterW100Filled.displayName = 'AmauiIconMaterialHelicopterW100Filled';

export default IconMaterialHelicopterW100Filled;
