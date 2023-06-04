import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAodWatchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodWatchFilled'

      short_name='AodWatch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M360 556v-60h240v60H360Zm40 120v-60h160v60H400Zm-40 300-54-182q-48-38-77-95t-29-123q0-66 29-123t77-95l54-182h240l54 182q48 38 77 95t29 123q0 66-29 123t-77 95l-54 182H360Zm120-200q83 0 141.5-58.5T680 576q0-83-58.5-141.5T480 376q-83 0-141.5 58.5T280 576q0 83 58.5 141.5T480 776Z"/>
    </Icon>
  );
});

IconMaterialAodWatchFilled.displayName = 'AmauiIconMaterialAodWatchFilled';

export default IconMaterialAodWatchFilled;
