import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationDisabledW100'

      short_name='LocationDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.55 16.05-.5-.5q.425-.75.688-1.713Q19 12.875 19 12q0-2.9-2.05-4.95Q14.9 5 12 5q-.9 0-1.825.262-.925.263-1.675.688l-.5-.5q.875-.525 1.738-.775.862-.25 1.912-.375v-.95q0-.15.1-.25T12 3q.15 0 .25.1t.1.25v.95q3.125.275 5.1 2.25 1.975 1.975 2.25 5.1h.95q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-.95q-.125 1.05-.375 1.937-.25.888-.775 1.763ZM12 21q-.15 0-.25-.1t-.1-.25v-.95q-3.125-.275-5.1-2.25-1.975-1.975-2.25-5.1h-.95q-.15 0-.25-.1T3 12q0-.15.1-.25t.25-.1h.95q.125-1.35.575-2.537.45-1.188 1.175-2.063l-2.4-2.4q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l15.675 15.675q.125.125.125.25t-.125.25q-.125.125-.263.125-.137 0-.262-.125l-2.35-2.375q-.875.725-2.063 1.175-1.187.45-2.537.575v.95q0 .15-.1.25T12 21Zm0-2q1.2 0 2.45-.475 1.25-.475 2-1.075l-9.9-9.9q-.6.75-1.075 1.962Q5 10.725 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialLocationDisabledW100.displayName = 'AmauiIconMaterialLocationDisabledW100';

export default IconMaterialLocationDisabledW100;
