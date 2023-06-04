import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneIphoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneIphoneW100Filled'

      short_name='PhoneIphone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.9q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q12.275 18.5 12 18.5t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Zm-5-3.2h10V5.35H7Zm.8 5q-.65 0-1.075-.425Q6.3 20.85 6.3 20.2V3.8q0-.65.425-1.075Q7.15 2.3 7.8 2.3h8.4q.65 0 1.075.425.425.425.425 1.075v16.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneW100Filled.displayName = 'AmauiIconMaterialPhoneIphoneW100Filled';

export default IconMaterialPhoneIphoneW100Filled;
