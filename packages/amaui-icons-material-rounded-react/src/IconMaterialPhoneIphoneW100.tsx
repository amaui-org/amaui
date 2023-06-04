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
      <path d="M12 19.9q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q12.275 18.5 12 18.5t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Zm-5-3.2h10V5.35H7Zm.8 5q-.65 0-1.075-.425Q6.3 20.85 6.3 20.2V3.8q0-.65.425-1.075Q7.15 2.3 7.8 2.3h8.4q.65 0 1.075.425.425.425.425 1.075v16.4q0 .65-.425 1.075-.425.425-1.075.425ZM7 4.65h10V3.8q0-.3-.25-.55Q16.5 3 16.2 3H7.8q-.3 0-.55.25Q7 3.5 7 3.8ZM7 3v1.65V3Zm0 14.4v2.8q0 .3.25.55.25.25.55.25h8.4q.3 0 .55-.25.25-.25.25-.55v-2.8ZM7 21V17.4 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneW100.displayName = 'AmauiIconMaterialPhoneIphoneW100';

export default IconMaterialPhoneIphoneW100;
