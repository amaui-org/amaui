import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRightFilled'

      short_name='SwipeRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.1 7q-.475 0-.7-.3-.225-.3-.025-.7.95-1.925 3.463-3.463Q8.35 1 12 1q2.425 0 4.587.8 2.163.8 3.913 2.225V2.75q0-.325.212-.538Q20.925 2 21.25 2q.325 0 .538.212.212.213.212.538V6q0 .425-.288.713Q21.425 7 21 7h-3.25q-.325 0-.538-.213Q17 6.575 17 6.25q0-.325.212-.537.213-.213.538-.213h2.15q-1.6-1.4-3.612-2.2-2.013-.8-4.288-.8-3.325 0-5.4 1.312Q4.525 5.125 3.775 6.55q-.1.2-.25.325T3.1 7Zm8.1 16q-.45 0-.912-.163-.463-.162-.738-.437l-3.875-4.075q-.275-.275-.287-.7-.013-.425.212-.75.175-.25.475-.363.3-.112.675-.012l3.25.75V6.5q0-.625.438-1.062Q10.875 5 11.5 5t1.062.438Q13 5.875 13 6.5v6h.9q.2 0 .45.05t.45.15l4.1 2.05q.575.275.875.863.3.587.2 1.212l-.625 4.45q-.125.75-.675 1.237-.55.488-1.3.488Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightFilled.displayName = 'AmauiIconMaterialSwipeRightFilled';

export default IconMaterialSwipeRightFilled;
