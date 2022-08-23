import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCakeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeSharpW100Filled'
      short_name='Cake'

      {...props}
    >
      <path d="M6.3 13.6V8.1H11.65V6.6Q11.225 6.325 10.938 5.987Q10.65 5.65 10.65 5.2Q10.65 4.925 10.75 4.688Q10.85 4.45 11.05 4.25L12 3.3L12.95 4.25Q13.15 4.45 13.25 4.688Q13.35 4.925 13.35 5.2Q13.35 5.65 13.062 5.987Q12.775 6.325 12.35 6.6V8.1H17.7V13.6ZM4.3 20.7V14.3H19.7V20.7Z"/>
    </Icon>
  );
});

IconMaterialCakeSharpW100Filled.displayName = 'AmauiIconMaterialCakeSharpW100Filled';

export default IconMaterialCakeSharpW100Filled;
