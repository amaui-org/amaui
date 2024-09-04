import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetBrightnessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetBrightnessW100Filled'

      short_name='ResetBrightness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m660-124-48-48h-80v-80l-48-48 48-48v-80h80l48-48 48 48h80v80l48 48-48 48v80h-80l-48 48Zm0-80q40 0 68-28t28-68q0-40-28-68t-68-28v192Zm111-376h-29q-30-79-100.5-129.5T480-760q-117 0-198.5 81.5T200-480q0 88 48 157.5T372-221v-139h28v188H212v-28h144q-81-37-132.5-111.5T172-480q0-64.08 24-120.04Q220-656 262-698q42-42 97.96-66 55.96-24 120.04-24 102 0 180.5 58.5T771-580Z"/>
    </Icon>
  );
});

IconMaterialResetBrightnessW100Filled.displayName = 'AmauiIconMaterialResetBrightnessW100Filled';

export default IconMaterialResetBrightnessW100Filled;
