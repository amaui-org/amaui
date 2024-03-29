import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial60fpsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsFilled'

      short_name='60fps'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19q-1.25 0-2.125-.875T2 16V8q0-1.25.875-2.125T5 5h3.5q.625 0 1.062.438Q10 5.875 10 6.5t-.438 1.062Q9.125 8 8.5 8H5v2h3q1.25 0 2.125.875T11 13v3q0 1.25-.875 2.125T8 19Zm0-6v3h3v-3Zm10 3h4V8h-4v8Zm0 3q-1.25 0-2.125-.875T12 16V8q0-1.25.875-2.125T15 5h4q1.25 0 2.125.875T22 8v8q0 1.25-.875 2.125T19 19Z"/>
    </Icon>
  );
});

IconMaterial60fpsFilled.displayName = 'AmauiIconMaterial60fpsFilled';

export default IconMaterial60fpsFilled;
