import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowSelectorTool = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowSelectorTool'

      short_name='ArrowSelectorTool'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 13.75 9.975 11h4.25L8 6.1ZM13.775 22l-3.625-7.8L6 20V2l14 11h-7.1l3.6 7.725Zm-3.8-11Z"/>
    </Icon>
  );
});

IconMaterialArrowSelectorTool.displayName = 'AmauiIconMaterialArrowSelectorTool';

export default IconMaterialArrowSelectorTool;
