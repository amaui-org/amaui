import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShowerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowerW100'

      short_name='Shower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.1 16.6q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm3.9 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm3.9 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm-8.85-3.9q-.325 0-.537-.213-.213-.212-.213-.537 0-2.275 1.563-3.888Q9.425 6.45 11.65 6.3V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.3q2.225.15 3.787 1.762Q17.7 9.675 17.7 11.95q0 .3-.225.525-.225.225-.525.225ZM7 12h10q0-2.075-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12Zm1.1 7.5q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm3.9 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm3.9 0q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialShowerW100.displayName = 'AmauiIconMaterialShowerW100';

export default IconMaterialShowerW100;
