import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDvrSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DvrSharpW100Filled'
      short_name='Dvr'

      {...props}
    >
      <path d="M9.15 9.35H17.35V8.65H9.15ZM9.15 13.35H17.35V12.65H9.15ZM7 9.5Q7.225 9.5 7.363 9.35Q7.5 9.2 7.5 9Q7.5 8.775 7.363 8.637Q7.225 8.5 7 8.5Q6.8 8.5 6.65 8.637Q6.5 8.775 6.5 9Q6.5 9.2 6.65 9.35Q6.8 9.5 7 9.5ZM7 13.5Q7.225 13.5 7.363 13.35Q7.5 13.2 7.5 13Q7.5 12.775 7.363 12.637Q7.225 12.5 7 12.5Q6.8 12.5 6.65 12.637Q6.5 12.775 6.5 13Q6.5 13.2 6.65 13.35Q6.8 13.5 7 13.5ZM9.3 19.7V17.7H3.3V4.3H20.7V17.7H14.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialDvrSharpW100Filled.displayName = 'AmauiIconMaterialDvrSharpW100Filled';

export default IconMaterialDvrSharpW100Filled;
