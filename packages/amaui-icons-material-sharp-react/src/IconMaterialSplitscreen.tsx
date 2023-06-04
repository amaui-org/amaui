import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Splitscreen'

      short_name='Splitscreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 9h12V4H6Zm-2 2V2h16v9Zm2 9h12v-5H6Zm-2 2v-9h16v9ZM6 9V4v5Zm0 11v-5 5Z"/>
    </Icon>
  );
});

IconMaterialSplitscreen.displayName = 'AmauiIconMaterialSplitscreen';

export default IconMaterialSplitscreen;
