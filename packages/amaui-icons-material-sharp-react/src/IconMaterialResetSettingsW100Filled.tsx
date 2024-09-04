import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetSettingsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetSettingsW100Filled'

      short_name='ResetSettings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M508-380v-28h132v28H508Zm70 208v-60h-70v-28h70v-60h28v148h-28Zm78-60v-28h132v28H656Zm34-88v-148h28v60h70v28h-70v60h-28Zm81-260h-29q-30-79-100.5-129.5T480-760q-117 0-198.5 81.5T200-480q0 88 48 157.5T372-221v-139h28v188H212v-28h144q-81-37-132.5-111.5T172-480q0-64.08 24-120.04Q220-656 262-698q42-42 97.96-66 55.96-24 120.04-24 102 0 180.5 58.5T771-580Z"/>
    </Icon>
  );
});

IconMaterialResetSettingsW100Filled.displayName = 'AmauiIconMaterialResetSettingsW100Filled';

export default IconMaterialResetSettingsW100Filled;
