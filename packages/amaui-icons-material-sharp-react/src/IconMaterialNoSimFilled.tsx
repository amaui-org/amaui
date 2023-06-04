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
      <path d="M20 17.175 7.4 4.6 10 2h10Zm.5 6.125L15.2 18l1.425-1.4L20 19.975V22H4V8l.6-.6L.7 3.5l1.425-1.4L21.9 21.875Z"/>
    </Icon>
  );
});

IconMaterialNoSimFilled.displayName = 'AmauiIconMaterialNoSimFilled';

export default IconMaterialNoSimFilled;
