import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneIphoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneIphoneW100'

      short_name='PhoneIphone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.9q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q12.275 18.5 12 18.5t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Zm-5.7 1.8V2.3h11.4v19.4Zm.7-5h10V5.35H7ZM7 21h10v-3.6H7ZM7 4.65h10V3H7Zm0 0V3v1.65ZM7 21v-3.6V21Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneW100.displayName = 'AmauiIconMaterialPhoneIphoneW100';

export default IconMaterialPhoneIphoneW100;
