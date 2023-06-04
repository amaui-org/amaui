import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitPage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitPage'

      short_name='FitPage'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936V216h80v720h-80Zm320 0v-80h80v80h-80Zm0-160v-80h80v80h-80ZM280 616v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80ZM440 456v-80h80v80h-80Zm0-160v-80h80v80h-80Zm320 640V216h80v720h-80Z"/>
    </Icon>
  );
});

IconMaterialFitPage.displayName = 'AmauiIconMaterialFitPage';

export default IconMaterialFitPage;
