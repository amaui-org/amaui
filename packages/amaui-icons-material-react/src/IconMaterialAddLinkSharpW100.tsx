import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddLinkSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLinkSharpW100'
      short_name='AddLink'

      {...props}
    >
      <path d="M10.225 15.8H6.725Q5.15 15.8 4.038 14.688Q2.925 13.575 2.925 12Q2.925 10.425 4.038 9.312Q5.15 8.2 6.725 8.2H10.225V8.9H6.725Q5.45 8.9 4.537 9.812Q3.625 10.725 3.625 12Q3.625 13.275 4.537 14.188Q5.45 15.1 6.725 15.1H10.225ZM8.375 12.35V11.65H15.075V12.35ZM20.525 12H19.825Q19.825 10.725 18.913 9.812Q18 8.9 16.725 8.9H13.225V8.2H16.725Q18.3 8.2 19.413 9.312Q20.525 10.425 20.525 12ZM17.375 19.35V16.35H14.375V15.65H17.375V12.65H18.075V15.65H21.075V16.35H18.075V19.35Z"/>
    </Icon>
  );
});

IconMaterialAddLinkSharpW100.displayName = 'AmauiIconMaterialAddLinkSharpW100';

export default IconMaterialAddLinkSharpW100;
