import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWarningSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningSharpW100Filled'
      short_name='Warning'

      {...props}
    >
      <path d="M3.25 19.7 12 4.6 20.75 19.7ZM11.65 15.5H12.35V10.5H11.65ZM12 17.5Q12.225 17.5 12.363 17.35Q12.5 17.2 12.5 17Q12.5 16.775 12.363 16.637Q12.225 16.5 12 16.5Q11.8 16.5 11.65 16.637Q11.5 16.775 11.5 17Q11.5 17.2 11.65 17.35Q11.8 17.5 12 17.5Z"/>
    </Icon>
  );
});

IconMaterialWarningSharpW100Filled.displayName = 'AmauiIconMaterialWarningSharpW100Filled';

export default IconMaterialWarningSharpW100Filled;
