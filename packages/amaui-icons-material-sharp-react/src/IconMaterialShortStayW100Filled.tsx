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
      <path d="M9.8 9q-.575 0-.962-.387-.388-.388-.388-.963t.388-.962Q9.225 6.3 9.8 6.3t.962.388q.388.387.388.962t-.388.963Q10.375 9 9.8 9ZM17 21.35q-1.8 0-3.075-1.275Q12.65 18.8 12.65 17q0-1.8 1.275-3.075Q15.2 12.65 17 12.65q1.8 0 3.075 1.275Q21.35 15.2 21.35 17q0 1.8-1.275 3.075Q18.8 21.35 17 21.35Zm1.675-2.175.5-.5-1.825-1.825v-2.7h-.7v3ZM4.6 20.7V3.3H15v7.15q-.2.05-.362.112-.163.063-.338.138V4h-9v8.175q.375-.425.888-.65Q6.7 11.3 7.3 11.3h5q.2 0 .375.025t.375.075q-1.125.8-1.825 1.875t-.95 2.375h-.125v-2h-.7v2h-2v.7h2v2h.7V17q0 1 .288 1.938.287.937.812 1.762Z"/>
    </Icon>
  );
});

IconMaterialShortStayW100Filled.displayName = 'AmauiIconMaterialShortStayW100Filled';

export default IconMaterialShortStayW100Filled;
