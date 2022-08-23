import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideImageSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageSharpW100'
      short_name='HideImage'

      {...props}
    >
      <path d="M19.7 16.85 19 16.15V5H7.85L7.15 4.3H19.7ZM20.7 21.7 18.7 19.7H4.3V5.3L2.3 3.3L2.8 2.8L21.2 21.2ZM7.95 16.35 9.6 14.2 11.2 16.05 12.925 13.925 5 6V19H18L15.35 16.35ZM12 12ZM11.5 12.5Z"/>
    </Icon>
  );
});

IconMaterialHideImageSharpW100.displayName = 'AmauiIconMaterialHideImageSharpW100';

export default IconMaterialHideImageSharpW100;
