import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldMoreDoubleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldMoreDoubleW100Filled'

      short_name='UnfoldMoreDouble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.025 22.15 8.35 18.5l.5-.5 3.175 3.15 3.15-3.15.5.5Zm0-5L8.35 13.5l.5-.5 3.175 3.15 3.15-3.15.5.5ZM8.85 11l-.5-.525L12 6.825l3.675 3.675-.5.5L12 7.85Zm0-5-.5-.525L12 1.825 15.675 5.5l-.5.5L12 2.85Z"/>
    </Icon>
  );
});

IconMaterialUnfoldMoreDoubleW100Filled.displayName = 'AmauiIconMaterialUnfoldMoreDoubleW100Filled';

export default IconMaterialUnfoldMoreDoubleW100Filled;
