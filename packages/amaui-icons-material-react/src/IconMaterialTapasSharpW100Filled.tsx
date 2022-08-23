import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTapasSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapasSharpW100Filled'
      short_name='Tapas'

      {...props}
    >
      <path d="M7.15 22.5V12.85H5Q4.225 12.85 3.688 12.312Q3.15 11.775 3.15 11Q3.15 10.225 3.688 9.688Q4.225 9.15 5 9.15H7.15V7.85H5Q4.225 7.85 3.688 7.312Q3.15 6.775 3.15 6Q3.15 5.225 3.688 4.687Q4.225 4.15 5 4.15H7.15V1.5H7.85V4.15H10Q10.775 4.15 11.312 4.687Q11.85 5.225 11.85 6Q11.85 6.775 11.312 7.312Q10.775 7.85 10 7.85H7.85V9.15H10Q10.775 9.15 11.312 9.688Q11.85 10.225 11.85 11Q11.85 11.775 11.312 12.312Q10.775 12.85 10 12.85H7.85V22.5ZM15.15 22.5V21.8H17.15V13.35Q15.85 13 15 12.087Q14.15 11.175 14.15 10V1.5H20.85V10Q20.85 11.175 20 12.087Q19.15 13 17.85 13.35V21.8H19.85V22.5ZM14.85 6.65H20.15V2.2H14.85Z"/>
    </Icon>
  );
});

IconMaterialTapasSharpW100Filled.displayName = 'AmauiIconMaterialTapasSharpW100Filled';

export default IconMaterialTapasSharpW100Filled;
