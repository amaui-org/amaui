import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryFilled'

      short_name='Dry'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 23V12.7L9.125 5l1.625 1.7L8.875 10H20v2.5h-8v1h10V16H12v1h9v2.5h-9v1h7V23ZM14.975 9l.125-.6q.125-.6-.087-1.2-.213-.6-.663-1.05-.75-.775-1.087-1.738-.338-.962-.213-1.987L13.1 2H15l-.1.6q-.1.6.063 1.175.162.575.612 1.025.75.775 1.125 1.762.375.988.25 2.013L16.9 9Zm4 0 .125-.6q.125-.6-.087-1.2-.213-.6-.663-1.05-.75-.775-1.087-1.738-.338-.962-.213-1.987L17.1 2H19l-.1.6q-.1.6.062 1.175.163.575.613 1.025.75.775 1.125 1.762.375.988.25 2.013L20.9 9Z"/>
    </Icon>
  );
});

IconMaterialDryFilled.displayName = 'AmauiIconMaterialDryFilled';

export default IconMaterialDryFilled;
