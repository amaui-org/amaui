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
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M9,18h12v-2H9V18z M3,6v2h18V6H3z M9,13h12v-2H9V13z"/></g>
    </Icon>
  );
});

IconMaterialSegment.displayName = 'AmauiIconMaterialSegment';

export default IconMaterialSegment;
