import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewTimelineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewTimelineW100Filled'

      short_name='ViewTimeline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.7 16.35h4.6v-.7H6.7Zm6-8h4.6v-.7h-4.6Zm-3 4h4.6v-.7H9.7ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialViewTimelineW100Filled.displayName = 'AmauiIconMaterialViewTimelineW100Filled';

export default IconMaterialViewTimelineW100Filled;
