import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenRotationUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationUpW100'

      short_name='ScreenRotationUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M604-212H346q-23 0-38.5-15.5T292-266v-336l28 28v302q0 14 9 23t23 9h251l-89-90q-4-4-4-9.5t4-9.5q4-5 10-4.5t10 4.5l102 102q9 9 9 21t-9 21L534-103q-4 4-9.5 4.5T514-103q-5-5-5-10t5-10l90-89Zm64-145-28-28v-303q0-14-9-23t-23-9H357l89 90q4 4 4 9.5t-4 9.5q-4 5-10 4.5t-10-4.5L324-713q-9-9-9-21t9-21l102-102q4-4 9.5-4.5T446-857q5 5 5 10t-5 10l-90 89h258q23 0 38.5 15.5T668-694v337Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationUpW100.displayName = 'AmauiIconMaterialScreenRotationUpW100';

export default IconMaterialScreenRotationUpW100;
