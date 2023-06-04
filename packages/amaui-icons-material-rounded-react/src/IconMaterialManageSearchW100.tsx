import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialManageSearchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageSearchW100'

      short_name='ManageSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.85 8.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4.7q-.15 0-.25-.1T3.5 13q0-.15.1-.25t.25-.1h3.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm15.9 4.5L16.2 14.3q-.5.4-1.1.625-.6.225-1.25.225-1.55 0-2.625-1.075T10.15 11.45q0-1.55 1.075-2.625T13.85 7.75q1.55 0 2.625 1.075t1.075 2.625q0 .65-.225 1.25t-.625 1.1l3.55 3.55q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Zm-5.9-3.4q1.25 0 2.125-.875t.875-2.125q0-1.25-.875-2.125T13.85 8.45q-1.25 0-2.125.875t-.875 2.125q0 1.25.875 2.125t2.125.875Zm-10 3.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialManageSearchW100.displayName = 'AmauiIconMaterialManageSearchW100';

export default IconMaterialManageSearchW100;
