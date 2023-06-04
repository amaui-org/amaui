import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveDoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveDoneW100Filled'

      short_name='RemoveDone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.425 20.55-6.4-6.4-2.225 2.225q-.125.125-.25.175-.125.05-.275.05-.15 0-.275-.05-.125-.05-.25-.175L7.775 12.4q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l4 4 2.2-2.25-9.9-9.9q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l16.85 16.85q.125.125.113.25-.013.125-.113.225-.125.1-.25.1t-.25-.125Zm-4.5-8.3-.5-.5 4.8-4.8q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25Zm-2.85-2.8-.5-.5 2-2q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25Zm-7.45 7.15q-.15 0-.275-.05-.125-.05-.25-.175L2.125 12.4Q2 12.275 2 12.15t.125-.25q.125-.125.25-.125t.25.125l4 4 .9-.9.5.5-.875.875q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialRemoveDoneW100Filled.displayName = 'AmauiIconMaterialRemoveDoneW100Filled';

export default IconMaterialRemoveDoneW100Filled;
