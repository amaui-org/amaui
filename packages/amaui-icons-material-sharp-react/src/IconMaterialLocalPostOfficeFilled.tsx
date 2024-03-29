import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPostOfficeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeFilled'

      short_name='LocalPostOffice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V12h4V8q0-2.5 1.75-4.25T12 2h4q2.5 0 4.25 1.75T22 8v14h-2v-3h-4v3Zm14-5h4V8q0-1.65-1.175-2.825Q17.65 4 16 4h-4q-1.65 0-2.825 1.175Q8 6.35 8 8v4h8Zm-6-7V8h8v2Zm-1 8.6 5-2.85V14l-5 2.85L4 14v1.75Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOfficeFilled.displayName = 'AmauiIconMaterialLocalPostOfficeFilled';

export default IconMaterialLocalPostOfficeFilled;
