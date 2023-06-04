import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSegmentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SegmentW100'

      short_name='Segment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 17.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-6-10q-.15 0-.25-.1T3.65 7q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm6 5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialSegmentW100.displayName = 'AmauiIconMaterialSegmentW100';

export default IconMaterialSegmentW100;
