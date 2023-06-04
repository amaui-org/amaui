import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShortStayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortStayW100Filled'

      short_name='ShortStay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.35 16.85V14.5q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.475q0 .025.1.275l1.675 1.675q.1.1.25.1t.25-.1q.1-.1.1-.25t-.1-.25ZM9.8 9q-.575 0-.962-.387-.388-.388-.388-.963t.388-.962Q9.225 6.3 9.8 6.3t.962.388q.388.387.388.962t-.388.963Q10.375 9 9.8 9ZM17 21.35q-1.8 0-3.075-1.275Q12.65 18.8 12.65 17q0-1.8 1.275-3.075Q15.2 12.65 17 12.65q1.8 0 3.075 1.275Q21.35 15.2 21.35 17q0 1.8-1.275 3.075Q18.8 21.35 17 21.35ZM6.1 20.7q-.625 0-1.062-.438Q4.6 19.825 4.6 19.2V4.8q0-.625.438-1.063Q5.475 3.3 6.1 3.3h7.4q.625 0 1.062.437Q15 4.175 15 4.8v5.65q-.2.05-.362.112-.163.063-.338.138V4.8q0-.35-.225-.575Q13.85 4 13.5 4H6.1q-.35 0-.575.225Q5.3 4.45 5.3 4.8v7.375q.375-.425.888-.65Q6.7 11.3 7.3 11.3h5q.2 0 .375.025t.375.075q-1.125.8-1.825 1.875t-.95 2.375h-.125V14q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v1.65H7.8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h1.65V18q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-1q0 1 .288 1.938.287.937.812 1.762Z"/>
    </Icon>
  );
});

IconMaterialShortStayW100Filled.displayName = 'AmauiIconMaterialShortStayW100Filled';

export default IconMaterialShortStayW100Filled;
