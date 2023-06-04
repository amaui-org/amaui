import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDraft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Draft'

      short_name='Draft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h10l6 6v14Zm9-13V4H6v16h12V9ZM6 4v5-5 16Z"/>
    </Icon>
  );
});

IconMaterialDraft.displayName = 'AmauiIconMaterialDraft';

export default IconMaterialDraft;
