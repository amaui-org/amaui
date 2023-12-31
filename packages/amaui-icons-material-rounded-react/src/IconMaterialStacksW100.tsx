import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStacksW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StacksW100'

      short_name='Stacks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-439q-7 0-13.5-2t-13.5-5L145-603q-8-5-12-12t-4-15q0-8 4-15t12-12l308-157q7-3 13.5-5t13.5-2q7 0 13.5 2t13.5 5l309 157q8 5 12 12t4 15q0 8-4 15t-12 12L507-446q-7 3-13.5 5t-13.5 2Zm0-25 330-166-330-166-329 166 329 166Zm1-166Zm-1 316 330-167q3-2 12 1 4 2 5.5 5t1.5 7q0 4-1.5 7t-5.5 5L507-296q-7 3-13.5 5t-13.5 2q-7 0-13.5-2t-13.5-5L139-456q-4-2-6-5t-2-7q0-4 2-7t6-5q3-2 6-2.5t6 1.5l329 167Zm0 150 330-167q3-2 12 1 4 2 5.5 5t1.5 7q0 4-1.5 7t-5.5 5L507-146q-7 3-13.5 5t-13.5 2q-7 0-13.5-2t-13.5-5L139-306q-4-2-6-5t-2-7q0-4 2-7t6-5q3-2 6-2.5t6 1.5l329 167Z"/>
    </Icon>
  );
});

IconMaterialStacksW100.displayName = 'AmauiIconMaterialStacksW100';

export default IconMaterialStacksW100;
