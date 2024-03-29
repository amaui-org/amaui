import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCoPresent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoPresent'

      short_name='CoPresent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21 21V5H3v8H1V3h22v18ZM9 14q-1.65 0-2.825-1.175Q5 11.65 5 10q0-1.65 1.175-2.825Q7.35 6 9 6q1.65 0 2.825 1.175Q13 8.35 13 10q0 1.65-1.175 2.825Q10.65 14 9 14Zm0-2q.825 0 1.413-.588Q11 10.825 11 10t-.587-1.413Q9.825 8 9 8q-.825 0-1.412.587Q7 9.175 7 10q0 .825.588 1.412Q8.175 12 9 12ZM1 22v-2.8q0-.85.438-1.562.437-.713 1.162-1.088 1.55-.775 3.15-1.163Q7.35 15 9 15t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.088Q17 18.35 17 19.2V22Zm2-2h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q10.4 17 9 17t-2.775.337Q4.85 17.675 3.5 18.35q-.225.125-.362.35-.138.225-.138.5Zm6-10Zm0 10Z"/>
    </Icon>
  );
});

IconMaterialCoPresent.displayName = 'AmauiIconMaterialCoPresent';

export default IconMaterialCoPresent;
