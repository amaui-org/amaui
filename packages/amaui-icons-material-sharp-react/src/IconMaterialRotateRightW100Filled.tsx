import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRotateRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RotateRightW100Filled'

      short_name='RotateRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.05 20.7v-.75q.85-.125 1.663-.45.812-.325 1.537-.85l.5.5q-.8.6-1.737.987-.938.388-1.963.563Zm-2 0q-2.875-.375-4.787-2.55-1.913-2.175-1.913-5.1 0-1.6.6-3T6.6 7.6q1.05-1.05 2.45-1.65 1.4-.6 3-.6H13L10.75 3.1l.5-.5 3.1 3.1-3.1 3.1-.5-.5L13 6.05h-.95q-2.925 0-4.962 2.038Q5.05 10.125 5.05 13.05q0 2.6 1.7 4.563 1.7 1.962 4.3 2.387Zm7.1-2.95-.5-.5q.525-.725.863-1.525.337-.8.487-1.675h.7q-.125 1-.525 1.938-.4.937-1.025 1.762Zm1.55-5.7H19q-.15-.875-.487-1.675-.338-.8-.863-1.525l.5-.5q.6.75 1 1.687.4.938.55 2.013Z"/>
    </Icon>
  );
});

IconMaterialRotateRightW100Filled.displayName = 'AmauiIconMaterialRotateRightW100Filled';

export default IconMaterialRotateRightW100Filled;
