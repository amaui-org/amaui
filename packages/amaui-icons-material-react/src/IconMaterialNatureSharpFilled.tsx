import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNatureSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatureSharpFilled'
      short_name='Nature'

      {...props}
    >
      <path d="M5 22V20H11V16H9Q6.925 16 5.463 14.537Q4 13.075 4 11Q4 9.5 4.825 8.237Q5.65 6.975 7.05 6.4Q7.275 4.525 8.688 3.262Q10.1 2 12 2Q13.9 2 15.312 3.262Q16.725 4.525 16.95 6.4Q18.35 6.975 19.175 8.237Q20 9.5 20 11Q20 13.075 18.538 14.537Q17.075 16 15 16H13V20H19V22Z"/>
    </Icon>
  );
});

IconMaterialNatureSharpFilled.displayName = 'AmauiIconMaterialNatureSharpFilled';

export default IconMaterialNatureSharpFilled;
