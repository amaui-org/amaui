import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlexNoWrap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexNoWrap'

      short_name='FlexNoWrap'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M40 776V376h240v400H40Zm320 0V376h240v400H360Zm320 0V376h240v400H680Zm-560-80h80V456h-80v240Zm640 0h80V456h-80v240Z"/>
    </Icon>
  );
});

IconMaterialFlexNoWrap.displayName = 'AmauiIconMaterialFlexNoWrap';

export default IconMaterialFlexNoWrap;
