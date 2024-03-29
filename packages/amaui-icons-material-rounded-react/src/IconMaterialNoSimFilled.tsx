import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoSimFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimFilled'

      short_name='NoSim'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 17.175 7.4 4.6l2.15-2.15q.225-.225.5-.338.275-.112.575-.112H18q.825 0 1.413.587Q20 3.175 20 4Zm-.225 5.4L15.2 18l1.425-1.4L20 19.975l.025.025q-.025.825-.612 1.413Q18.825 22 18 22H6q-.825 0-1.412-.587Q4 20.825 4 20V8.625q0-.3.113-.575.112-.275.337-.5l.15-.15-3.2-3.2q-.3-.3-.287-.7.012-.4.312-.7.3-.275.7-.288.4-.012.7.288L21.2 21.175q.275.275.275.687 0 .413-.275.713-.3.3-.712.3-.413 0-.713-.3Z"/>
    </Icon>
  );
});

IconMaterialNoSimFilled.displayName = 'AmauiIconMaterialNoSimFilled';

export default IconMaterialNoSimFilled;
