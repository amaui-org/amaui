import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsCricket = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsCricket'

      short_name='SportsCricket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 17.7 1.625 7.825l4.2-4.2L15.7 13.5Zm0-2.8 1.4-1.4-7.1-7.1-1.4 1.4Zm7.1 7.1-4.25-4.25 1.4-1.4L20 20.6Zm-.1-13q-1.45 0-2.475-1.025Q15 6.95 15 5.5q0-1.45 1.025-2.475Q17.05 2 18.5 2q1.45 0 2.475 1.025Q22 4.05 22 5.5q0 1.45-1.025 2.475Q19.95 9 18.5 9Zm0-2q.625 0 1.062-.438Q20 6.125 20 5.5t-.438-1.062Q19.125 4 18.5 4t-1.062.438Q17 4.875 17 5.5t.438 1.062Q17.875 7 18.5 7Zm0-1.5Zm-9.85 5.15Z"/>
    </Icon>
  );
});

IconMaterialSportsCricket.displayName = 'AmauiIconMaterialSportsCricket';

export default IconMaterialSportsCricket;
