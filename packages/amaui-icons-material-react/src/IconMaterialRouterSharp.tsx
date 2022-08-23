import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRouterSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RouterSharp'
      short_name='Router'

      {...props}
    >
      <path d="M3 21V13H15V9H17V13H21V21ZM5 19H19V15H5ZM8 18V16H6V18ZM9.5 18H11.5V16H9.5ZM13 18H15V16H13ZM14.25 8.25 12.8 6.8Q13.45 6.2 14.25 5.85Q15.05 5.5 16 5.5Q16.95 5.5 17.75 5.85Q18.55 6.2 19.2 6.8L17.75 8.25Q17.4 7.9 16.963 7.7Q16.525 7.5 16 7.5Q15.475 7.5 15.038 7.7Q14.6 7.9 14.25 8.25ZM11.75 5.75 10.35 4.35Q11.45 3.25 12.9 2.625Q14.35 2 16 2Q17.65 2 19.1 2.625Q20.55 3.25 21.65 4.35L20.25 5.75Q19.425 4.925 18.337 4.463Q17.25 4 16 4Q14.75 4 13.663 4.463Q12.575 4.925 11.75 5.75ZM5 19V15V19Z"/>
    </Icon>
  );
});

IconMaterialRouterSharp.displayName = 'AmauiIconMaterialRouterSharp';

export default IconMaterialRouterSharp;
