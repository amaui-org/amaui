import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventNoteFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventNoteFilled'

      short_name='EventNote'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 14v-2h10v2Zm0 4v-2h7v2Zm-4 4V4h3V2h2v2h8V2h2v2h3v18Zm2-2h14V10H5Z"/>
    </Icon>
  );
});

IconMaterialEventNoteFilled.displayName = 'AmauiIconMaterialEventNoteFilled';

export default IconMaterialEventNoteFilled;
