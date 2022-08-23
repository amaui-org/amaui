import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUnsubscribeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnsubscribeSharp'
      short_name='Unsubscribe'

      {...props}
    >
      <path d="M2 20V4H22V11.7Q21.55 11.475 21.038 11.325Q20.525 11.175 20 11.1V8L12 13L4 8V18H12Q12 18.525 12.075 19.012Q12.15 19.5 12.3 20ZM12 11 20 6H4ZM19 23Q16.925 23 15.463 21.538Q14 20.075 14 18Q14 15.925 15.463 14.462Q16.925 13 19 13Q21.075 13 22.538 14.462Q24 15.925 24 18Q24 20.075 22.538 21.538Q21.075 23 19 23ZM16 18.5H22V17.5H16ZM4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribeSharp.displayName = 'AmauiIconMaterialUnsubscribeSharp';

export default IconMaterialUnsubscribeSharp;
