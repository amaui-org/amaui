import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChildCareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChildCareW100Filled'

      short_name='ChildCare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.35 11.35q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm-4.7 0q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25ZM12 16q1.125 0 2.075-.538.95-.537 1.575-1.462h-7.3q.625.925 1.575 1.462Q10.875 16 12 16Zm0 3.7q-1.6 0-3-.6t-2.45-1.65Q5.5 16.4 4.9 15q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 5.5 9 4.9q1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65Q18.5 7.6 19.1 9q.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45Q16.4 18.5 15 19.1q-1.4.6-3 .6Zm.4-11.6q.425 0 .763-.113.337-.112.337-.387 0-.15-.087-.25-.088-.1-.213-.1-.2 0-.35.075-.15.075-.45.075-.675 0-1.162-.488-.488-.487-.488-1.162v-.375q0-.125.05-.275-.175.05-.325.075-.15.025-.325.075-.05.125-.075.25-.025.125-.025.25 0 .975.688 1.662.687.688 1.662.688Z"/>
    </Icon>
  );
});

IconMaterialChildCareW100Filled.displayName = 'AmauiIconMaterialChildCareW100Filled';

export default IconMaterialChildCareW100Filled;
