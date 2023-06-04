import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRouterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RouterW100'

      short_name='Router'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.875 19.7v-5.4h11.35v-4h.7v4h3.35v5.4Zm.7-.7h14v-4h-14Zm2.7-1.3v-1.4h-1.4v1.4Zm2.1 0h1.4v-1.4h-1.4Zm3.5 0h1.4v-1.4h-1.4Zm.5-9.25-.5-.5q.65-.6 1.3-.875t1.4-.275q.75 0 1.4.275.65.275 1.3.875l-.5.5q-.45-.45-.987-.7-.538-.25-1.213-.25t-1.212.25q-.538.25-.988.7Zm-2.5-2.5-.5-.5q1.025-1.025 2.338-1.588 1.312-.562 2.862-.562t2.863.562q1.312.563 2.337 1.588l-.5.5q-.825-.825-2.012-1.388Q17.075 4 15.575 4q-1.5 0-2.687.562-1.188.563-2.013 1.388ZM4.575 19v-4 4Z"/>
    </Icon>
  );
});

IconMaterialRouterW100.displayName = 'AmauiIconMaterialRouterW100';

export default IconMaterialRouterW100;
