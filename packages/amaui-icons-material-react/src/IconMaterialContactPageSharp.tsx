import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactPageSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPageSharp'
      short_name='ContactPage'

      {...props}
    >
      <path d="M12 14Q12.825 14 13.413 13.412Q14 12.825 14 12Q14 11.175 13.413 10.587Q12.825 10 12 10Q11.175 10 10.588 10.587Q10 11.175 10 12Q10 12.825 10.588 13.412Q11.175 14 12 14ZM8 18H16V17.425Q16 16.825 15.675 16.325Q15.35 15.825 14.775 15.575Q14.125 15.3 13.438 15.15Q12.75 15 12 15Q11.25 15 10.562 15.15Q9.875 15.3 9.225 15.575Q8.65 15.825 8.325 16.325Q8 16.825 8 17.425ZM4 22V2H14L20 8V22ZM6 20H18V8.85L13.15 4H6ZM6 20V4V8.85V20Z"/>
    </Icon>
  );
});

IconMaterialContactPageSharp.displayName = 'AmauiIconMaterialContactPageSharp';

export default IconMaterialContactPageSharp;
