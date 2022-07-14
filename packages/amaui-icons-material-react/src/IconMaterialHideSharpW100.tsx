import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideSharpW100'
      short_name='Hide'

      {...props}
    >
      <path d="M13.25 10.725V6.35H13.95V9.525L19.2 4.275L19.7 4.775L14.45 10.025H17.625V10.725ZM4.8 19.675 4.3 19.175 9.55 13.925H6.375V13.225H10.75V17.6H10.05V14.425Z"/>
    </Icon>
  );
});

export default IconMaterialHideSharpW100;
