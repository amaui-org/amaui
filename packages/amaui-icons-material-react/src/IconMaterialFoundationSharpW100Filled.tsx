import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFoundationSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoundationSharpW100Filled'
      short_name='Foundation'

      {...props}
    >
      <path d="M6.3 18.7V15.7H5.4V15H6.3V10.7H5.4L12 4.75L18.6 10.7H17.7V15H18.6V15.7H17.7V18.7H17V15.7H12.35V18.7H11.65V15.7H7V18.7ZM7 15H11.65V6.025L7 10.2ZM12.35 15H17V10.2L12.35 6.025Z"/>
    </Icon>
  );
});

export default IconMaterialFoundationSharpW100Filled;
