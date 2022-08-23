import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEscalatorWarningSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorWarningSharp'
      short_name='EscalatorWarning'

      {...props}
    >
      <path d="M6.5 6Q5.675 6 5.088 5.412Q4.5 4.825 4.5 4Q4.5 3.175 5.088 2.587Q5.675 2 6.5 2Q7.325 2 7.912 2.587Q8.5 3.175 8.5 4Q8.5 4.825 7.912 5.412Q7.325 6 6.5 6ZM17 11Q16.375 11 15.938 10.562Q15.5 10.125 15.5 9.5Q15.5 8.875 15.938 8.438Q16.375 8 17 8Q17.625 8 18.062 8.438Q18.5 8.875 18.5 9.5Q18.5 10.125 18.062 10.562Q17.625 11 17 11ZM4.5 22V15H3V7H9.15L13.3 14.175L14.775 12H20V17H19V22H15V14.9L14.225 16H12.025L9.5 11.6V22Z"/>
    </Icon>
  );
});

IconMaterialEscalatorWarningSharp.displayName = 'AmauiIconMaterialEscalatorWarningSharp';

export default IconMaterialEscalatorWarningSharp;
