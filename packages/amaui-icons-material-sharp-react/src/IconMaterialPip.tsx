import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pip'

      short_name='Pip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-520v-80h144L52-772l56-56 172 172v-144h80v280H80Zm80 360q-33 0-56.5-23.5T80-240v-200h80v200h320v80H160Zm640-280v-280H440v-80h360q33 0 56.5 23.5T880-720v280h-80ZM560-160v-200h320v200H560Z"/>
    </Icon>
  );
});

IconMaterialPip.displayName = 'AmauiIconMaterialPip';

export default IconMaterialPip;
