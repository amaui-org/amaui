import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsPhoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhoneW100Filled'

      short_name='SettingsPhone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.2 10.7q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.488-.213-.212-.212-.212-.487t.212-.488q.213-.212.488-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-.825 8.85q-2.425.025-4.962-1.275-2.538-1.3-4.613-3.362-2.075-2.063-3.387-4.601Q4.1 7.775 4.1 5.35q0-.25.013-.525.012-.275.062-.525h3.95l.825 3.775L6.3 10.5q1.4 2.35 3.125 4.05 1.725 1.7 4.075 3l2.55-2.675 3.35.7v3.9q-.225.05-.512.063-.288.012-.513.012Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhoneW100Filled.displayName = 'AmauiIconMaterialSettingsPhoneW100Filled';

export default IconMaterialSettingsPhoneW100Filled;
