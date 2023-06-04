import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderTopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderTopW100'

      short_name='BorderTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 20.5v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h17v1Zm4 16v-1h1v1Zm0-8v-1h1v1Zm4 8v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm4 12v-1h1v1Zm0-8v-1h1v1Zm4 8v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Zm0-4v-1h1v1Z"/>
    </Icon>
  );
});

IconMaterialBorderTopW100.displayName = 'AmauiIconMaterialBorderTopW100';

export default IconMaterialBorderTopW100;
