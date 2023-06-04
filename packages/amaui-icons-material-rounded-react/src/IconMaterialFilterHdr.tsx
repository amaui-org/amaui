import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterHdr = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterHdr'

      short_name='FilterHdr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18q-.625 0-.9-.55t.1-1.05l4-5.325q.3-.4.8-.4t.8.4L11.5 16H19l-5-6.65-2.5 3.3L10.25 11l2.95-3.925q.3-.4.8-.4t.8.4l7 9.325q.375.5.1 1.05T21 18Zm11.025-2ZM5 16h4l-2-2.675Zm0 0h4Z"/>
    </Icon>
  );
});

IconMaterialFilterHdr.displayName = 'AmauiIconMaterialFilterHdr';

export default IconMaterialFilterHdr;
