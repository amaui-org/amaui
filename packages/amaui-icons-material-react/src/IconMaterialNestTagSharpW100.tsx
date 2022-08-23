import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestTagSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestTagSharpW100'
      short_name='NestTag'

      {...props}
    >
      <path d="M12 20.7Q9.65 20.7 7.975 19.025Q6.3 17.35 6.3 15Q6.3 13.275 7.375 11.662Q8.45 10.05 10.65 9.45V3.4Q10.65 3.075 10.863 2.862Q11.075 2.65 11.4 2.65H12.6Q12.925 2.65 13.138 2.862Q13.35 3.075 13.35 3.4V9.45Q15.55 10.05 16.625 11.662Q17.7 13.275 17.7 15Q17.7 17.35 16.025 19.025Q14.35 20.7 12 20.7ZM12 20Q14.075 20 15.538 18.538Q17 17.075 17 15Q17 12.925 15.538 11.462Q14.075 10 12 10Q9.925 10 8.463 11.462Q7 12.925 7 15Q7 17.075 8.463 18.538Q9.925 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialNestTagSharpW100.displayName = 'AmauiIconMaterialNestTagSharpW100';

export default IconMaterialNestTagSharpW100;
