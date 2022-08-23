import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWorkHistorySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkHistorySharpW100Filled'
      short_name='WorkHistory'

      {...props}
    >
      <path d="M3.3 19.7V7.3H9.3V4.6H14.7V7.3H20.7V12.975Q20.075 12.625 19.4 12.462Q18.725 12.3 18 12.3Q15.625 12.3 13.963 13.962Q12.3 15.625 12.3 18Q12.3 18.425 12.363 18.85Q12.425 19.275 12.55 19.7ZM10 7.3H14V5.3H10ZM18 21.7Q16.45 21.7 15.375 20.625Q14.3 19.55 14.3 18Q14.3 16.45 15.375 15.375Q16.45 14.3 18 14.3Q19.55 14.3 20.625 15.375Q21.7 16.45 21.7 18Q21.7 19.55 20.625 20.625Q19.55 21.7 18 21.7ZM19.65 20.15 20.15 19.65 18.35 17.85V15.15H17.65V18.15Z"/>
    </Icon>
  );
});

IconMaterialWorkHistorySharpW100Filled.displayName = 'AmauiIconMaterialWorkHistorySharpW100Filled';

export default IconMaterialWorkHistorySharpW100Filled;
