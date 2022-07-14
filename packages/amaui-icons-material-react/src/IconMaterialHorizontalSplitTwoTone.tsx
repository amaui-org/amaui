import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalSplitTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitTwoTone'
      short_name='HorizontalSplit'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 15v2H5v-2h14m2-10H3v2h18V5zm0 4H3v2h18V9zm0 4H3v6h18v-6z"/><path d="M5 15h14v2H5z" opacity=".3"/>
    </Icon>
  );
});

export default IconMaterialHorizontalSplitTwoTone;
