import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWashSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WashSharpW100Filled'
      short_name='Wash'

      {...props}
    >
      <path d="M18.1 8.4Q17.275 8.4 16.688 7.812Q16.1 7.225 16.1 6.4Q16.1 5.9 16.413 5.275Q16.725 4.65 17.1 4.1Q17.55 3.45 18.1 2.8Q18.65 3.45 19.1 4.1Q19.475 4.65 19.788 5.275Q20.1 5.9 20.1 6.4Q20.1 7.225 19.513 7.812Q18.925 8.4 18.1 8.4ZM13.1 9.2Q12.6 9.2 12.25 8.85Q11.9 8.5 11.9 8Q11.9 7.75 12.088 7.4Q12.275 7.05 12.5 6.75Q12.775 6.375 13.1 6Q13.425 6.375 13.7 6.75Q13.925 7.05 14.113 7.4Q14.3 7.75 14.3 8Q14.3 8.5 13.95 8.85Q13.6 9.2 13.1 9.2ZM3.05 19.75V13.65L9.075 7.925L9.85 8.725L8.125 11.75H17.35V12.85H10.95V14.05H18.95V15.15H10.95V16.35H18.15V17.45H10.95V18.65H16.55V19.75Z"/>
    </Icon>
  );
});

IconMaterialWashSharpW100Filled.displayName = 'AmauiIconMaterialWashSharpW100Filled';

export default IconMaterialWashSharpW100Filled;
