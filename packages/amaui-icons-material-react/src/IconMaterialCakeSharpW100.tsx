import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCakeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeSharpW100'
      short_name='Cake'

      {...props}
    >
      <path d="M4.3 20.7V13.8H6.3V8.1H11.65V6.6Q11.225 6.325 10.938 5.987Q10.65 5.65 10.65 5.2Q10.65 4.925 10.75 4.688Q10.85 4.45 11.05 4.25L12 3.3L12.95 4.25Q13.15 4.45 13.25 4.688Q13.35 4.925 13.35 5.2Q13.35 5.65 13.062 5.987Q12.775 6.325 12.35 6.6V8.1H17.7V13.8H19.7V20.7ZM7 13.8H17V8.8H7ZM5 20H19V14.5H5ZM7 13.8H17ZM5 20H19ZM17.7 13.8H6.3H17.7Z"/>
    </Icon>
  );
});

IconMaterialCakeSharpW100.displayName = 'AmauiIconMaterialCakeSharpW100';

export default IconMaterialCakeSharpW100;
