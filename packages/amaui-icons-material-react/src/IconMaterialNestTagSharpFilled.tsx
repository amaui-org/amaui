import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestTagSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestTagSharpFilled'
      short_name='NestTag'

      {...props}
    >
      <path d="M12 22Q9.075 22 7.038 19.962Q5 17.925 5 15Q5 12.6 6.4 10.775Q7.8 8.95 10 8.3V3Q10 2.575 10.288 2.287Q10.575 2 11 2H13Q13.425 2 13.713 2.287Q14 2.575 14 3V8.3Q16.2 8.95 17.6 10.775Q19 12.6 19 15Q19 17.925 16.962 19.962Q14.925 22 12 22ZM12 20Q14.075 20 15.538 18.538Q17 17.075 17 15Q17 12.925 15.538 11.462Q14.075 10 12 10Q9.925 10 8.463 11.462Q7 12.925 7 15Q7 17.075 8.463 18.538Q9.925 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialNestTagSharpFilled.displayName = 'AmauiIconMaterialNestTagSharpFilled';

export default IconMaterialNestTagSharpFilled;
