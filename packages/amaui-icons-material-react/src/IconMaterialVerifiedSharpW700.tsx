import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerifiedSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedSharpW700'
      short_name='Verified'

      {...props}
    >
      <path d="M8.25 23.575 6.175 20.025 2.175 19.15 2.575 15.075 -0.1 12 2.575 8.925 2.175 4.85 6.175 3.975 8.25 0.425 12 2.025 15.75 0.425 17.825 3.975 21.825 4.85 21.425 8.925 24.1 12 21.425 15.075 21.825 19.15 17.825 20.025 15.75 23.575 12 21.975ZM12 12ZM10.95 15.825 16.875 9.9 15.175 8.2 10.95 12.425 8.825 10.3 7.125 12ZM9.575 19.575 12 18.5 14.475 19.575 15.8 17.275 18.4 16.675 18.2 13.975 19.925 12 18.2 9.975 18.4 7.275 15.8 6.725 14.425 4.425 12 5.5 9.525 4.425 8.2 6.725 5.6 7.275 5.8 9.975 4.075 12 5.8 13.975 5.6 16.725 8.2 17.275Z"/>
    </Icon>
  )
});

export default IconMaterialVerifiedSharpW700;
