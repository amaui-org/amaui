import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneW100'

      short_name='Done'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.55 16.8q-.15 0-.275-.05-.125-.05-.25-.175L5.05 12.6q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l4 4 8.9-8.9q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-8.875 8.875q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialDoneW100.displayName = 'AmauiIconMaterialDoneW100';

export default IconMaterialDoneW100;
