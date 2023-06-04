import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignVerticalTopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalTopW100'

      short_name='AlignVerticalTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.9 20.05V7.375h1.75V20.05Zm6.45-6V7.375h1.75v6.675ZM3.3 4.625v-.7h17.4v.7Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalTopW100.displayName = 'AmauiIconMaterialAlignVerticalTopW100';

export default IconMaterialAlignVerticalTopW100;
