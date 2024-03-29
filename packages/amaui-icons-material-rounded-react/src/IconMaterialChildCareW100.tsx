import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChildCareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChildCareW100'

      short_name='ChildCare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.35 11.35q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25Zm-4.7 0q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25ZM12 16q-1.125 0-2.075-.538-.95-.537-1.575-1.462h7.3q-.625.925-1.575 1.462Q13.125 16 12 16Zm0 3.7q-1.6 0-3-.6t-2.45-1.65Q5.5 16.4 4.9 15q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 5.5 9 4.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q18.5 7.6 19.1 9q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45Q16.4 18.5 15 19.1q-1.4.6-3 .6Zm0-.7q2.9 0 4.95-2.05Q19 14.9 19 12q0-2.9-2.05-4.95Q14.9 5 12 5q-.3 0-.612.025-.313.025-.588.075-.05.2-.05.325v.325q0 .675.488 1.162.487.488 1.162.488.3 0 .45-.075.15-.075.35-.075.125 0 .213.1.087.1.087.25 0 .275-.337.387-.338.113-.763.113-.975 0-1.662-.688-.688-.687-.688-1.662v-.225q0-.1.05-.25-2.2.6-3.65 2.437Q5 9.55 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm0-7Z"/>
    </Icon>
  );
});

IconMaterialChildCareW100.displayName = 'AmauiIconMaterialChildCareW100';

export default IconMaterialChildCareW100;
