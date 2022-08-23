import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLinkSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkSharp'
      short_name='Link'

      {...props}
    >
      <path d="M11 17H7Q4.925 17 3.463 15.537Q2 14.075 2 12Q2 9.925 3.463 8.462Q4.925 7 7 7H11V9H7Q5.75 9 4.875 9.875Q4 10.75 4 12Q4 13.25 4.875 14.125Q5.75 15 7 15H11ZM8 13V11H16V13ZM13 17V15H17Q18.25 15 19.125 14.125Q20 13.25 20 12Q20 10.75 19.125 9.875Q18.25 9 17 9H13V7H17Q19.075 7 20.538 8.462Q22 9.925 22 12Q22 14.075 20.538 15.537Q19.075 17 17 17Z"/>
    </Icon>
  );
});

IconMaterialLinkSharp.displayName = 'AmauiIconMaterialLinkSharp';

export default IconMaterialLinkSharp;
