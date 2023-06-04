import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSegment = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Segment'

      short_name='Segment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 18v-2h12v2Zm0-5v-2h12v2ZM3 8V6h18v2Z"/>
    </Icon>
  );
});

IconMaterialSegment.displayName = 'AmauiIconMaterialSegment';

export default IconMaterialSegment;
