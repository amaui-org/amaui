import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageUsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsW100'

      short_name='LanguageUs'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M272 750q-26 0-43-17t-17-43V416q0-6 4-10t10-4q6 0 10 4t4 10v274q0 14 9 23t23 9h108q14 0 23-9t9-23V416q0-6 4-10t10-4q6 0 10 4t4 10v274q0 26-17 43t-43 17H272Zm308 0q-26 0-43-17t-17-43v-8q0-6 4-10t10-4q6 0 10 4t4 10v8q0 14 9 23t23 9h108q14 0 23-9t9-23v-68q0-14-9-23t-23-9H580q-26 0-43-17t-17-43v-68q0-26 17-43t43-17h108q26 0 43 17t17 43v8q0 6-4 10t-10 4q-6 0-10-4t-4-10v-8q0-14-9-23t-23-9H580q-14 0-23 9t-9 23v68q0 14 9 23t23 9h108q26 0 43 17t17 43v68q0 26-17 43t-43 17H580Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsW100.displayName = 'AmauiIconMaterialLanguageUsW100';

export default IconMaterialLanguageUsW100;
