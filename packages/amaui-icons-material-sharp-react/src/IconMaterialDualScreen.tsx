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
      <path d="m240 800 240 96V352l-240-96v544Zm-80 54V176h80l320 121v717L160 854Zm320 2v-80h240V256H240v-80h560v680H480Zm-240-56V256v544Z"/>
    </Icon>
  );
});

IconMaterialDualScreen.displayName = 'AmauiIconMaterialDualScreen';

export default IconMaterialDualScreen;
