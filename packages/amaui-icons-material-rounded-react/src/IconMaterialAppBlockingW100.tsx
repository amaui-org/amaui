import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAppBlockingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBlockingW100'

      short_name='AppBlocking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.35 15.6q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm0-.7q.5 0 .938-.15.437-.15.862-.45l-4.1-4.1q-.3.425-.45.862-.15.438-.15.938 0 1.2.85 2.05.85.85 2.05.85Zm2.3-1.1q.35-.45.475-.875T20.25 12q0-1.2-.85-2.05-.85-.85-2.05-.85-.5 0-.937.15-.438.15-.863.45ZM7.8 21.7q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v3.1H17V5.35H7v13.3h10V17.1h.7v3.1q0 .625-.438 1.062-.437.438-1.062.438ZM7 19.35v.85q0 .3.25.55.25.25.55.25h8.4q.3 0 .55-.25.25-.25.25-.55v-.85Zm0-14.7h10V3.8q0-.3-.25-.55Q16.5 3 16.2 3H7.8q-.3 0-.55.25Q7 3.5 7 3.8ZM7 3v1.65V3Zm0 18v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialAppBlockingW100.displayName = 'AmauiIconMaterialAppBlockingW100';

export default IconMaterialAppBlockingW100;
