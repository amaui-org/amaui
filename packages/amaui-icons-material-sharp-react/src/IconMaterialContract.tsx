import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContract = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Contract'

      short_name='Contract'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-50 0-85-35t-35-85v-120h120v-560h600v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-600H320v480h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm0 0h-40 400-360Z"/>
    </Icon>
  );
});

IconMaterialContract.displayName = 'AmauiIconMaterialContract';

export default IconMaterialContract;
