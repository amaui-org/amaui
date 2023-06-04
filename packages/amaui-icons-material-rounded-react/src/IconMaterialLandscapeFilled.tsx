import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeFilled'

      short_name='Landscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18q-.625 0-.9-.55t.1-1.05l4-5.325q.3-.4.8-.4t.8.4l3.1 4.125q.25.35.65.4.4.05.75-.2.325-.25.388-.625.062-.375-.138-.725L10.25 11l2.95-3.925q.3-.4.8-.4t.8.4l7 9.325q.375.5.1 1.05T21 18Z"/>
    </Icon>
  );
});

IconMaterialLandscapeFilled.displayName = 'AmauiIconMaterialLandscapeFilled';

export default IconMaterialLandscapeFilled;
