import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackW100'

      short_name='Stack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-400v28H132v-456h456v140h-28v-112H160v400h112Zm100 268v-456h456v456H372Zm28-28h400v-400H400v400Zm200-200Z"/>
    </Icon>
  );
});

IconMaterialStackW100.displayName = 'AmauiIconMaterialStackW100';

export default IconMaterialStackW100;
