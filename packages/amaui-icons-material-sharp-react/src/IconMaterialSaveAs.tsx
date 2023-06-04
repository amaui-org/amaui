import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSaveAs = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveAs'

      short_name='SaveAs'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h14l4 4v5.4l-2 2V7.825L16.175 5H5v14h9.4l-2 2Zm9-3q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18Zm-6-8h9V6H6Zm9 13v-1.775l5-4.975 1.75 1.775L16.775 23Zm7.4-5.65-1.775-1.75 1.225-1.225 1.75 1.775ZM5 19V5v9.4Z"/>
    </Icon>
  );
});

IconMaterialSaveAs.displayName = 'AmauiIconMaterialSaveAs';

export default IconMaterialSaveAs;
