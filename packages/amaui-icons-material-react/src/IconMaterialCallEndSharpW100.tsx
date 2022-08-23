import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallEndSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndSharpW100'
      short_name='CallEnd'

      {...props}
    >
      <path d="M4.15 15.25 6.65 13.35V10.45Q5.4 11.025 4.25 11.8Q3.1 12.575 2.3 13.4ZM19.85 15.25 21.75 13.45Q20.775 12.55 19.7 11.8Q18.625 11.05 17.35 10.45V13.3ZM17.35 10.45Q17.35 10.45 17.35 10.45Q17.35 10.45 17.35 10.45ZM6.65 10.45Q6.65 10.45 6.65 10.45Q6.65 10.45 6.65 10.45ZM4.1 16.175 1.325 13.45Q3.575 11.05 6.35 9.85Q9.125 8.65 12.025 8.65Q14.925 8.65 17.7 9.85Q20.475 11.05 22.725 13.45L19.95 16.175L16.675 13.7V10.2Q15.475 9.775 14.3 9.562Q13.125 9.35 12.025 9.35Q10.925 9.35 9.75 9.562Q8.575 9.775 7.375 10.2V13.7Z"/>
    </Icon>
  );
});

IconMaterialCallEndSharpW100.displayName = 'AmauiIconMaterialCallEndSharpW100';

export default IconMaterialCallEndSharpW100;
