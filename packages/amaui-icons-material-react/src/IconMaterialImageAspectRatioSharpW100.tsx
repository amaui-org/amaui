import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageAspectRatioSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageAspectRatioSharpW100'
      short_name='ImageAspectRatio'

      {...props}
    >
      <path d="M13.75 12H15.25V10.5H13.75ZM13.75 15.75H15.25V14.25H13.75ZM6.25 12H7.75V10.5H6.25ZM10 12H11.5V10.5H10ZM3.3 18.7V5.3H20.7V18.7ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialImageAspectRatioSharpW100.displayName = 'AmauiIconMaterialImageAspectRatioSharpW100';

export default IconMaterialImageAspectRatioSharpW100;
