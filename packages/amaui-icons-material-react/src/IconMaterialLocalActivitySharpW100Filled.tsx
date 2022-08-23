import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalActivitySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivitySharpW100Filled'
      short_name='LocalActivity'

      {...props}
    >
      <path d="M3.3 18.7V15.05Q4.2 14.625 4.75 13.8Q5.3 12.975 5.3 12Q5.3 11.025 4.75 10.2Q4.2 9.375 3.3 8.95V5.3H20.7V8.95Q19.8 9.375 19.25 10.2Q18.7 11.025 18.7 12Q18.7 12.975 19.25 13.8Q19.8 14.625 20.7 15.05V18.7ZM10.15 14.7 12 13.25 13.8 14.65 13.1 12.4 15.05 10.9H12.75L12 8.6L11.25 10.9H8.95L10.85 12.4Z"/>
    </Icon>
  );
});

IconMaterialLocalActivitySharpW100Filled.displayName = 'AmauiIconMaterialLocalActivitySharpW100Filled';

export default IconMaterialLocalActivitySharpW100Filled;
