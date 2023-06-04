import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial30fps = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fps'

      short_name='30fps'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 19q-.625 0-1.062-.438Q2 18.125 2 17.5t.438-1.062Q2.875 16 3.5 16H8v-2.5H3.5q-.625 0-1.062-.438Q2 12.625 2 12t.438-1.062Q2.875 10.5 3.5 10.5H8V8H3.5q-.625 0-1.062-.438Q2 7.125 2 6.5t.438-1.062Q2.875 5 3.5 5H8q1.25 0 2.125.875T11 8v1.9q0 .875-.613 1.487Q9.775 12 8.9 12q.875 0 1.487.613.613.612.613 1.487V16q0 1.25-.875 2.125T8 19ZM15 16h4V8h-4v8Zm0 3q-1.25 0-2.125-.875T12 16V8q0-1.25.875-2.125T15 5h4q1.25 0 2.125.875T22 8v8q0 1.25-.875 2.125T19 19Z"/>
    </Icon>
  );
});

IconMaterial30fps.displayName = 'AmauiIconMaterial30fps';

export default IconMaterial30fps;
