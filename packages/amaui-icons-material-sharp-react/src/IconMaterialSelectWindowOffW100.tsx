import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectWindowOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectWindowOffW100'

      short_name='SelectWindowOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M852-68 470-450H160v280h480v-150l28 28v150H132v-416h160v-70L90-830l20-20L872-88l-20 20ZM670-402l-30-30v-18h-18L514-558h154v128h132v-280H362l-67-67v-41h533v416H670Z"/>
    </Icon>
  );
});

IconMaterialSelectWindowOffW100.displayName = 'AmauiIconMaterialSelectWindowOffW100';

export default IconMaterialSelectWindowOffW100;
