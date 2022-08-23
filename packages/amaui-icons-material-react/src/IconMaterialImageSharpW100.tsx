import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageSharpW100'
      short_name='Image'

      {...props}
    >
      <path d="M7.95 16.35H16.25L13.7 12.95L11.2 16.05L9.6 14.2ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterialImageSharpW100.displayName = 'AmauiIconMaterialImageSharpW100';

export default IconMaterialImageSharpW100;
