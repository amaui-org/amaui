import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignStretchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignStretchW100'

      short_name='AlignStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M306 470V256H132v-28h696v28H654v214H306ZM132 924v-28h174V682h348v214h174v28H132Z"/>
    </Icon>
  );
});

IconMaterialAlignStretchW100.displayName = 'AmauiIconMaterialAlignStretchW100';

export default IconMaterialAlignStretchW100;
