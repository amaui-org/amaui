import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGppBadRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppBadRoundedW100Filled'
      short_name='GppBad'

      {...props}
    >
      <path d="M12 12.4 13.85 14.25Q13.975 14.375 14.1 14.375Q14.225 14.375 14.35 14.25Q14.475 14.125 14.463 13.988Q14.45 13.85 14.35 13.75L12.5 11.9L14.35 10.05Q14.475 9.925 14.475 9.8Q14.475 9.675 14.35 9.55Q14.225 9.425 14.088 9.438Q13.95 9.45 13.85 9.55L12 11.4L10.15 9.55Q10.025 9.425 9.9 9.425Q9.775 9.425 9.65 9.55Q9.525 9.675 9.538 9.812Q9.55 9.95 9.65 10.05L11.5 11.9L9.65 13.75Q9.525 13.875 9.525 14Q9.525 14.125 9.65 14.25Q9.775 14.375 9.913 14.363Q10.05 14.35 10.15 14.25ZM12 20.575Q11.875 20.575 11.788 20.575Q11.7 20.575 11.625 20.525Q8.9 19.525 7.1 16.938Q5.3 14.35 5.3 11.1V6.95Q5.3 6.475 5.575 6.087Q5.85 5.7 6.275 5.525L11.475 3.6Q11.75 3.5 12 3.5Q12.25 3.5 12.525 3.6L17.725 5.525Q18.15 5.7 18.425 6.087Q18.7 6.475 18.7 6.95V11.1Q18.7 14.35 16.9 16.938Q15.1 19.525 12.375 20.525Q12.275 20.575 12 20.575Z"/>
    </Icon>
  );
});

IconMaterialGppBadRoundedW100Filled.displayName = 'AmauiIconMaterialGppBadRoundedW100Filled';

export default IconMaterialGppBadRoundedW100Filled;
