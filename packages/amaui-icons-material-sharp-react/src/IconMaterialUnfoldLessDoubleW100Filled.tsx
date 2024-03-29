import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnfoldLessDoubleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessDoubleW100Filled'

      short_name='UnfoldLessDouble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.85 22.15-.5-.5L12.025 18l3.65 3.65-.5.5-3.15-3.15Zm0-5-.5-.5L12.025 13l3.65 3.65-.5.5-3.15-3.15ZM12 11 8.35 7.35l.5-.525L12 9.975l3.175-3.15.5.5Zm0-5L8.35 2.35l.5-.525L12 4.975l3.175-3.15.5.5Z"/>
    </Icon>
  );
});

IconMaterialUnfoldLessDoubleW100Filled.displayName = 'AmauiIconMaterialUnfoldLessDoubleW100Filled';

export default IconMaterialUnfoldLessDoubleW100Filled;
