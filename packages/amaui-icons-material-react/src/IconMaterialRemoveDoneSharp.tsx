import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveDoneSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveDoneSharp'
      short_name='RemoveDone'

      {...props}
    >
      <path d="M21.825 21.8 15.225 15.2 12.375 18.05 6.725 12.4 8.125 10.95 12.375 15.2 13.775 13.8 3.425 3.45 4.825 2 23.225 20.4ZM18.025 12.4 16.625 11 21.525 6.1 22.975 7.45ZM15.175 9.55 13.775 8.15 15.925 6 17.325 7.4ZM6.725 18.05 1.075 12.4 2.475 11 6.725 15.25 8.125 16.65Z"/>
    </Icon>
  );
});

IconMaterialRemoveDoneSharp.displayName = 'AmauiIconMaterialRemoveDoneSharp';

export default IconMaterialRemoveDoneSharp;
