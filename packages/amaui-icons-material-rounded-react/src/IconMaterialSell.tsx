import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSell = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sell'

      short_name='Sell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.85 22q-.425 0-.8-.163-.375-.162-.65-.437l-8.8-8.8q-.275-.275-.437-.65Q2 11.575 2 11.15V4q0-.825.588-1.413Q3.175 2 4 2h7.15q.425 0 .8.162.375.163.65.438l8.8 8.825q.575.575.575 1.412 0 .838-.575 1.413l-7.15 7.15q-.275.275-.637.437-.363.163-.763.163Zm-.025-2 7.15-7.15L11.15 4H4v7.15ZM6.5 8q.625 0 1.062-.438Q8 7.125 8 6.5t-.438-1.062Q7.125 5 6.5 5t-1.062.438Q5 5.875 5 6.5t.438 1.062Q5.875 8 6.5 8ZM4 4Z"/>
    </Icon>
  );
});

IconMaterialSell.displayName = 'AmauiIconMaterialSell';

export default IconMaterialSell;
