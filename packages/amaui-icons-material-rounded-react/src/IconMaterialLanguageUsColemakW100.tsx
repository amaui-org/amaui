import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageUsColemakW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageUsColemakW100'

      short_name='LanguageUsColemak'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M564 722h124q14 0 23-9t9-23V462q0-14-9-23t-23-9H564q-14 0-23 9t-9 23v228q0 14 9 23t23 9Zm-292 28q-26 0-43-17t-17-43V462q0-26 17-43t43-17h138q6 0 10 4t4 10q0 6-4 10t-10 4H272q-14 0-23 9t-9 23v228q0 14 9 23t23 9h138q6 0 10 4t4 10q0 6-4 10t-10 4H272Zm292 0q-26 0-43-17t-17-43V462q0-26 17-43t43-17h124q26 0 43 17t17 43v228q0 26-17 43t-43 17H564Z"/>
    </Icon>
  );
});

IconMaterialLanguageUsColemakW100.displayName = 'AmauiIconMaterialLanguageUsColemakW100';

export default IconMaterialLanguageUsColemakW100;
