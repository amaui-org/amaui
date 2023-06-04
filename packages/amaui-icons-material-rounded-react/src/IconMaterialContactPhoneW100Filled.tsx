import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactPhoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPhoneW100Filled'

      short_name='ContactPhone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.8 19.2q-.65 0-1.075-.425Q1.3 18.35 1.3 17.7V6.3q0-.65.425-1.075Q2.15 4.8 2.8 4.8h18.4q.65 0 1.075.425.425.425.425 1.075v11.4q0 .65-.425 1.075-.425.425-1.075.425ZM9 14.3q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q9.975 9.6 9 9.6q-.975 0-1.662.687-.688.688-.688 1.663 0 .975.688 1.662.687.688 1.662.688Zm8.625 2.525q.2.2.462.187.263-.012.463-.212l.6-.6q.2-.2.225-.475.025-.275-.15-.5l-.55-.725q-.1-.15-.262-.225-.163-.075-.338-.075H16.7q-.2-.6-.275-1.113-.075-.512-.075-1.087t.075-1.062q.075-.488.275-1.138h1.375q.175 0 .338-.075.162-.075.262-.225l.55-.725q.175-.225.15-.5Q19.35 8 19.15 7.8l-.6-.6q-.2-.2-.463-.213-.262-.012-.462.188-.95.95-1.462 2.2-.513 1.25-.513 2.625t.513 2.625q.512 1.25 1.462 2.2ZM3.55 18.5h10.9Q13.4 17.3 12 16.55q-1.4-.75-3-.75t-3 .75q-1.4.75-2.45 1.95Z"/>
    </Icon>
  );
});

IconMaterialContactPhoneW100Filled.displayName = 'AmauiIconMaterialContactPhoneW100Filled';

export default IconMaterialContactPhoneW100Filled;
