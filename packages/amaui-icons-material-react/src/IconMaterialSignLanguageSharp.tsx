import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignLanguageSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignLanguageSharp'
      short_name='SignLanguage'

      {...props}
    >
      <path d="M4.5 24.1V22.1H10V21.1H3V19.1H10V18.1H2V16.1H10V15.1H3.5V13.1H12.5L10.9 9.975L12.5 9.1L19 15.325V24.1ZM12 22.1H17V16.125L14 13.3V15.1H12ZM9.925 8.225 6.75 4.9 8.2 3.525 11.775 7.225ZM8.575 11.1 5.625 8.05 7.075 6.675 9.025 8.725 8.225 9.15 9.225 11.1ZM20.425 13.925 19 12.55 20 11.575V7.45L18.7 8.7L17.3 7.25L15.375 9.1L12.825 6.65L12.675 6.725L8.225 2.1L9.675 0.725L15.225 6.5L15.925 5.8L11.45 1.1L12.875 -0.275L19.1 6.225L20.075 3.45H22V12.45ZM14.5 17.7ZM17.15 10.775Z"/>
    </Icon>
  );
});

IconMaterialSignLanguageSharp.displayName = 'AmauiIconMaterialSignLanguageSharp';

export default IconMaterialSignLanguageSharp;
