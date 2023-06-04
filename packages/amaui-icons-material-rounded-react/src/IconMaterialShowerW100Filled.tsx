import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShowerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowerW100Filled'

      short_name='Shower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.1 16.6q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm3.9 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm3.9 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm-8.85-3.9q-.3 0-.525-.225-.225-.225-.225-.525 0-2.275 1.563-3.888Q9.425 6.45 11.65 6.3V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.3q2.225.15 3.787 1.762Q17.7 9.675 17.7 11.95q0 .275-.225.512-.225.238-.525.238Zm1.05 6.8q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm3.9 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm3.9 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialShowerW100Filled.displayName = 'AmauiIconMaterialShowerW100Filled';

export default IconMaterialShowerW100Filled;
