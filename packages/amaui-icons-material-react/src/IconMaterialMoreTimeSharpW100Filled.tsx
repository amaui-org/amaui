import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreTimeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreTimeSharpW100Filled'
      short_name='MoreTime'

      {...props}
    >
      <path d="M11 19.7Q9.4 19.7 8 19.1Q6.6 18.5 5.55 17.45Q4.5 16.4 3.9 15Q3.3 13.6 3.3 12Q3.3 10.4 3.9 9Q4.5 7.6 5.55 6.55Q6.6 5.5 8 4.9Q9.4 4.3 11 4.3Q11.525 4.3 12.012 4.362Q12.5 4.425 13 4.55V5.3Q12.5 5.15 12.012 5.075Q11.525 5 11 5Q8.1 5 6.05 7.05Q4 9.1 4 12Q4 14.9 6.05 16.95Q8.1 19 11 19Q13.9 19 15.95 16.95Q18 14.9 18 12Q18 11.725 17.975 11.425Q17.95 11.125 17.875 10.85H18.575Q18.625 11.075 18.663 11.4Q18.7 11.725 18.7 12Q18.7 13.6 18.1 15Q17.5 16.4 16.45 17.45Q15.4 18.5 14 19.1Q12.6 19.7 11 19.7ZM18 8.85V5.85H15V5.15H18V2.15H18.7V5.15H21.7V5.85H18.7V8.85ZM14.25 15.75 10.65 12.15V7H11.35V11.85L14.75 15.25Z"/>
    </Icon>
  );
});

IconMaterialMoreTimeSharpW100Filled.displayName = 'AmauiIconMaterialMoreTimeSharpW100Filled';

export default IconMaterialMoreTimeSharpW100Filled;
