import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddLinkSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLinkSharp'
      short_name='AddLink'

      {...props}
    >
      <path d="M11 17H7Q4.925 17 3.463 15.537Q2 14.075 2 12Q2 9.925 3.463 8.462Q4.925 7 7 7H11V9H7Q5.75 9 4.875 9.875Q4 10.75 4 12Q4 13.25 4.875 14.125Q5.75 15 7 15H11ZM8 13V11H16V13ZM22 12H20Q20 10.75 19.125 9.875Q18.25 9 17 9H13V7H17Q19.075 7 20.538 8.462Q22 9.925 22 12ZM17 20V17H14V15H17V12H19V15H22V17H19V20Z"/>
    </Icon>
  );
});

IconMaterialAddLinkSharp.displayName = 'AmauiIconMaterialAddLinkSharp';

export default IconMaterialAddLinkSharp;
