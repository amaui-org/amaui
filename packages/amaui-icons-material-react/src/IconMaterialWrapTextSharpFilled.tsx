import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWrapTextSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WrapTextSharpFilled'
      short_name='WrapText'

      {...props}
    >
      <path d="M14.7 20.7 11 17 14.7 13.3 16.1 14.75 14.85 16H17.25Q17.975 16 18.488 15.488Q19 14.975 19 14.25Q19 13.525 18.488 13.012Q17.975 12.5 17.25 12.5H4V10.5H17.25Q18.825 10.5 19.913 11.587Q21 12.675 21 14.25Q21 15.825 19.913 16.913Q18.825 18 17.25 18H14.85L16.1 19.25ZM4 7V5H20V7ZM4 18V16H9V18Z"/>
    </Icon>
  );
});

IconMaterialWrapTextSharpFilled.displayName = 'AmauiIconMaterialWrapTextSharpFilled';

export default IconMaterialWrapTextSharpFilled;
