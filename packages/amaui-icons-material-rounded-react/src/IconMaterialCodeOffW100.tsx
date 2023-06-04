import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCodeOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeOffW100'

      short_name='CodeOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.6 20.6 7.45 8.45 3.9 12l4.375 4.375q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-4.325-4.325Q3.2 12.3 3.2 12q0-.3.225-.525L6.95 7.95 3.375 4.375q-.1-.1-.1-.225T3.4 3.9q.125-.125.25-.125t.25.125l16.225 16.225q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125Zm-1.65-5.45-.5-.5L20.1 12l-4.375-4.375q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l4.325 4.325q.225.225.225.525 0 .3-.225.525Z"/>
    </Icon>
  );
});

IconMaterialCodeOffW100.displayName = 'AmauiIconMaterialCodeOffW100';

export default IconMaterialCodeOffW100;
