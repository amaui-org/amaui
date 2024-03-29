import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrivacyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivacyFilled'

      short_name='Privacy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.85 7.025q.05 0 .075-.013Q9.95 7 10 7q.825 0 1.413.587Q12 8.175 12 9v.175ZM6.825 4H16q.825 0 1.413.588Q18 5.175 18 6v4.475L22 6.5v11l-4-3.975v1.65l-2-2V6H8.825Zm13.65 19.3-9.55-9.55q-.2.125-.425.188-.225.062-.5.062-.825 0-1.412-.588Q8 12.825 8 12v-1.2L.7 3.5l1.4-1.4 19.8 19.8ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4l2 2H4v12h5.3v-1.05q-1.825-.275-3.062-1.663Q5 13.9 5 12h1.425q0 1.5 1.038 2.537Q8.5 15.575 10 15.575q.75 0 1.387-.275.638-.275 1.138-.775l1.225.775q-.575.65-1.35 1.087-.775.438-1.7.563V18H16v-2l2 2q0 .825-.587 1.413Q16.825 20 16 20Z"/>
    </Icon>
  );
});

IconMaterialPrivacyFilled.displayName = 'AmauiIconMaterialPrivacyFilled';

export default IconMaterialPrivacyFilled;
