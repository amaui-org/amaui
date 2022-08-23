import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnfoldLessDoubleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnfoldLessDoubleSharp'
      short_name='UnfoldLessDouble'

      {...props}
    >
      <path d="m8.85 23.95-1.4-1.4 4.575-4.575L16.6 22.55l-1.4 1.425-3.175-3.175Zm0-5-1.4-1.4 4.575-4.575L16.6 17.55l-1.4 1.425-3.175-3.175ZM12.025 11l-4.6-4.6L8.85 4.975l3.175 3.175 3.15-3.175L16.6 6.4Zm0-5-4.6-4.6L8.85-.025l3.175 3.175 3.15-3.175L16.6 1.4Z"/>
    </Icon>
  );
});

IconMaterialUnfoldLessDoubleSharp.displayName = 'AmauiIconMaterialUnfoldLessDoubleSharp';

export default IconMaterialUnfoldLessDoubleSharp;
