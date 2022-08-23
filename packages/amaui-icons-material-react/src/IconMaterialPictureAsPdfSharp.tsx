import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPictureAsPdfSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PictureAsPdfSharp'
      short_name='PictureAsPdf'

      {...props}
    >
      <path d="M9 12.5H10V10.5H11Q11.425 10.5 11.713 10.212Q12 9.925 12 9.5V8.5Q12 8.075 11.713 7.787Q11.425 7.5 11 7.5H9ZM10 9.5V8.5H11V9.5ZM13 12.5H15Q15.425 12.5 15.713 12.212Q16 11.925 16 11.5V8.5Q16 8.075 15.713 7.787Q15.425 7.5 15 7.5H13ZM14 11.5V8.5H15V11.5ZM17 12.5H18V10.5H19V9.5H18V8.5H19V7.5H17ZM6 18V2H22V18ZM8 16H20V4H8ZM2 22V6H4V20H18V22ZM8 16V4V16Z"/>
    </Icon>
  );
});

IconMaterialPictureAsPdfSharp.displayName = 'AmauiIconMaterialPictureAsPdfSharp';

export default IconMaterialPictureAsPdfSharp;
