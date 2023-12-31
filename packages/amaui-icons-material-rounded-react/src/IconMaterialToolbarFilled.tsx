import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolbarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolbarFilled'

      short_name='Toolbar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-360h720v360q0 33-23.5 56.5T760-120H200Zm-80-520v-120q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v120H120Z"/>
    </Icon>
  );
});

IconMaterialToolbarFilled.displayName = 'AmauiIconMaterialToolbarFilled';

export default IconMaterialToolbarFilled;
