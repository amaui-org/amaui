import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTranslateSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TranslateSharpW100'
      short_name='Translate'

      {...props}
    >
      <path d="M11.95 20 15.6 10.4H17.25L20.9 20H19.25L18.4 17.55H14.5L13.65 20ZM15 16.15H17.85L16.45 12.2H16.4ZM5.65 17.6 4.5 16.45 8.55 12.4Q7.8 11.575 7.238 10.675Q6.675 9.775 6.25 8.8H7.9Q8.275 9.525 8.675 10.087Q9.075 10.65 9.65 11.3Q10.55 10.325 11.138 9.325Q11.725 8.325 12.1 7.2H3.25V5.6H8.85V4H10.45V5.6H16.05V7.2H13.7Q13.275 8.6 12.562 9.938Q11.85 11.275 10.8 12.45L12.7 14.4L12.1 16.05L9.65 13.6Z"/>
    </Icon>
  );
});

IconMaterialTranslateSharpW100.displayName = 'AmauiIconMaterialTranslateSharpW100';

export default IconMaterialTranslateSharpW100;
