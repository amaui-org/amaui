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
      <path d="M12 19.9q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q12.275 18.5 12 18.5t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Zm-5.7 1.8V2.3h11.4v19.4Zm.7-5h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneW100Filled.displayName = 'AmauiIconMaterialPhoneIphoneW100Filled';

export default IconMaterialPhoneIphoneW100Filled;
