import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddAPhotoSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAPhotoSharpW100'
      short_name='AddAPhoto'

      {...props}
    >
      <path d="M10.675 17.5Q12.15 17.5 13.163 16.488Q14.175 15.475 14.175 14Q14.175 12.525 13.163 11.512Q12.15 10.5 10.675 10.5Q9.2 10.5 8.188 11.512Q7.175 12.525 7.175 14Q7.175 15.475 8.188 16.488Q9.2 17.5 10.675 17.5ZM1.975 20.7V7.3H6.375L8.225 5.3H13.125L14.325 6.5V8H2.675V20H18.675V10.35H19.375V20.7ZM18.7 8V6H16.7V5.3H18.7V3.3H19.4V5.3H21.4V6H19.4V8ZM2.675 20V8V10.35V20Z"/>
    </Icon>
  );
});

IconMaterialAddAPhotoSharpW100.displayName = 'AmauiIconMaterialAddAPhotoSharpW100';

export default IconMaterialAddAPhotoSharpW100;
