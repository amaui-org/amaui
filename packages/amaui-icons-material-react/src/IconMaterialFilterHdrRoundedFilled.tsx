import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterHdrRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterHdrRoundedFilled'
      short_name='FilterHdr'

      {...props}
    >
      <path d="M3 18Q2.375 18 2.1 17.45Q1.825 16.9 2.2 16.4L6.2 11.075Q6.5 10.675 7 10.675Q7.5 10.675 7.8 11.075L10.9 15.2Q11.15 15.55 11.55 15.6Q11.95 15.65 12.3 15.4Q12.625 15.15 12.688 14.775Q12.75 14.4 12.55 14.05L10.25 11L13.2 7.075Q13.5 6.675 14 6.675Q14.5 6.675 14.8 7.075L21.8 16.4Q22.175 16.9 21.9 17.45Q21.625 18 21 18Z"/>
    </Icon>
  );
});

IconMaterialFilterHdrRoundedFilled.displayName = 'AmauiIconMaterialFilterHdrRoundedFilled';

export default IconMaterialFilterHdrRoundedFilled;
