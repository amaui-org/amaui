import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlatwareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlatwareW100Filled'

      short_name='Flatware'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.55 20.35V10.5q-.975-.45-1.488-1.375Q10.55 8.2 10.55 7.1q0-1.325.588-2.388.587-1.062 1.762-1.062t1.763 1.062q.587 1.063.587 2.388 0 1.1-.512 2.025-.513.925-1.488 1.375v9.85Zm4.9 0V3.7q1.1.275 1.75 1.2.65.925.65 2.1v5.35h-1.7v8Zm-11.4 0V10.5q-.8-.05-1.35-.575Q4.15 9.4 4.15 8.6V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65h1.2V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65h1.2V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.6q0 .8-.55 1.325-.55.525-1.35.575v9.85Z"/>
    </Icon>
  );
});

IconMaterialFlatwareW100Filled.displayName = 'AmauiIconMaterialFlatwareW100Filled';

export default IconMaterialFlatwareW100Filled;
