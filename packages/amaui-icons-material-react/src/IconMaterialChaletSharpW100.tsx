import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChaletSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChaletSharpW100'
      short_name='Chalet'

      {...props}
    >
      <path d="M17.65 10.85V9.45L16.75 10.35L16.25 9.85L17.65 8.45V7.35H16.55L15.15 8.75L14.65 8.25L15.55 7.35H14.15V6.65H15.55L14.65 5.75L15.15 5.25L16.55 6.625H17.65V5.55L16.25 4.15L16.75 3.65L17.65 4.55V3.15H18.35V4.55L19.25 3.65L19.75 4.15L18.35 5.55V6.65H19.45L20.85 5.25L21.35 5.75L20.45 6.65H21.85V7.35H20.45L21.35 8.25L20.85 8.75L19.45 7.35H18.35V8.45L19.75 9.85L19.25 10.35L18.35 9.45V10.85ZM14.85 15.175 13.7 14.025V18.7H6.3V14L5.4 14.9L4.925 14.425L10 9.35L15.325 14.675ZM7 18H9.65V15.65H10.35V18H13V13.325L10 10.325L7 13.3ZM7 18H9.65H10.35H13H10H7Z"/>
    </Icon>
  );
});

IconMaterialChaletSharpW100.displayName = 'AmauiIconMaterialChaletSharpW100';

export default IconMaterialChaletSharpW100;
