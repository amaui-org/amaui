import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed025W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed025W100'

      short_name='Speed025'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M574-306q-6 0-10-4t-4-10q0-6 4-10t10-4h114q14 0 23-9t9-23v-68q0-14-9-23t-23-9h-98q-13 0-21.5-8.5T560-496v-128q0-13 8.5-21.5T590-654h144q6 0 10 4t4 10q0 6-4 10t-10 4H588v132h100q26 0 43 17t17 43v68q0 26-17 43t-43 17H574Zm-94 0H336q-13 0-21.5-8.5T306-336v-98q0-26 17-43t43-17h68q14 0 23-9t9-23v-68q0-14-9-23t-23-9H320q-6 0-10-4t-4-10q0-6 4-10t10-4h114q26 0 43 17t17 43v68q0 26-17 43t-43 17h-68q-14 0-23 9t-9 23v100h146q6 0 10 4t4 10q0 6-4 10t-10 4Zm-254 0q-6 0-10-4t-4-10q0-6 4-10t10-4q6 0 10 4t4 10q0 6-4 10t-10 4Z"/>
    </Icon>
  );
});

IconMaterialSpeed025W100.displayName = 'AmauiIconMaterialSpeed025W100';

export default IconMaterialSpeed025W100;
