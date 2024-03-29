import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCampingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingFilled'

      short_name='Camping'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21v-3q0-.325.1-.625t.3-.575l8.35-11.25L9.6 4q-.125-.175-.175-.363-.05-.187-.025-.375.025-.187.125-.362t.275-.3q.35-.25.75-.2.4.05.65.4l.8 1.075.8-1.075q.25-.35.65-.4.4-.05.75.2t.4.65q.05.4-.2.75l-1.15 1.55L21.6 16.8q.2.275.3.575.1.3.1.625v3q0 .425-.288.712Q21.425 22 21 22H3q-.425 0-.712-.288Q2 21.425 2 21Zm6.225-1h7.55L12 14.725Z"/>
    </Icon>
  );
});

IconMaterialCampingFilled.displayName = 'AmauiIconMaterialCampingFilled';

export default IconMaterialCampingFilled;
