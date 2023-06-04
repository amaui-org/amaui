import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnknownMedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnknownMedW100'

      short_name='UnknownMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.15 12.35q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25h6q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25Zm9.675 0q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25h6q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25Z"/>
    </Icon>
  );
});

IconMaterialUnknownMedW100.displayName = 'AmauiIconMaterialUnknownMedW100';

export default IconMaterialUnknownMedW100;
