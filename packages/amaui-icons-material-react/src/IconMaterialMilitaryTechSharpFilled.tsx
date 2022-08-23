import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMilitaryTechSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MilitaryTechSharpFilled'
      short_name='MilitaryTech'

      {...props}
    >
      <path d="M8.9 22 10.1 18.2 7 16H10.8L11.5 13.7L7 11.05V2H17V11.05L12.5 13.7L13.2 16H17L13.9 18.2L15.1 22L12 19.65ZM12 11.65 13 11.05V4H11V11.05Z"/>
    </Icon>
  );
});

IconMaterialMilitaryTechSharpFilled.displayName = 'AmauiIconMaterialMilitaryTechSharpFilled';

export default IconMaterialMilitaryTechSharpFilled;
