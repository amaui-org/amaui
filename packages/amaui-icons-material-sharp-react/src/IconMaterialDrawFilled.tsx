import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDrawFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrawFilled'

      short_name='Draw'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 21v-2h1q1.175 0 2.087-.462Q17 18.075 17 17.5q0-.35-.325-.65-.325-.3-.9-.55l1.475-1.475q.8.475 1.275 1.125.475.65.475 1.55 0 1.65-1.575 2.575Q15.85 21 14 21Zm-8.425-7.65q-.725-.425-1.15-.988Q3 11.8 3 11q0-1.05.775-1.763.775-.712 2.775-1.587 1.575-.725 2.012-1.013Q9 6.35 9 6q0-.4-.488-.7Q8.025 5 7 5q-.875 0-1.438.325Q5 5.65 5 6H3q0-1.2 1.1-2.1Q5.2 3 7 3q1.8 0 2.9.812Q11 4.625 11 6q0 .975-.725 1.75T7.35 9.475q-1.45.625-1.9.925-.45.3-.45.6 0 .225.287.438.288.212.788.412ZM18.85 10.4 14.6 6.15l2.475-2.475 4.25 4.25ZM4 21v-4.25l9.2-9.2 4.25 4.25-9.2 9.2Z"/>
    </Icon>
  );
});

IconMaterialDrawFilled.displayName = 'AmauiIconMaterialDrawFilled';

export default IconMaterialDrawFilled;
