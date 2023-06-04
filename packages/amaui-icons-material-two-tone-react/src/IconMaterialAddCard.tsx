import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCard'

      short_name='AddCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h10v-2H4v-6h18V6C22,4.89,21.11,4,20,4z M20,8H4V6h16V8z M24,17v2 h-3v3h-2v-3h-3v-2h3v-3h2v3H24z"/></g>
    </Icon>
  );
});

IconMaterialAddCard.displayName = 'AmauiIconMaterialAddCard';

export default IconMaterialAddCard;
