import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutorenewSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutorenewSharpFilled'
      short_name='Autorenew'

      {...props}
    >
      <path d="M15.975 5 11.975 9 10.575 7.6 12.175 6H12Q9.5 6 7.75 7.762Q6 9.525 6 12.05Q6 12.7 6.15 13.325Q6.3 13.95 6.6 14.55L5.1 16.05Q4.55 15.1 4.275 14.1Q4 13.1 4 12.05Q4 8.7 6.325 6.35Q8.65 4 12 4H12.175L10.575 2.4L11.975 1ZM8.025 19 12.025 15 13.425 16.4 11.825 18H12Q14.5 18 16.25 16.238Q18 14.475 18 11.95Q18 11.3 17.85 10.675Q17.7 10.05 17.4 9.45L18.9 7.95Q19.45 8.9 19.725 9.9Q20 10.9 20 11.95Q20 15.3 17.675 17.65Q15.35 20 12 20H11.825L13.425 21.6L12.025 23Z"/>
    </Icon>
  );
});

IconMaterialAutorenewSharpFilled.displayName = 'AmauiIconMaterialAutorenewSharpFilled';

export default IconMaterialAutorenewSharpFilled;
