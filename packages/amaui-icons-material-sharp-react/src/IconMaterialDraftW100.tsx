import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDraftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftW100'

      short_name='Draft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h9.35l4.05 4.05V20.7Zm9-13V4H6v16h12V7.7ZM6 4v3.7V4v16Z"/>
    </Icon>
  );
});

IconMaterialDraftW100.displayName = 'AmauiIconMaterialDraftW100';

export default IconMaterialDraftW100;
