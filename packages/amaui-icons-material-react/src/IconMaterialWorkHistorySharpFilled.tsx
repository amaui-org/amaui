import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWorkHistorySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkHistorySharpFilled'
      short_name='WorkHistory'

      {...props}
    >
      <path d="M2 21V6H8V2H16V6H22V12.275Q21.125 11.65 20.1 11.325Q19.075 11 18 11Q15.1 11 13.05 13.05Q11 15.1 11 18Q11 18.775 11.163 19.538Q11.325 20.3 11.675 21ZM10 6H14V4H10ZM18 23Q15.925 23 14.463 21.538Q13 20.075 13 18Q13 15.925 14.463 14.462Q15.925 13 18 13Q20.075 13 21.538 14.462Q23 15.925 23 18Q23 20.075 21.538 21.538Q20.075 23 18 23ZM19.65 20.35 20.35 19.65 18.5 17.8V15H17.5V18.2Z"/>
    </Icon>
  );
});

IconMaterialWorkHistorySharpFilled.displayName = 'AmauiIconMaterialWorkHistorySharpFilled';

export default IconMaterialWorkHistorySharpFilled;
