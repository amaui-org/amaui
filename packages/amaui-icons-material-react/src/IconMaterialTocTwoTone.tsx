import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTocTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TocTwoTone'
      short_name='Toc'

      {...props}
    >
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/>
    </Icon>
  );
});

IconMaterialTocTwoTone.displayName = 'AmauiIconMaterialTocTwoTone';

export default IconMaterialTocTwoTone;
