import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditW100'

      short_name='Edit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.4 19h.975L16.65 8.725l-.975-.975L5.4 18.025ZM18.15 8.225 16.175 6.25l1.175-1.175q.2-.2.5-.2t.5.2l.975.975q.2.2.2.5t-.2.5ZM5.45 19.7q-.325 0-.538-.213-.212-.212-.212-.537v-.925q0-.15.05-.275.05-.125.175-.25l10.75-10.75 1.975 1.975L6.9 19.475q-.125.125-.25.175-.125.05-.275.05Zm10.7-11.475-.475-.475.975.975Z"/>
    </Icon>
  );
});

IconMaterialEditW100.displayName = 'AmauiIconMaterialEditW100';

export default IconMaterialEditW100;
