import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalLeftFilled'

      short_name='AlignHorizontalLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h2v20Zm4-5v-3h10v3Zm0-7V7h16v3Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalLeftFilled.displayName = 'AmauiIconMaterialAlignHorizontalLeftFilled';

export default IconMaterialAlignHorizontalLeftFilled;
