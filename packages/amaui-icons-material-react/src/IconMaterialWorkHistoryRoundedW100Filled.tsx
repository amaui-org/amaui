import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWorkHistoryRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkHistoryRoundedW100Filled'
      short_name='WorkHistory'

      {...props}
    >
      <path d="M12.3 18Q12.3 18.425 12.363 18.85Q12.425 19.275 12.55 19.7H4.8Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V8.8Q3.3 8.15 3.725 7.725Q4.15 7.3 4.8 7.3H9.3V6.1Q9.3 5.45 9.725 5.025Q10.15 4.6 10.8 4.6H13.2Q13.85 4.6 14.275 5.025Q14.7 5.45 14.7 6.1V7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V12.975Q20.075 12.625 19.4 12.462Q18.725 12.3 18 12.3Q15.625 12.3 13.963 13.962Q12.3 15.625 12.3 18ZM10 7.3H14V6.1Q14 5.75 13.775 5.525Q13.55 5.3 13.2 5.3H10.8Q10.45 5.3 10.225 5.525Q10 5.75 10 6.1ZM18 21.7Q16.45 21.7 15.375 20.625Q14.3 19.55 14.3 18Q14.3 16.45 15.375 15.375Q16.45 14.3 18 14.3Q19.55 14.3 20.625 15.375Q21.7 16.45 21.7 18Q21.7 19.55 20.625 20.625Q19.55 21.7 18 21.7ZM19.65 20.15 20.15 19.65 18.35 17.85V15.15H17.65V18.15Z"/>
    </Icon>
  );
});

IconMaterialWorkHistoryRoundedW100Filled.displayName = 'AmauiIconMaterialWorkHistoryRoundedW100Filled';

export default IconMaterialWorkHistoryRoundedW100Filled;
