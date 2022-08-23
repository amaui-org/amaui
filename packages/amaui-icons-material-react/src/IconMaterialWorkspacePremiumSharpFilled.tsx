import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWorkspacePremiumSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacePremiumSharpFilled'
      short_name='WorkspacePremium'

      {...props}
    >
      <path d="M9.675 13.7 10.55 10.85 8.25 9H11.1L12 6.2L12.9 9H15.75L13.425 10.85L14.3 13.7L12 11.925ZM6 23V15.275Q5.05 14.225 4.525 12.875Q4 11.525 4 10Q4 6.65 6.325 4.325Q8.65 2 12 2Q15.35 2 17.675 4.325Q20 6.65 20 10Q20 11.525 19.475 12.875Q18.95 14.225 18 15.275V23L12 21ZM12 16Q14.5 16 16.25 14.25Q18 12.5 18 10Q18 7.5 16.25 5.75Q14.5 4 12 4Q9.5 4 7.75 5.75Q6 7.5 6 10Q6 12.5 7.75 14.25Q9.5 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialWorkspacePremiumSharpFilled.displayName = 'AmauiIconMaterialWorkspacePremiumSharpFilled';

export default IconMaterialWorkspacePremiumSharpFilled;
