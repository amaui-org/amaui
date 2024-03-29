import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStylerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StylerFilled'

      short_name='Styler'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22v-6H5.4q-.975 0-1.688-.713Q3 14.575 3 13.6q0-.725.388-1.338.387-.612 1.062-.912L11 8.45V7.8q-.875-.3-1.438-1.063Q9 5.975 9 5q0-1.275.863-2.138Q10.725 2 12 2q1.25 0 2.125.875T15 5h-2q0-.425-.287-.713Q12.425 4 12 4t-.712.287Q11 4.575 11 5t.288.713Q11.575 6 12 6t.713.287Q13 6.575 13 7v1.45l6.55 2.9q.675.3 1.063.912.387.613.387 1.338 0 .975-.712 1.687Q19.575 16 18.6 16H17v6Zm-1.6-8H7v-1h10v1h1.6q.225 0 .313-.15.087-.15.087-.3 0-.125-.062-.213-.063-.087-.188-.137l-6.75-3-6.75 3q-.125.05-.188.137Q5 13.425 5 13.55q0 .2.1.325t.3.125Z"/>
    </Icon>
  );
});

IconMaterialStylerFilled.displayName = 'AmauiIconMaterialStylerFilled';

export default IconMaterialStylerFilled;
