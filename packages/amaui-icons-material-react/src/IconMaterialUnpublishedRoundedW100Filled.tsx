import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnpublishedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnpublishedRoundedW100Filled'
      short_name='Unpublished'

      {...props}
    >
      <path d="M12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.375 3.85 8.95Q4.4 7.525 5.375 6.375L2.5 3.5Q2.4 3.4 2.388 3.262Q2.375 3.125 2.5 3Q2.625 2.875 2.75 2.875Q2.875 2.875 3 3L21.55 21.55Q21.65 21.65 21.663 21.788Q21.675 21.925 21.55 22.05Q21.425 22.175 21.3 22.175Q21.175 22.175 21.05 22.05L17.625 18.625Q16.475 19.6 15.05 20.15Q13.625 20.7 12 20.7ZM19.4 16.6 14.525 11.725 16.5 9.75Q16.6 9.65 16.613 9.512Q16.625 9.375 16.5 9.25Q16.375 9.125 16.25 9.125Q16.125 9.125 16 9.25L14.025 11.225L7.4 4.6Q8.4 3.975 9.562 3.637Q10.725 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.275 20.363 14.438Q20.025 15.6 19.4 16.6ZM12.625 13.625 12.125 13.125 10.55 14.7 7.95 12.1Q7.85 12 7.713 11.988Q7.575 11.975 7.45 12.1Q7.325 12.225 7.325 12.35Q7.325 12.475 7.45 12.6L10.025 15.175Q10.25 15.4 10.55 15.4Q10.85 15.4 11.075 15.175Z"/>
    </Icon>
  );
});

IconMaterialUnpublishedRoundedW100Filled.displayName = 'AmauiIconMaterialUnpublishedRoundedW100Filled';

export default IconMaterialUnpublishedRoundedW100Filled;
