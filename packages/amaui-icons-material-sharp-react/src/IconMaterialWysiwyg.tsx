import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWysiwyg = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Wysiwyg'

      short_name='Wysiwyg'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm2-2h14V7H5Zm2-7v-2h10v2Zm0 4v-2h6v2Z"/>
    </Icon>
  );
});

IconMaterialWysiwyg.displayName = 'AmauiIconMaterialWysiwyg';

export default IconMaterialWysiwyg;
