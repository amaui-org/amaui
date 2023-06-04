import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCodeBlocksFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeBlocksFilled'

      short_name='CodeBlocks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.6 15.6 1.4-1.425L8.825 12 11 9.825 9.6 8.4 6 12Zm4.8 0L18 12l-3.6-3.6L13 9.825 15.175 12 13 14.175ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialCodeBlocksFilled.displayName = 'AmauiIconMaterialCodeBlocksFilled';

export default IconMaterialCodeBlocksFilled;
