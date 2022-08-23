import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAttachMoneySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachMoneySharp'
      short_name='AttachMoney'

      {...props}
    >
      <path d="M11.025 21V18.85Q9.7 18.55 8.738 17.7Q7.775 16.85 7.325 15.3L9.175 14.55Q9.55 15.75 10.288 16.375Q11.025 17 12.225 17Q13.25 17 13.963 16.538Q14.675 16.075 14.675 15.1Q14.675 14.225 14.125 13.712Q13.575 13.2 11.575 12.55Q9.425 11.875 8.625 10.938Q7.825 10 7.825 8.65Q7.825 7.025 8.875 6.125Q9.925 5.225 11.025 5.1V3H13.025V5.1Q14.275 5.3 15.088 6.012Q15.9 6.725 16.275 7.75L14.425 8.55Q14.125 7.75 13.575 7.35Q13.025 6.95 12.075 6.95Q10.975 6.95 10.4 7.438Q9.825 7.925 9.825 8.65Q9.825 9.475 10.575 9.95Q11.325 10.425 13.175 10.95Q14.9 11.45 15.788 12.537Q16.675 13.625 16.675 15.05Q16.675 16.825 15.625 17.75Q14.575 18.675 13.025 18.9V21Z"/>
    </Icon>
  );
});

IconMaterialAttachMoneySharp.displayName = 'AmauiIconMaterialAttachMoneySharp';

export default IconMaterialAttachMoneySharp;
