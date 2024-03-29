import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPropaneTank = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PropaneTank'

      short_name='PropaneTank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22q-1.65 0-2.825-1.175Q4 19.65 4 18v-8q0-1.425.85-2.475T7 6.125V4q0-.825.588-1.413Q8.175 2 9 2h6q.825 0 1.413.587Q17 3.175 17 4v2.125q1.3.35 2.15 1.4Q20 8.575 20 10v8q0 1.65-1.175 2.825Q17.65 22 16 22Zm-2-9h12v-3q0-.825-.587-1.413Q16.825 8 16 8H8q-.825 0-1.412.587Q6 9.175 6 10Zm2 7h8q.825 0 1.413-.587Q18 18.825 18 18v-3H6v3q0 .825.588 1.413Q7.175 20 8 20Zm4-7Zm0 2Zm0-1Zm1-8h2V4H9v2h2q0-.425.288-.713Q11.575 5 12 5t.713.287Q13 5.575 13 6Z"/>
    </Icon>
  );
});

IconMaterialPropaneTank.displayName = 'AmauiIconMaterialPropaneTank';

export default IconMaterialPropaneTank;
