import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCoPresentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoPresentFilled'

      short_name='CoPresent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21 21V5H3v8H1V5q0-.825.588-1.413Q2.175 3 3 3h18q.825 0 1.413.587Q23 4.175 23 5v14q0 .825-.587 1.413Q21.825 21 21 21ZM9 14q-1.65 0-2.825-1.175Q5 11.65 5 10q0-1.65 1.175-2.825Q7.35 6 9 6q1.65 0 2.825 1.175Q13 8.35 13 10q0 1.65-1.175 2.825Q10.65 14 9 14Zm-8 8v-2.8q0-.85.438-1.562.437-.713 1.162-1.088 1.55-.775 3.15-1.163Q7.35 15 9 15t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.088Q17 18.35 17 19.2V22Z"/>
    </Icon>
  );
});

IconMaterialCoPresentFilled.displayName = 'AmauiIconMaterialCoPresentFilled';

export default IconMaterialCoPresentFilled;
