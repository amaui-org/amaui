import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseFilled'

      short_name='Browse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-440v-320q0-33 23.5-56.5T200-840h240v400H120Zm400-400h240q33 0 56.5 23.5T840-760v160H520v-240Zm0 720v-400h320v320q0 33-23.5 56.5T760-120H520ZM120-360h320v240H200q-33 0-56.5-23.5T120-200v-160Z"/>
    </Icon>
  );
});

IconMaterialBrowseFilled.displayName = 'AmauiIconMaterialBrowseFilled';

export default IconMaterialBrowseFilled;
