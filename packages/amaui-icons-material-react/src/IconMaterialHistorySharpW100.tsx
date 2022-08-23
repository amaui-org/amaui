import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHistorySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HistorySharpW100'
      short_name='History'

      {...props}
    >
      <path d="M12 19.7Q10.5 19.7 9.125 19.15Q7.75 18.6 6.675 17.55L7.175 17.05Q8.15 18 9.4 18.5Q10.65 19 12 19Q14.9 19 16.95 16.95Q19 14.9 19 12Q19 9.1 16.95 7.05Q14.9 5 12 5Q9.1 5 7.05 7.05Q5 9.1 5 12L6.7 10.3L7.2 10.8L4.65 13.35L2.1 10.8L2.6 10.3L4.3 12Q4.3 10.4 4.9 9Q5.5 7.6 6.55 6.55Q7.6 5.5 9 4.9Q10.4 4.3 12 4.3Q13.6 4.3 15 4.9Q16.4 5.5 17.45 6.55Q18.5 7.6 19.1 9Q19.7 10.4 19.7 12Q19.7 13.6 19.1 15Q18.5 16.4 17.45 17.45Q16.4 18.5 15 19.1Q13.6 19.7 12 19.7ZM15.25 15.75 11.65 12.15V7H12.35V11.85L15.75 15.25Z"/>
    </Icon>
  );
});

IconMaterialHistorySharpW100.displayName = 'AmauiIconMaterialHistorySharpW100';

export default IconMaterialHistorySharpW100;
