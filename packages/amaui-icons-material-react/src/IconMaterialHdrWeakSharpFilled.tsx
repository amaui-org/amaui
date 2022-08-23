import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrWeakSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrWeakSharpFilled'
      short_name='HdrWeak'

      {...props}
    >
      <path d="M5 16Q3.35 16 2.175 14.825Q1 13.65 1 12Q1 10.35 2.175 9.175Q3.35 8 5 8Q6.65 8 7.825 9.175Q9 10.35 9 12Q9 13.65 7.825 14.825Q6.65 16 5 16ZM17 18Q14.5 18 12.75 16.25Q11 14.5 11 12Q11 9.5 12.75 7.75Q14.5 6 17 6Q19.5 6 21.25 7.75Q23 9.5 23 12Q23 14.5 21.25 16.25Q19.5 18 17 18ZM17 16Q18.65 16 19.825 14.825Q21 13.65 21 12Q21 10.35 19.825 9.175Q18.65 8 17 8Q15.35 8 14.175 9.175Q13 10.35 13 12Q13 13.65 14.175 14.825Q15.35 16 17 16Z"/>
    </Icon>
  );
});

IconMaterialHdrWeakSharpFilled.displayName = 'AmauiIconMaterialHdrWeakSharpFilled';

export default IconMaterialHdrWeakSharpFilled;
