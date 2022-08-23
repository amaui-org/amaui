import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWorkspacePremiumRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacePremiumRoundedFilled'
      short_name='WorkspacePremium'

      {...props}
    >
      <path d="M10.925 12.75 12 11.925 13.05 12.75Q13.35 12.975 13.65 12.762Q13.95 12.55 13.85 12.2L13.425 10.85L14.625 9.9Q14.9 9.675 14.788 9.337Q14.675 9 14.325 9H12.9L12.475 7.675Q12.35 7.325 12 7.325Q11.65 7.325 11.525 7.675L11.1 9H9.675Q9.3 9 9.188 9.337Q9.075 9.675 9.35 9.9L10.55 10.85L10.125 12.2Q10 12.55 10.312 12.762Q10.625 12.975 10.925 12.75ZM7.325 22.55Q6.825 22.725 6.412 22.425Q6 22.125 6 21.625V15.275Q5.05 14.225 4.525 12.875Q4 11.525 4 10Q4 6.65 6.325 4.325Q8.65 2 12 2Q15.35 2 17.675 4.325Q20 6.65 20 10Q20 11.525 19.475 12.875Q18.95 14.225 18 15.275V21.625Q18 22.125 17.587 22.425Q17.175 22.725 16.675 22.55L12 21ZM12 16Q14.5 16 16.25 14.25Q18 12.5 18 10Q18 7.5 16.25 5.75Q14.5 4 12 4Q9.5 4 7.75 5.75Q6 7.5 6 10Q6 12.5 7.75 14.25Q9.5 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialWorkspacePremiumRoundedFilled.displayName = 'AmauiIconMaterialWorkspacePremiumRoundedFilled';

export default IconMaterialWorkspacePremiumRoundedFilled;
