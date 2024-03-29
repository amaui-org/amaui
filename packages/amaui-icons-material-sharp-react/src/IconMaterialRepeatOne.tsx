import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRepeatOne = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOne'

      short_name='RepeatOne'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 15v-4.5H10V9h3v6ZM7 22l-4-4 4-4 1.4 1.45L6.85 17H17v-4h2v6H6.85l1.55 1.55ZM5 11V5h12.15L15.6 3.45 17 2l4 4-4 4-1.4-1.45L17.15 7H7v4Z"/>
    </Icon>
  );
});

IconMaterialRepeatOne.displayName = 'AmauiIconMaterialRepeatOne';

export default IconMaterialRepeatOne;
