import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDualScreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DualScreen'

      short_name='DualScreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m240 800 240 96V352l-240-96v544Zm-30 74q-23-9-36.5-29T160 800V256q0-33 23.5-56.5T240 176l268 101q23 9 37.5 29.5T560 352v544q0 43-35 66.5t-75 7.5l-240-96Zm270-18v-80h240V256H240v-80h480q33 0 56.5 23.5T800 256v520q0 33-23.5 56.5T720 856H480Zm-240-56V256v544Z"/>
    </Icon>
  );
});

IconMaterialDualScreen.displayName = 'AmauiIconMaterialDualScreen';

export default IconMaterialDualScreen;
