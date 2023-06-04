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
      <path d="M2 20V4h20v8H4v6h10v2ZM4 8h16V6H4Zm15 14v-3h-3v-2h3v-3h2v3h3v2h-3v3ZM4 18V6v12Z"/>
    </Icon>
  );
});

IconMaterialAddCard.displayName = 'AmauiIconMaterialAddCard';

export default IconMaterialAddCard;
