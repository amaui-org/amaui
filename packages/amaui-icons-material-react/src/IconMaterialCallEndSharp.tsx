import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallEndSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndSharp'
      short_name='CallEnd'

      {...props}
    >
      <path d="M4.2 14.4 6 13V11.45Q5.275 11.825 4.6 12.312Q3.925 12.8 3.2 13.4ZM19.8 14.4 20.8 13.45Q20.075 12.8 19.4 12.325Q18.725 11.85 18 11.5V13ZM18 11.5Q18 11.5 18 11.5Q18 11.5 18 11.5ZM6 11.45Q6 11.45 6 11.45Q6 11.45 6 11.45ZM4.025 17 0.4 13.475Q2.75 10.725 5.75 9.363Q8.75 8 12 8Q15.25 8 18.238 9.363Q21.225 10.725 23.6 13.475L19.975 17L16 14V10.65Q15.05 10.35 14.05 10.175Q13.05 10 12 10Q10.95 10 9.95 10.175Q8.95 10.35 8 10.65V14Z"/>
    </Icon>
  );
});

IconMaterialCallEndSharp.displayName = 'AmauiIconMaterialCallEndSharp';

export default IconMaterialCallEndSharp;
