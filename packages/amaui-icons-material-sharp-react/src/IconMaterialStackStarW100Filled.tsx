import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackStarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackStarW100Filled'

      short_name='StackStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m533-263 67-41 67 41-18-77 59-50-77.143-6.645L600-469l-30.857 72.355L492-390l59 50-18 77ZM272-400v28H132v-456h456v140h-28v-112H160v400h112Zm100 268v-456h456v456H372Z"/>
    </Icon>
  );
});

IconMaterialStackStarW100Filled.displayName = 'AmauiIconMaterialStackStarW100Filled';

export default IconMaterialStackStarW100Filled;
