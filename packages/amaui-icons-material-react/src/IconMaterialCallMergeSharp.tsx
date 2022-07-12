import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMergeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMergeSharp'
      short_name='CallMerge'

      {...props}
    >
      <path d="M7.4 20 6 18.6 11 13.6V6.875L8.425 9.45L7 8.025L12 3.025L17.025 8.05L15.6 9.475L13 6.875V14.4ZM16.6 20.025 13.4 16.85 14.825 15.425 18 18.625Z"/>
    </Icon>
  )
});

export default IconMaterialCallMergeSharp;
