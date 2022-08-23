import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastRewindRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindRoundedFilled'
      short_name='FastRewind'

      {...props}
    >
      <path d="M19.975 16.975 13.775 12.825Q13.325 12.525 13.325 12Q13.325 11.475 13.775 11.175L19.975 7.025Q20.475 6.7 21 6.987Q21.525 7.275 21.525 7.875V16.125Q21.525 16.725 21 17.025Q20.475 17.325 19.975 16.975ZM9.975 16.975 3.775 12.825Q3.325 12.525 3.325 12Q3.325 11.475 3.775 11.175L9.975 7.025Q10.475 6.7 11 6.987Q11.525 7.275 11.525 7.875V16.125Q11.525 16.725 11 17.025Q10.475 17.325 9.975 16.975Z"/>
    </Icon>
  );
});

IconMaterialFastRewindRoundedFilled.displayName = 'AmauiIconMaterialFastRewindRoundedFilled';

export default IconMaterialFastRewindRoundedFilled;
