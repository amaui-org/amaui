import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStyleSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StyleSharpW100Filled'
      short_name='Style'

      {...props}
    >
      <path d="M4.425 15.6V20.45L2.675 19.45ZM9.375 21.85H7.425V16.5ZM12.25 20.95 7.275 7.3 16.15 4.075 21.15 17.7ZM11.225 10Q11.65 10 11.938 9.712Q12.225 9.425 12.225 9Q12.225 8.575 11.938 8.287Q11.65 8 11.225 8Q10.8 8 10.513 8.287Q10.225 8.575 10.225 9Q10.225 9.425 10.513 9.712Q10.8 10 11.225 10Z"/>
    </Icon>
  );
});

IconMaterialStyleSharpW100Filled.displayName = 'AmauiIconMaterialStyleSharpW100Filled';

export default IconMaterialStyleSharpW100Filled;
