import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShadow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shadow'

      short_name='Shadow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h80v-80q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240h-80v80q0 33-23.5 56.5T640-80H160Zm160-240h480v-480H320v480Z"/>
    </Icon>
  );
});

IconMaterialShadow.displayName = 'AmauiIconMaterialShadow';

export default IconMaterialShadow;
