import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAodTablet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTablet'

      short_name='AodTablet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.75 11.5q-.325 0-.537-.213Q8 11.075 8 10.75q0-.325.213-.538Q8.425 10 8.75 10h6.5q.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213Zm1 3q-.325 0-.537-.213Q9 14.075 9 13.75q0-.325.213-.538Q9.425 13 9.75 13h4.5q.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213ZM3 20q-.825 0-1.412-.587Q1 18.825 1 18V6q0-.825.588-1.412Q2.175 4 3 4h18q.825 0 1.413.588Q23 5.175 23 6v12q0 .825-.587 1.413Q21.825 20 21 20Zm3-2h12V6H6ZM4 6H3v12h1Zm16 0v12h1V6Zm1 0h-1 1ZM3 6h1-1Z"/>
    </Icon>
  );
});

IconMaterialAodTablet.displayName = 'AmauiIconMaterialAodTablet';

export default IconMaterialAodTablet;
