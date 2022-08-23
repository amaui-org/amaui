import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnarchiveSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnarchiveSharpW100Filled'
      short_name='Unarchive'

      {...props}
    >
      <path d="M4.3 19.7V7.475L5.925 5.6H18.1L19.7 7.55V19.7ZM5.4 7.3H18.6L17.75 6.3H6.25ZM11.65 16.25H12.35V11.4L14.6 13.65L15.1 13.15L12 10.05L8.9 13.15L9.4 13.65L11.65 11.4Z"/>
    </Icon>
  );
});

IconMaterialUnarchiveSharpW100Filled.displayName = 'AmauiIconMaterialUnarchiveSharpW100Filled';

export default IconMaterialUnarchiveSharpW100Filled;
