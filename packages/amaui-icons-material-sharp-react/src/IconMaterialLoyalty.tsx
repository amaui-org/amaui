import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLoyalty = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Loyalty'

      short_name='Loyalty'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13 17.5 3.5-3.5q.275-.275.438-.65.162-.375.162-.8 0-.85-.6-1.45t-1.45-.6q-.475 0-.937.275-.463.275-1.113.925-.75-.7-1.175-.95-.425-.25-.875-.25-.85 0-1.45.6t-.6 1.45q0 .425.162.8.163.375.438.65Zm-.175 5.325L2 12V2h10l10.8 10.85Zm0-2.825 7.15-7.15L11.15 4H4v7.15ZM6.5 8q.625 0 1.062-.438Q8 7.125 8 6.5t-.438-1.062Q7.125 5 6.5 5t-1.062.438Q5 5.875 5 6.5t.438 1.062Q5.875 8 6.5 8ZM4 4Z"/>
    </Icon>
  );
});

IconMaterialLoyalty.displayName = 'AmauiIconMaterialLoyalty';

export default IconMaterialLoyalty;
