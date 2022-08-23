import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrokenImageSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageSharpW100'
      short_name='BrokenImage'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM6 13.5 10 9.5 14 13.5 18 9.5 19 10.5V5H5V12.5ZM5 19H19V11.5L18 10.5L14 14.5L10 10.5L6 14.5L5 13.5ZM5 19V11.5V12.2V11.2V10.5V5V12.5V13.5Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageSharpW100.displayName = 'AmauiIconMaterialBrokenImageSharpW100';

export default IconMaterialBrokenImageSharpW100;
