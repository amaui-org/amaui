import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrOffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOffSharpW100'
      short_name='HdrOff'

      {...props}
    >
      <path d="M19.65 20.65 13.35 14.35Q13.2 14.475 13.038 14.537Q12.875 14.6 12.6 14.6H9.9V10.9L3.3 4.3L3.8 3.8L20.15 20.15ZM19.65 14.6 18.75 12.6H17.1V14.25L16.4 13.55V9.4H19.1Q19.7 9.4 20.15 9.85Q20.6 10.3 20.6 10.9V11.1Q20.6 11.625 20.275 12Q19.95 12.375 19.5 12.55L20.4 14.6ZM6.9 9.4H7.6V14.6H6.9V12.1H4.1V14.6H3.4V9.4H4.1V11.4H6.9ZM14.1 11.25 12.25 9.4H12.6Q13.175 9.4 13.638 9.85Q14.1 10.3 14.1 10.9ZM17.1 11.9H19.1Q19.4 11.9 19.65 11.65Q19.9 11.4 19.9 11.1V10.9Q19.9 10.6 19.65 10.35Q19.4 10.1 19.1 10.1H17.1ZM10.6 13.9H12.6Q12.675 13.9 12.738 13.9Q12.8 13.9 12.85 13.85L10.6 11.6Z"/>
    </Icon>
  );
});

IconMaterialHdrOffSharpW100.displayName = 'AmauiIconMaterialHdrOffSharpW100';

export default IconMaterialHdrOffSharpW100;
