import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEjectRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectRounded'
      short_name='Eject'

      {...props}
    >
      <path d="M6 19Q5.575 19 5.287 18.712Q5 18.425 5 18Q5 17.575 5.287 17.288Q5.575 17 6 17H18Q18.425 17 18.712 17.288Q19 17.575 19 18Q19 18.425 18.712 18.712Q18.425 19 18 19ZM7.225 15Q6.625 15 6.338 14.475Q6.05 13.95 6.375 13.45L11.175 6.25Q11.475 5.8 12 5.8Q12.525 5.8 12.825 6.25L17.625 13.45Q17.95 13.95 17.663 14.475Q17.375 15 16.775 15ZM12 13ZM9.05 13H14.95L12 8.6Z"/>
    </Icon>
  );
});

IconMaterialEjectRounded.displayName = 'AmauiIconMaterialEjectRounded';

export default IconMaterialEjectRounded;
