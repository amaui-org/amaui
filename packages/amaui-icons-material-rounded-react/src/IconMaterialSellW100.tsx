import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSellW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SellW100'

      short_name='Sell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 20.7q-.125 0-.262-.05-.138-.05-.238-.15l-8.8-8.8q-.125-.125-.187-.262Q3.3 11.3 3.3 11.15V4q0-.275.213-.488Q3.725 3.3 4 3.3h7.15q.125 0 .263.05.137.05.237.15l8.8 8.8q.225.225.238.537.012.313-.188.513l-7.15 7.15q-.1.1-.237.15-.138.05-.263.05Zm0-.7L20 12.85 11.15 4H4v7.15ZM6.5 7.35q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25ZM4 4Z"/>
    </Icon>
  );
});

IconMaterialSellW100.displayName = 'AmauiIconMaterialSellW100';

export default IconMaterialSellW100;
