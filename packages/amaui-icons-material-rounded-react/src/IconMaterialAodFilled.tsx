import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodFilled'

      short_name='Aod'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.75 11.5q-.325 0-.537-.213Q8 11.075 8 10.75q0-.325.213-.538Q8.425 10 8.75 10h6.5q.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213Zm1 3q-.325 0-.537-.213Q9 14.075 9 13.75q0-.325.213-.538Q9.425 13 9.75 13h4.5q.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialAodFilled.displayName = 'AmauiIconMaterialAodFilled';

export default IconMaterialAodFilled;
