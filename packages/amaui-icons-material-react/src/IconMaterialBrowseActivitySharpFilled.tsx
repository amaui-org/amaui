import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrowseActivitySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivitySharpFilled'
      short_name='BrowseActivity'

      {...props}
    >
      <path d="m12 15 1.4-3.1 3.1-1.4-3.1-1.4L12 6l-1.4 3.1-3.1 1.4 3.1 1.4ZM2 18V3h20v15Zm-1 3v-2h22v2Z"/>
    </Icon>
  );
});

export default IconMaterialBrowseActivitySharpFilled;
