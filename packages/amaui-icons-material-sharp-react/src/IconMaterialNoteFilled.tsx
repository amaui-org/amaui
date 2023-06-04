import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoteFilled'

      short_name='Note'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h10l6 6v14Zm9-13h5l-5-5Z"/>
    </Icon>
  );
});

IconMaterialNoteFilled.displayName = 'AmauiIconMaterialNoteFilled';

export default IconMaterialNoteFilled;
