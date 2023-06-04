import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCardW100'

      short_name='AddCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v5.65H4V18h8.95v.7ZM4 9.05h16V6H4Zm15.65 12.3v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3ZM4 18V6v12Z"/>
    </Icon>
  );
});

IconMaterialAddCardW100.displayName = 'AmauiIconMaterialAddCardW100';

export default IconMaterialAddCardW100;
