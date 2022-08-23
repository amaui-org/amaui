import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMilitaryTechSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MilitaryTechSharp'
      short_name='MilitaryTech'

      {...props}
    >
      <path d="M8.9 22 10.1 18.2 7 16H10.8L11.5 13.7L7 11.05V2H17V11.05L12.5 13.7L13.2 16H17L13.9 18.2L15.1 22L12 19.65ZM9 4V9.85L11 11.05V4ZM15 4H13V11.05L15 9.85ZM12 7.825ZM11 7.525ZM13 7.525Z"/>
    </Icon>
  );
});

IconMaterialMilitaryTechSharp.displayName = 'AmauiIconMaterialMilitaryTechSharp';

export default IconMaterialMilitaryTechSharp;
