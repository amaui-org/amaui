import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBakeryDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BakeryDiningW100Filled'

      short_name='BakeryDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.8 17.55-2.2-1.15 1.85-4.55 2.05 3.85q.45.875-.15 1.612-.6.738-1.55.238Zm-5.4-.9.7-7.9q.05-.575.537-.725.488-.15 1.013.075l2 .8q.5.2.662.612.163.413-.112 1.088l-2.45 6.05Zm-7.15 0L4.9 10.7q-.225-.6-.15-1.087.075-.488.6-.713l2-.8q.575-.225 1.037-.05.463.175.513.6l.7 8Zm-3.05.9q-.875.45-1.537-.2Q2 16.7 2.5 15.8l2.1-3.95 1.8 4.55Zm6.1-.9L9.5 7.5q-.05-.5.338-.825.387-.325.812-.325h2.7q.575 0 .888.362.312.363.262.888l-.8 9.05Z"/>
    </Icon>
  );
});

IconMaterialBakeryDiningW100Filled.displayName = 'AmauiIconMaterialBakeryDiningW100Filled';

export default IconMaterialBakeryDiningW100Filled;
