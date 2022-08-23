import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWrapTextSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrapTextSharpW100'
      short_name='WrapText'

      {...props}
    >
      <path d="M14.7 19.8 11.9 17 14.7 14.2 15.2 14.7 13.25 16.65H17.25Q18.25 16.65 18.95 15.95Q19.65 15.25 19.65 14.25Q19.65 13.25 18.95 12.55Q18.25 11.85 17.25 11.85H4.65V11.15H17.25Q18.525 11.15 19.438 12.062Q20.35 12.975 20.35 14.25Q20.35 15.525 19.438 16.438Q18.525 17.35 17.25 17.35H13.25L15.2 19.3ZM4.65 6.35V5.65H19.35V6.35ZM4.65 17.35V16.65H8.35V17.35Z"/>
    </Icon>
  );
});

IconMaterialWrapTextSharpW100.displayName = 'AmauiIconMaterialWrapTextSharpW100';

export default IconMaterialWrapTextSharpW100;
