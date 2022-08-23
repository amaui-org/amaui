import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMergeRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMergeRoundedW100'
      short_name='CallMerge'

      {...props}
    >
      <path d="M7.15 18.85Q7.025 18.725 7.025 18.6Q7.025 18.475 7.15 18.35L11.65 13.85V5.25L8.625 8.275Q8.525 8.375 8.4 8.375Q8.275 8.375 8.15 8.25Q8.025 8.125 8.025 8Q8.025 7.875 8.15 7.75L11.475 4.425Q11.6 4.3 11.725 4.25Q11.85 4.2 12 4.2Q12.15 4.2 12.275 4.25Q12.4 4.3 12.525 4.425L15.875 7.775Q15.975 7.875 15.975 8Q15.975 8.125 15.85 8.25Q15.725 8.375 15.6 8.375Q15.475 8.375 15.35 8.25L12.35 5.25V14.15L7.625 18.875Q7.525 18.975 7.4 18.975Q7.275 18.975 7.15 18.85ZM16.35 18.85 13.4 15.9 13.9 15.4 16.875 18.375Q16.975 18.475 16.975 18.6Q16.975 18.725 16.85 18.85Q16.725 18.975 16.6 18.975Q16.475 18.975 16.35 18.85Z"/>
    </Icon>
  );
});

IconMaterialCallMergeRoundedW100.displayName = 'AmauiIconMaterialCallMergeRoundedW100';

export default IconMaterialCallMergeRoundedW100;
