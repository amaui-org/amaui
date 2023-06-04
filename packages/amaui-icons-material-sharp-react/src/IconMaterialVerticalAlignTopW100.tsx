import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalAlignTopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignTopW100'

      short_name='VerticalAlignTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 20.35V9.25L8.4 12.5l-.5-.5L12 7.9l4.1 4.1-.5.5-3.25-3.25v11.1Zm-7-16v-.7h14.7v.7Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignTopW100.displayName = 'AmauiIconMaterialVerticalAlignTopW100';

export default IconMaterialVerticalAlignTopW100;
