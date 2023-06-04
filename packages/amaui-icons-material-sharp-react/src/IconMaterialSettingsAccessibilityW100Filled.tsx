import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsAccessibilityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAccessibilityW100Filled'

      short_name='SettingsAccessibility'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 3.75q-.675 0-1.137-.463-.463-.462-.463-1.137t.463-1.138Q11.325.55 12 .55t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm-1.95 15.1V6.25q-1.575-.125-3.025-.338Q5.575 5.7 4.3 5.4l.15-.7q1.875.45 3.712.65 1.838.2 3.838.2t3.838-.2q1.837-.2 3.712-.65l.15.7q-1.275.3-2.725.512-1.45.213-3.025.338v12.6h-.7V12.8h-2.5v6.05ZM8 23.7q-.275 0-.487-.213Q7.3 23.275 7.3 23t.213-.487Q7.725 22.3 8 22.3t.488.213q.212.212.212.487t-.212.487Q8.275 23.7 8 23.7Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialSettingsAccessibilityW100Filled.displayName = 'AmauiIconMaterialSettingsAccessibilityW100Filled';

export default IconMaterialSettingsAccessibilityW100Filled;
