import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerifiedSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedSharpW100'
      short_name='Verified'

      {...props}
    >
      <path d="M9.15 20.85 7.55 18.15 4.5 17.5 4.8 14.35 2.75 12 4.8 9.65 4.5 6.5 7.55 5.85 9.15 3.15 12 4.35 14.85 3.15 16.45 5.85 19.5 6.5 19.2 9.65 21.25 12 19.2 14.35 19.5 17.5 16.45 18.15 14.85 20.85 12 19.65ZM12 12ZM10.95 14.65 15.7 9.9 15.2 9.4 10.95 13.65 8.8 11.5 8.3 12ZM9.45 19.95 12 18.9 14.55 19.95 16 17.55 18.75 16.95 18.5 14.1 20.35 12 18.5 9.9 18.75 7.05 16 6.45 14.55 4.05 12 5.1 9.45 4.05 8 6.45 5.25 7.05 5.5 9.9 3.65 12 5.5 14.1 5.25 16.95 8 17.55Z"/>
    </Icon>
  );
});

IconMaterialVerifiedSharpW100.displayName = 'AmauiIconMaterialVerifiedSharpW100';

export default IconMaterialVerifiedSharpW100;
