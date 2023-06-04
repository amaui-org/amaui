import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop169W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169W100'

      short_name='Crop169'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 15.7V8.3h15.4v7.4ZM5 15h14V9H5Zm0 0V9v6Z"/>
    </Icon>
  );
});

IconMaterialCrop169W100.displayName = 'AmauiIconMaterialCrop169W100';

export default IconMaterialCrop169W100;
