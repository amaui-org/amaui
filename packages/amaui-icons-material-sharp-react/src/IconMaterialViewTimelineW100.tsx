import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewTimelineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewTimelineW100'

      short_name='ViewTimeline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.7 16.35h4.6v-.7H6.7Zm6-8h4.6v-.7h-4.6Zm-3 4h4.6v-.7H9.7ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialViewTimelineW100.displayName = 'AmauiIconMaterialViewTimelineW100';

export default IconMaterialViewTimelineW100;
