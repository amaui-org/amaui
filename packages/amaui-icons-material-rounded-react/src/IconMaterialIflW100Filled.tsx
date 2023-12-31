import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIflW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IflW100Filled'

      short_name='Ifl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M632.118-278Q653-278 667.5-292.618q14.5-14.617 14.5-35.5Q682-349 667.382-363.5q-14.617-14.5-35.5-14.5Q611-378 596.5-363.382q-14.5 14.617-14.5 35.5Q582-307 596.618-292.5q14.617 14.5 35.5 14.5Zm-152-152Q501-430 515.5-444.618q14.5-14.617 14.5-35.5Q530-501 515.382-515.5q-14.617-14.5-35.5-14.5Q459-530 444.5-515.382q-14.5 14.617-14.5 35.5Q430-459 444.618-444.5q14.617 14.5 35.5 14.5Zm-152-152Q349-582 363.5-596.618q14.5-14.617 14.5-35.5Q378-653 363.382-667.5q-14.617-14.5-35.5-14.5Q307-682 292.5-667.382q-14.5 14.617-14.5 35.5Q278-611 292.618-596.5q14.617 14.5 35.5 14.5ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialIflW100Filled.displayName = 'AmauiIconMaterialIflW100Filled';

export default IconMaterialIflW100Filled;
