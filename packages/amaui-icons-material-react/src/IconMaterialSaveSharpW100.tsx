import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSaveSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveSharpW100'
      short_name='Save'

      {...props}
    >
      <path d="M4.3 19.7V4.3H16.45L19.7 7.55V19.7ZM5 19H19V7.85L16.15 5H5ZM12 16.1Q12.7 16.1 13.2 15.6Q13.7 15.1 13.7 14.4Q13.7 13.7 13.2 13.2Q12.7 12.7 12 12.7Q11.3 12.7 10.8 13.2Q10.3 13.7 10.3 14.4Q10.3 15.1 10.8 15.6Q11.3 16.1 12 16.1ZM7 9.7H13.95V7H7ZM5 19V5V7.85V19Z"/>
    </Icon>
  );
});

IconMaterialSaveSharpW100.displayName = 'AmauiIconMaterialSaveSharpW100';

export default IconMaterialSaveSharpW100;
