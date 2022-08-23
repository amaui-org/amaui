import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterVintageRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterVintageRoundedFilled'
      short_name='FilterVintage'

      {...props}
    >
      <path d="M12.05 22Q10.625 22 9.525 21.1Q8.425 20.2 8.15 18.8Q6.825 19.225 5.475 18.75Q4.125 18.275 3.4 17.1Q2.65 15.9 2.85 14.438Q3.05 12.975 4.15 12Q3.1 11.05 2.888 9.65Q2.675 8.25 3.35 7.05Q4.025 5.85 5.388 5.312Q6.75 4.775 8.1 5.2Q8.375 3.8 9.475 2.9Q10.575 2 12 2Q13.425 2 14.525 2.9Q15.625 3.8 15.9 5.2Q17.3 4.775 18.613 5.275Q19.925 5.775 20.65 7.05Q21.325 8.3 21.138 9.662Q20.95 11.025 19.85 12Q20.95 12.975 21.163 14.412Q21.375 15.85 20.7 17.1Q19.975 18.375 18.663 18.8Q17.35 19.225 15.95 18.8Q15.675 20.2 14.575 21.1Q13.475 22 12.05 22ZM12 16Q13.65 16 14.825 14.825Q16 13.65 16 12Q16 10.35 14.825 9.175Q13.65 8 12 8Q10.35 8 9.175 9.175Q8 10.35 8 12Q8 13.65 9.175 14.825Q10.35 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialFilterVintageRoundedFilled.displayName = 'AmauiIconMaterialFilterVintageRoundedFilled';

export default IconMaterialFilterVintageRoundedFilled;
