import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignVerticalBottom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalBottom'

      short_name='AlignVerticalBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M22,22H2v-2h20V22z M10,2H7v16h3V2z M17,8h-3v10h3V8z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalBottom.displayName = 'AmauiIconMaterialAlignVerticalBottom';

export default IconMaterialAlignVerticalBottom;
