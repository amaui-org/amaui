import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNatureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatureW100'

      short_name='Nature'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 20.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5V15.2H9q-1.55 0-2.625-1.075T5.3 11.5q0-1.275.875-2.225.875-.95 2.075-1.475.2-2 1.2-3t2.55-1q1.55 0 2.55 1 1 1 1.2 3 1.225.475 2.087 1.45.863.975.863 2.25 0 1.55-1.075 2.625T15 15.2h-2.65v4.95h5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM9 14.5h6q1.25 0 2.125-.875T18 11.5q0-1.075-.725-1.863Q16.55 8.85 15.5 8.45l-.4-.15-.05-.5q-.175-1.7-.975-2.5T12 4.5q-1.275 0-2.075.8-.8.8-.975 2.5l-.05.5-.6.25q-.95.4-1.625 1.162Q6 10.475 6 11.5q0 1.25.875 2.125T9 14.5Zm3-5Z"/>
    </Icon>
  );
});

IconMaterialNatureW100.displayName = 'AmauiIconMaterialNatureW100';

export default IconMaterialNatureW100;
