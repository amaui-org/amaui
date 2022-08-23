import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutorenewSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutorenewSharpW100'
      short_name='Autorenew'

      {...props}
    >
      <path d="M15.1 5 12 8.1 11.5 7.6 13.75 5.35H12Q9.225 5.35 7.287 7.3Q5.35 9.25 5.35 12.05Q5.35 12.625 5.463 13.238Q5.575 13.85 5.8 14.425L5.275 14.95Q4.975 14.275 4.812 13.537Q4.65 12.8 4.65 12.05Q4.65 8.975 6.8 6.812Q8.95 4.65 12 4.65H13.75L11.5 2.4L12 1.9ZM8.9 19 12 15.9 12.5 16.4 10.25 18.65H12Q14.775 18.65 16.713 16.7Q18.65 14.75 18.65 11.95Q18.65 11.375 18.538 10.762Q18.425 10.15 18.2 9.575L18.725 9.05Q19.025 9.725 19.188 10.462Q19.35 11.2 19.35 11.95Q19.35 15.025 17.2 17.188Q15.05 19.35 12 19.35H10.25L12.5 21.6L12 22.1Z"/>
    </Icon>
  );
});

IconMaterialAutorenewSharpW100.displayName = 'AmauiIconMaterialAutorenewSharpW100';

export default IconMaterialAutorenewSharpW100;
