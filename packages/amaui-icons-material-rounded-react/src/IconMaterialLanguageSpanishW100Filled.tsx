import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageSpanishW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageSpanishW100Filled'

      short_name='LanguageSpanish'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-334h186q6 0 10 4t4 10q0 6-4 10t-10 4H242q-13 0-21.5-8.5T212-336v-288q0-13 8.5-21.5T242-654h184q6 0 10 4t4 10q0 6-4 10t-10 4H240v132h146q6 0 10 4t4 10q0 6-4 10t-10 4H240v132Zm340 28q-26 0-43-17t-17-43v-8q0-6 4-10t10-4q6 0 10 4t4 10v8q0 14 9 23t23 9h108q14 0 23-9t9-23v-68q0-14-9-23t-23-9H580q-26 0-43-17t-17-43v-68q0-26 17-43t43-17h108q26 0 43 17t17 43v8q0 6-4 10t-10 4q-6 0-10-4t-4-10v-8q0-14-9-23t-23-9H580q-14 0-23 9t-9 23v68q0 14 9 23t23 9h108q26 0 43 17t17 43v68q0 26-17 43t-43 17H580Z"/>
    </Icon>
  );
});

IconMaterialLanguageSpanishW100Filled.displayName = 'AmauiIconMaterialLanguageSpanishW100Filled';

export default IconMaterialLanguageSpanishW100Filled;
